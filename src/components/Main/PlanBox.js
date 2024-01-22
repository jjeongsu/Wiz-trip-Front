import React from 'react';
import * as P from '../../styles/planbox.style.js';


function PlanBox({setInputPlan}) {

  return (
    <>
    < P.BoxLayout onClick={()=>{setInputPlan(true)}}>
      <P.BasicLabel>여행지</P.BasicLabel>
      <P.VerticalLine/>
      <P.BasicLabel>시작날짜</P.BasicLabel>
      <P.VerticalLine/>
      <P.BasicLabel>종료날짜</P.BasicLabel>
      <P.SubmitButton>계획 시작하기</P.SubmitButton>
    </P.BoxLayout>
    </>

  )
}


export default PlanBox;