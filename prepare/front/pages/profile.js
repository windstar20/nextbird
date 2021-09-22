import React, { useEffect } from 'react';
import Head from 'next/head';
import { useSelector } from 'react-redux';
import Router from 'next/router';
import AppLayout from '../components/AppLayout';
import NickNameEditForm from '../components/NickNameEditForm';
import FollowList from '../components/FollowList';

const Profile = () => {
  // const followingList = [{nickname: '별명1'},{nickname: '별명2'},{nickname: '별명3'}];
  // const followerList = [{nickname: '별명1'},{nickname: '별명2'},{nickname: '별명3'}];
  const { me } = useSelector((state) => { state.user; });
  useEffect(() => {
    if (!(me && me.id)) {
      Router.push('/');
    }
  }, [me && me.id]);

  if (!me) {
    return null;
  }

  return (
    <>
      <Head>
        <title>내 프로필 | NodeBird</title>
      </Head>
      <AppLayout>
        <div>프로필</div>
        <NickNameEditForm />
        <FollowList header="팔로잉" data={me.Followings} />
        <FollowList header="팔로워" data={me.Followers} />
      </AppLayout>
    </>
  );
};

export default Profile;

// 다르지만 임시저장
// <AppLayout>
//     <Head>
//         <title>내 프로필 | NodeBird</title>
//     </Head>
//     <NicknameEditForm />
//     <FollowList
//         header="팔로잉 목록"
//         data={me.Followings}
//     />
//     <FollowList
//         header="팔로워 목록"
//         data={me.Followers}
//     />
// </AppLayout>
