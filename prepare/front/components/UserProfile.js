import React, { useCallback } from 'react';
import { Avatar, Button, Card } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { logoutRequestAction } from '../reducers/user';

const UserProfile = () => {
  { /* 배열이기 때문에 key를 붙여줌. */ }
  const dispatch = useDispatch();
  const { me, logOutLoading } = useSelector((state) => state.user);

  const onLogOut = useCallback(() => {
    //* 마찬가지로 Props 대신에 dispatch로 데이터를 보낸다.
    // setIsLoggedIn(false);
    dispatch(logoutRequestAction());
  }, []);

  // const logOutLoading = () => {
  //
  // }

  return (
    <Card
      actions={[
        <div key="twit">      트윗   <br /> {me.Posts.length}</div>,
        <div key="followings">팔로잉 <br /> {me.Followings.length}</div>,
        <div key="followers"> 팔로워 <br /> {me.Followers.length}</div>,
      ]}
    >
      <Card.Meta
        avatar={<Avatar> {me.nickname[0]} </Avatar>}
        title={me.nickname}
      />
      <Button onClick={onLogOut} loading={logOutLoading}>로그아웃</Button>
      {/* loading={logOutLoading} */}

    </Card>
  );
};

export default UserProfile;
