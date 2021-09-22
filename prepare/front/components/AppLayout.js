import React from 'react';
import Link from 'next/link';
import { Menu, Input, Button, Row, Col } from 'antd';
import PropTypes from 'prop-types';
import styled, { createGlobalStyle } from 'styled-components';
import { useSelector } from 'react-redux';
import UserProfile from './UserProfile';
import LoginForm from './LoginForm';

const SearchInput = styled(Input.Search)`
    vertical-align : middle
`;

// 인덱스 페이지에 수평 스크롤 생기는 버그를 위한 조치
const Global = createGlobalStyle`
  .ant-row {
    margin-right: 0 !important;
    margin-left: 0 !important;
  }
  
  .ant-col:first-child {
      padding-left: 0 !important;
  }
  
  .ant-col:last-child {
    padding-right: 0 !important;
  }
`;

const AppLayout = ({ children }) => {
  //* useState 대신에 Redux의 useSelector로 데이터를 받아온다.
  //* rootReducer 함수로 보내진 값을 받아온다.
  // const [isLoggedIn, setIsLoggedIn] = useState(false);

  //* 아래 두 줄은 같다. 구조분해 할당
  // const isLoggedIn = useSelector((state) => state.user.isLoggedIn);
  const { me } = useSelector((state) => state.user);

  return (
    <div>
      <Global />
      <Menu mode="horizontal">
        <Menu.Item key="home">
          <Link href="/"><a>HOME</a></Link>
        </Menu.Item>
        <Menu.Item key="profile">
          <Link href="/profile"><a>프로필</a></Link>
        </Menu.Item>
        <Menu.Item key="signup">
          <Link href="/signup"><a>회원가입</a></Link>
        </Menu.Item>
        <Menu.Item key="mail">
          <SearchInput enterButton style={{ verticalAlign: 'middle' }} />
        </Menu.Item>
      </Menu>
      {/* gutter 컬럼 사이의 간격유지 */}
      <Row gutter={8}>
        <Col xs={24} sm={6} md={6}>
          {me ? <UserProfile /> : <LoginForm /> }
        </Col>
        <Col xs={24} md={12}>
          {children}
        </Col>
        <Col xs={24} md={6}>
          <a href="http://www.irm.kr" target="_blank" rel="noreferrer noopener">Irm</a>
        </Col>
      </Row>
    </div>
  );
};
AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default AppLayout;
