import React,{useEffect, useState} from 'react'
import {categories} from '../../assets/memo-categories'
import {memos} from '../../assets/dummyData/memo'
import * as M from '../../styles/memo.style'
import MemoItem from './MemoItem';
import MemoForm from './MemoForm';
import { useDispatch, useSelector } from 'react-redux';
import { initMemo } from '../../services/memo';
import { useQuery } from 'react-query';
import { getMemoData } from '../../apis/api/memo';
import { useParams } from 'react-router';

function Memo(){

  const dispatch = useDispatch();

  const tripId = useParams().tripId;
  const [selectedCategory, setSelectedCategory] = useState('ACCOM');
  const { isLoading, data: memoData } = useQuery('getMemoData', () => getMemoData(tripId, selectedCategory));

  const items = useSelector(state=> state.Memo);
  

  useEffect(()=>{
       
    if(memoData){
      dispatch(initMemo(memoData));
    }

    
  },[dispatch])



  console.log(items);
  if(isLoading) return<div>is loading...</div>
  return (
    <M.MemoLayout>
      <M.CategoryLayout>
        {Object.keys(categories).map(category => (
          <M.CategoryButton
            type="button"
            key={category}
            $category={category}
            onClick={() => setSelectedCategory(category)}
          >
            {categories[category]}
          </M.CategoryButton>
        ))}
    </M.CategoryLayout>
    <M.MemoContainer $category={selectedCategory}>
      {items.length > 0 && items.map((item, id)=>(
        <MemoItem key={id} category={selectedCategory} item={item}/>
      ))}
      <MemoForm category={selectedCategory}/>
    </M.MemoContainer>
    </M.MemoLayout>
  );
}


export default Memo