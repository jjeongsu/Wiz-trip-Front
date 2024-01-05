import React from 'react'
import Layout from '../components/Layout'
import * as M from '../styles/mylayout.style'
import UserProfile from '../components/My/UserProfile'
import MyTrip from '../components/My/MyTrip'
import MyReviewList from '../components/My/MyReviewList'
function Mypage() {
  return (

    <Layout fullWidth={true}>
    <div style={{background: '#EDF3FB'}}> 
    <M.MyLayoutBox>
        <UserProfile/>
        <div className='column-layout'>
          <MyTrip/>
          <MyReviewList/>
        </div>
    </M.MyLayoutBox>
    </div>
    </Layout>
    
  )
}

export default Mypage