import React,{useEffect, useState} from 'react'
import {categories} from '../../assets/memo-categories'
import * as M from '../../styles/memo.style'
import MemoItem from './MemoItem';
import MemoForm from './MemoForm';
import { useQuery } from 'react-query';
import { getMemoData } from '../../apis/api/memo';
import { useParams } from 'react-router';

function Memo(){

  const tripId = useParams().tripId;
  const [selectedCategory, setSelectedCategory] = useState('ACCOM');
  const { isLoading, isSuccess, data: memoData } = useQuery(['getMemoData', selectedCategory], () => getMemoData(tripId, selectedCategory));

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
      {!isLoading && isSuccess && memoData?.length > 0 &&
        memoData.map((item, id) => (
          <MemoItem key={id} category={selectedCategory} item={item} />
        ))}
      <MemoForm category={selectedCategory}/>
    </M.MemoContainer>
    </M.MemoLayout>
  );
}


export default Memo