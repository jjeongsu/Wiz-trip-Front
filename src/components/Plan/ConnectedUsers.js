import React, { useState, useEffect } from 'react'
import styled from 'styled-components';
import DefaultImage from '../../assets/default_profileimg.png'
import { getUserProfile } from '../../apis/api/user';

function ConnectedUsers({ userIdList }) {

  const [userProfile, setUserProfile] = useState([]);
  console.log(userIdList);

  useEffect(() => {
    if(userIdList){
      Promise.all(userIdList.map(async user => {
        return await getUserProfile(user);
      })).then(setUserProfile);
    }

  }, [userIdList])

  const colors = ['#D35344', '#FF73CB', '#53ABF7', '#01C99B', '#D88435'];


  return (
    <ImgWrapper>
      {userProfile.length > 0 && userProfile.map((user, index) => (
        <ProfileImg
          src={user ? `data:image/webp;base64,${user.content}` : DefaultImage}
          alt="profile"
          color={colors[index % colors.length]}
          width={40}
          key={index}
        />
      ))}
    </ImgWrapper>
  )
}

export default ConnectedUsers;

const ImgWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 0 20px;
`;

const ProfileImg = styled.img`
  border-radius: 50%; // 이미지를 동그랗게 표시
  border: 2px solid ${(props) => props.color}; // 테두리 색상을 props로 받아옴
  margin: 0 1px;
  width: 40px;
  height: 40px;
`;
