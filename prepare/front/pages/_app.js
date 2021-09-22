// 페이지의 공통되는 것들 처리
import React from 'react';
import PropTypes from 'prop-types';
import 'antd/dist/antd.css';
import Head from 'next/head';
import wrapper from '../store/configureStore';

// index.js의 return 부분이 Component로 들어온다.
// index.js의 부모
// eslint-disable-next-line react/prop-types
const App = ({ Component }) => (
  <>
    <Head>
      <meta charSet="utf-8" />
      <title>노드버드</title>
    </Head>
    <Component />
  </>
);

// eslint-disable-next-line react/no-typos
App.proptypes = {
  Component: PropTypes.elementType.isRequired,
};

export default wrapper.withRedux(App);
