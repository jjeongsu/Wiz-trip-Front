import { useState, useEffect, useParams } from 'react'
import {
  createClockTimes,
  createSelectTimes,
} from '../../utils/createSelectTimes'
import CloseIcon from '../../assets/close-icon'
import * as M from '../../styles/planmodal.style'
import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { createDatesArr } from '../../utils/createDaysArr'
import { categoryToEng, categoryToKo } from '../../assets/category-palette'
import { createTimestamp } from '../../utils/createTimestamp'
import { clockTimes } from '../../utils/createSelectTimes'
import KakaoPostcode from './KakaoPostcode'
import {
  createPlan,
  getTargetPlan,
  unlockPlan,
  updatePlan,
} from '../../apis/api/plan'
import { useMutation, useQueryClient, useQuery } from 'react-query'
function PlanModal({
  isOpenModal,
  setIsOpenModal,
  defaultDate,
  days,
  setPlans,
  tripId,
}) {
  const times = createSelectTimes()

  const {
    register,
    handleSubmit,
    watch,
    getValues,
    setError,
    setValue,
    clearErrors,
    reset,
    formState: { errors, isDirty, isValid },
  } = useForm({ mode: 'onChange' })
  const [isOpenPostcode, setIsOpenPostcode] = useState(false)
  const [address, setAddress] = useState('')
  const isUpdate = !!(isOpenModal !== true && isOpenModal !== false) //수정상황인지, 생성상황인지
  const {
    data: preUpdatePlan,
    isLoading: isLoadingPlanData,
    isSuccess,
  } = useQuery(['plan'], () => getTargetPlan(tripId, ~~isOpenModal), {
    enabled: !!isOpenModal && isUpdate,
  })
  const queryClient = useQueryClient()
  const uploadPlanMutation = useMutation({
    mutationFn: newPlan => createPlan(tripId, newPlan),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getAllPlan'] })
    },
  })
  const updatePlanMutation = useMutation({
    mutationFn: newPlan => updatePlan(tripId, newPlan),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['getAllPlan'] })
    },
  })
  const onSubmit = data => {
    //실제 plan 생성
    const cur_date = days[data.selectDay]
    console.log('data', data)
    const obj = createTimestamp(
      cur_date.date_full,
      data.startTime,
      data.endTime
    )

    const newPlan = {
      planId: isOpenModal,
      // name: 'defaultName',
      address: {
        roadNameAddress: address,
        localAddress: 'defaultLocalAddress',
      },
      startTime: obj.startTimestamp,
      finishTime: obj.endTimestamp,
      content: data.content,
      category: categoryToEng[data.category],
    }
    if (isUpdate) {
      updatePlanMutation.mutate(newPlan)
    } else {
      uploadPlanMutation.mutate(newPlan)
    }

    //초기화
    const response = unlockPlan(tripId, isOpenModal)
    setIsOpenModal(false)
    reset({
      selectDay: 0,
      startTime: 0,
      endTime: 0,
      content: '',
      category: '',
    })
    setAddress('')
  }
  console.log('isDirty', isDirty)
  console.log('isOpenModal', isOpenModal, '수정상황인가요?', isUpdate)
  useEffect(() => {
    if (
      isOpenModal !== false &&
      isOpenModal !== true &&
      preUpdatePlan != undefined
    ) {
      //수정상태일 경우, 현재 Plan내용으로 리셋시키기
      const currentPlan = preUpdatePlan
      console.log('currentPlan', currentPlan)
      const today = currentPlan.startTime?.slice(0, 8)
      const todayIndex = days.findIndex(
        date => date.date_full.replaceAll('-', '') == today
      )
      const trim_startTime = currentPlan.startTime?.slice(9)
      const trim_endTime = currentPlan.finishTime?.slice(9)
      const startIndex = clockTimes.findIndex(
        time => time.text === trim_startTime
      )
      const endIndex = clockTimes.findIndex(time => time.text == trim_endTime)
      console.log('start', startIndex, 'end', endIndex, 'today', todayIndex)
      setAddress(currentPlan.address?.roadNameAddress ?? '')
      setValue('category', categoryToKo[currentPlan.category], {
        shouldDirty: true,
        shouldValidate: true,
      })
      setValue('content', currentPlan.content, {
        shouldDirty: true,
        shouldValidate: true,
      })
      setValue('selectDay', todayIndex, {
        shouldDirty: true,
        shouldValidate: true,
      })
      setValue('startTime', startIndex, {
        shouldDirty: true,
        shouldValidate: true,
      })
      setValue('endTime', endIndex, { shouldDirty: true, shouldValidate: true })
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isOpenModal, isSuccess])

  if (isUpdate) {
    if (isLoadingPlanData) {
      return <>로딩중</>
    }
  }

  return (
    <div>
      <M.ModalWrapper isopen={isOpenModal}>
        <div className="button-box">
          <button
            className="close-modal-button"
            onClick={() => {
              if (isUpdate) {
                const response = unlockPlan(tripId, isOpenModal)
                reset({
                  selectDay: 0,
                  startTime: 0,
                  endTime: 0,
                  content: '',
                  category: '',
                })
                setAddress('')
                setIsOpenModal(false)
              } else {
                reset({
                  selectDay: 0,
                  startTime: 0,
                  endTime: 0,
                  content: '',
                  category: '',
                })
                setAddress('')
                setIsOpenModal(false)
              }
            }}
          >
            <CloseIcon width="19" height="19" fill="#6446ff" />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <M.FormWrapper>
            <div className="field">
              <p className="label">장소</p>
              <div className="address-box">
                <input value={address} />
                <KakaoPostcode setAddress={setAddress} />
              </div>
            </div>
            <div className="field">
              <p className="label">
                시간
                <strong>*</strong>
              </p>
              <div>
                <M.Selecter
                  className="seleter"
                  name="selectDay"
                  {...register('selectDay', { required: true })}
                >
                  {days.map((day, index) => (
                    <option key={index} value={index}>
                      {day.date_trimed}
                    </option>
                  ))}
                </M.Selecter>
                <br />
                <M.Selecter
                  className="seleter"
                  name="startTime"
                  {...register('startTime', { required: true })}
                >
                  {times.map((time, index) => (
                    <option key={index} value={index}>
                      {time.text}
                    </option>
                  ))}
                </M.Selecter>
                <span> ~ </span>
                <M.Selecter
                  className="seleter"
                  name="endTime"
                  {...register('endTime', { required: true })}
                >
                  {times.slice(watch('startTime')).map((time, index) => (
                    <option key={index} value={index}>
                      {time.text}
                    </option>
                  ))}
                </M.Selecter>
              </div>
            </div>

            <div className="field">
              <p className="label">
                카테고리<strong>*</strong>
              </p>
              <M.Selecter
                name="category"
                {...register('category', { required: true })}
              >
                {['음식', '숙소', '관광', '기타'].map((category, index) => (
                  <option key={index} value={category}>
                    {category}
                  </option>
                ))}
              </M.Selecter>
            </div>

            <div className="field">
              <p className="label">
                내용<strong>*</strong>
              </p>
              <textarea
                name="content"
                {...register('content', { required: true })}
              />
            </div>
          </M.FormWrapper>
          <div className="button-box">
            {!isUpdate ? (
              <button className="submit-button">완료</button>
            ) : isDirty ? (
              <button className="submit-button">완료</button>
            ) : (
              <>수정사항이 없음</>
            )}
          </div>
        </form>
      </M.ModalWrapper>
      <M.ModalBackground isopen={isOpenModal}>{''}</M.ModalBackground>
    </div>
  )
}
export default PlanModal
