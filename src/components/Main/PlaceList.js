import React from 'react'
import * as P from '../../styles/placelist.style'
import PlaceIcon from '../../assets/place-icon';
// eslint-disable-next-line react/prop-types
function PlaceList({filteredList, setPlaceInput, toggleLocation}) {


  const handleSetPlace = (item) => () =>{
    setPlaceInput(item);
    toggleLocation();
  }

  return (
    <>
    <P.PlaceModalLayout>
        {filteredList.map((item, index) => ( 
         <P.PlaceListBox key={index}> 
            <PlaceIcon/>
                <li 
                  role="presentation"
                  className='placelabel' 
                  onClick={handleSetPlace(item)} 
                  onKeyPress={()=> {}}>{item}</li> 
            </P.PlaceListBox>
          ))}
          
      </P.PlaceModalLayout>
      </>
  )
}


export default PlaceList;