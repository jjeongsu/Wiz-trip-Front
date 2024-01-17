import React, {useState, useEffect} from 'react'
import * as M from '../../styles/mylayout.style'
import * as T from '../../styles/mytrip.style'
import PlanningItemList from './PlanningItemList';
import FinishedItemList from './FinishedItemList';
import { getMyTrip } from '../../apis/api/trip';
import { useQuery } from 'react-query';
function MyTrip() {

  const [Menu, setMenu] = useState('planning');
  const {
    isLoading, 
    isSuccess,
    data:myTripData
  } = useQuery('getMyTrip', () => getMyTrip());
  const [ items, setItems] = useState([]);
 

  useEffect(()=>{
    
    if(isSuccess){
      setItems(myTripData.filter(item => item.finished === (Menu === 'finished')));
    }
    
  },[Menu, myTripData, isSuccess])


  if(isLoading) return <div></div>

  return (
    <div>
        <M.TitleText>나의 여행</M.TitleText>
        <M.Line/>
        <T.MenuWrapper> 
            <T.MenuButton $active={Menu === 'planning'} onClick={() => Menu !== 'planning' && setMenu('planning')}>· 예정된 여행</T.MenuButton>
            <T.MenuButton $active={Menu === 'finished'}  onClick={() => Menu !== 'finished' && setMenu('finished')}>· 완료된 여행</T.MenuButton>
        </T.MenuWrapper>

        {Menu==='planning'? 
          <PlanningItemList myTripData={items} />
          : 
          <FinishedItemList myTripData={items}/>
        }

    </div>
  )
}

export default MyTrip;
