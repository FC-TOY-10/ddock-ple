import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, getAuth, sendEmailVerification, signOut } from "firebase/auth";
import {Input} from '@/components'
import styled  from 'styled-components';

export const SignUp = () => {
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const auth = getAuth();
  const navigate = useNavigate();

  // 회원가입 기능 
  const register = async () => {
    //이메일, 패스워드 넣으면
    await createUserWithEmailAndPassword(
      auth,
      registerEmail,
      registerPassword
    );
    // 인증 메일, 로그인 화면으로 이동
    if (auth.currentUser) {
      await sendEmailVerification(auth.currentUser);
      await signOut(auth);
      navigate("/login");
      alert("인증 메일 날아감");
    } else {
      alert("메일이 없음");
    }
  };

  return (
    <Container>
      <Title>똑플</Title>
      <Line />
      <MainLogo src="/free-icon-piggy-bank-7549126.png" alt="돼지 로고" />
      <Box>
        <Input
          type="email" 
          placeholder="이메일 입력"
          onChange={(e) => {
            setRegisterEmail(e.target.value);
          }}
        />
        <Input
          type="password" 
          placeholder="비밀번호 입력" 
          onChange={(e) => {
            setRegisterPassword(e.target.value);
          }}
        />
        <button onClick={register}>회원가입</button>
      </Box>
    </Container>
  );
  }
  
const Container = styled.div`
  width: 768px;
  margin-left: auto;
  margin-right: auto;
  height: calc(100vh - 114px);
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: #7A2AF2;
  position: relative;
  `;
  
const Title = styled.h1`
  font-size: 48px;
  margin-top: 30px;
  color: white;
  `;
  
const Line = styled.div`
  width: 100%;
  height: 1px;
  background-color: white;
  margin-top: 30px;
  `;
  
const MainLogo = styled.img`
  width: 200px;
  height: 200px;
  position: absolute;
  top: 130px;
  `;
  
const Box = styled.div`
  background-color: white;
  width: 300px;
  padding: 20px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  position: absolute;
  top: 350px;
  `;