import React, { useCallback, useMemo, useState } from 'react';
import { Button, Form, Input } from 'antd';
import Link from 'next/link';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import useInput from '../hooks/useInput';
import { LOG_IN_REQUEST, loginRequestAction } from '../reducers/user';

const ButtonWrapper = styled.div`
    margin-top: 10px;
`;

const FormWrapper = styled(Form)`
    padding: 10px;
`;

const LoginForm = () => {
  //* custom hooks
  const [email, onChangeEmail] = useInput('');
  const [password, onChangePassword] = useInput('');

  const dispatch = useDispatch();
  const { logInLoading } = useSelector((state) => state.user);

  // const [id, setId] = useState('');
  // const onChangeId = useCallback((e) => {
  //     setId( e.target.value);
  // }, []);

  // const [password, setPassword] = useState('');
  // const onChangePassword = useCallback((e) => {
  //     setPassword( e.target.value);
  // }, []);

  const onSubmitForm = useCallback(() => {
    console.log(email, password);
    //* Props 함수로 데이터를 보냈었는데 이제 diapatch를 사용해서 변경할 데이터를 보낸다.
    // setIsLoggedIn(true);
    dispatch(loginRequestAction({ email, password }));
  }, [email, password]);

  // styled component 사용하지 않고 최적화, 리랜더링 최소화
  const style = useMemo(() => ({ marginTop: 10 }), []);

  return (
  // onFinish에는 e.preventDefault가 적용되어 있다.
    <FormWrapper onFinish={onSubmitForm}>
      <div>
        <label htmlFor="user-email">이메일</label>
        <br />
        <Input name="user-email" type="email" value={email} onChange={onChangeEmail} required />
      </div>

      <div>
        <label htmlFor="user-password">비밀번호</label>
        <br />
        <Input name="user-password" type="password" value={password} onChange={onChangePassword} required />
      </div>
      <ButtonWrapper>
        <Button type="primary" htmlType="submit" loading={logInLoading}>로그인</Button>
        <Link href="/signup"><a><Button>회원가입</Button></a></Link>
      </ButtonWrapper>
    </FormWrapper>
  );
};

export default LoginForm;

// LoginForm.propTypes = {
//     setIsLoggedIn: PropTypes.func.isRequired,
// };
