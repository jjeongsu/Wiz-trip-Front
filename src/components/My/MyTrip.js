import React, {useState, useEffect} from 'react'
import * as M from '../../styles/mylayout.style'
import * as T from '../../styles/mytrip.style'
import PlanningItemList from './PlanningItemList';
import FinishedItemList from './FinishedItemList';

function MyTrip() {

  const [Menu, setMenu] = useState('planning');

  return (
    <div>
        <M.TitleText>나의 여행</M.TitleText>
        <M.Line/>
        <T.MenuWrapper> 
            <T.MenuButton $active={Menu === 'planning'} onClick={() => Menu !== 'planning' && setMenu('planning')}>· 예정된 여행</T.MenuButton>
            <T.MenuButton $active={Menu === 'finished'}  onClick={() => Menu !== 'finished' && setMenu('finished')}>· 완료된 여행</T.MenuButton>
        </T.MenuWrapper>

        {Menu==='planning'? <PlanningItemList/>: <FinishedItemList/>}
    </div>
  )
}

export default MyTrip;