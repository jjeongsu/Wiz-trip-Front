import React, { useState } from 'react'
import styled from 'styled-components';
import Profileimg from '../../assets/default_profileimg.png'

function ConnectedUsers() {
    const [users, setUsers] = useState([1,2,3]);

    const UserProfile = ({user, index}) => {
        const colors = ['#D35344', '#FF73CB', '#53ABF7', '#01C99B', '#D88435'];
        // 사용자 번호에 따라 색상 선택 (5개의 색상 중 하나)
        const color = colors[index % colors.length];
      
        return <ProfileImg src={Profileimg} alt="profile" color={color} width={40} />
      };

    
  return (
    <ImgWrapper>
    {users.map((user, index) => (
      <UserProfile user={user} key={index} index={index}/>
    ))}
    </ImgWrapper>
  )
}

export default ConnectedUsers



const ImgWrapper = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin: 0 20px;
`

const ProfileImg = styled.img`
    border-radius: 50%;  // 이미지를 동그랗게 표시
    border: 2px solid ${props => props.color};  // 테두리 색상을 props로 받아옴
    margin: 0 1px;

`
