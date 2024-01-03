import React from 'react'
import Layout from '../components/Layout'
import * as M from '../styles/mylayout.style'
import UserProfile from '../components/My/UserProfile'
import MyTrip from '../components/My/MyTrip'
import MyReviewList from '../components/My/MyReviewList'
function Mypage() {
  return (
    <Layout>
      <M.MyLayoutBox>
        <UserProfile/>
        <MyTrip/>
        <MyReviewList/>
      </M.MyLayoutBox>
    </Layout>
  )
}

export default Mypage