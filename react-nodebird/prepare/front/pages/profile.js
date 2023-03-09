import Head from 'next/head';
import React from 'react'

import AppLayout from '../components/AppLayout';
import NicknameEditForm from '../components/NicknameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
    const followingList = [{ nickname: '김찬진'}, {nickname: '찬진'}, {nickname: '김진'}];
    const followerList = [{ nickname: '김찬진'}, {nickname: '찬진'}, {nickname: '김진'}];
    return (
        <>
        <Head>
            <title>내 프로필 | NodeBird</title>
        </Head>
        <AppLayout>
            <NicknameEditForm/>
            <FollowList header="팔로잉 목록" data={followingList}/>
            <FollowList header="팔로워 목록" data={followerList}/>
        </AppLayout>
       </>  
    ) 
};

export default Profile;