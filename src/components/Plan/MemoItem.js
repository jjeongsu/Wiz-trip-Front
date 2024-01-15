import React from 'react'
import * as M from '../../styles/memo-item.style'
import DeleteIcon from '../../assets/delete-icon';
import { deleteMemoData } from '../../apis/api/memo';
import { useMutation, useQueryClient } from 'react-query';
function MemoItem({category, item}) {
    console.log(category);
    console.log(item);
  
    const queryClient = useQueryClient();

    const deleteMutation = useMutation(deleteMemoData, {
      onSuccess: () => {
        queryClient.invalidateQueries('getMemoData');
      },
    });

    const handleDelete = async (tripId, memoId) => {
      // console.log(item.tripId, item.memoId);
      await deleteMutation.mutateAsync({tripId, memoId});
  
    }
    return (
      <M.ItemLayout $category={category}>
          <M.ContentContainer>
              <span className='title-text'>{item.title}</span>
              <span className='content-text'>{item.content}</span>
              <a href={item.url} className='url-text'>{item.url}</a>
          </M.ContentContainer>
          <button style={{background: 'transparent', border: 0, marginRight: '25px'}} onClick={()=>handleDelete(item.tripId, item.memoId)}>
            <DeleteIcon/>
          </button>
      </M.ItemLayout>
    )
}

export default MemoItem