import React from 'react'
import * as P from '../styles/placelist.style'
import PlaceIcon from '../assets/place-icon';
import districtData from '../administrative_district.json';
// eslint-disable-next-line react/prop-types
function PlaceList({placeInput, setPlaceInput, toggleLocation, layout}) {

  const filteredList = districtData.filter(district =>
    district.includes(placeInput)
  ); 
  const handleSetPlace = (item) => () =>{
    setPlaceInput(item);
    toggleLocation();
  }
  if (layout=='main'){
  return (
    <>
    <P.PlaceModalLayout>
        {filteredList.map((item, index) => ( 
         <P.PlaceListBox key={index}> 
            <PlaceIcon width={35} height={35}/>
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
  }else{
    return (
      <>
      <P.UpdateLayout>
          {filteredList.map((item, index) => ( 
           <P.UpdateListBox key={index}> 
              <PlaceIcon width={30} height={30}/>
                  <li 
                    role="presentation"
                    className='placelabel' 
                    onClick={handleSetPlace(item)} 
                    onKeyPress={()=> {}}>{item}</li> 
              </P.UpdateListBox>
            ))}
            
        </P.UpdateLayout>
        </>
    )

  }
}


export default PlaceList;