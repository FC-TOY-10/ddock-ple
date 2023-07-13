import styled from 'styled-components'
import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithPopup } from 'firebase/auth';

export const Login = () => {
  const auth = getAuth();
  const provider = new GoogleAuthProvider();
  const navigate = useNavigate();

  const initialUserData = localStorage.getItem('userData') ?
  JSON.parse(localStorage.getItem('userData') || '{}') : {};
  const [userData, setUserData] = useState(initialUserData);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        navigate("/");
      } else {
        navigate("/login");
      }
    })
  }, [auth, navigate])

  const handleAuth = () => {
    signInWithPopup(auth, provider)
      .then(result => {
        setUserData(result.user);
        localStorage.setItem("userData", JSON.stringify(result.user));
      })
      .catch(error => {
        console.log(error);
      })
  }

  return (
    <Container>
      <Title>똑플</Title>
      <Line />
      <MainLogo src="/free-icon-piggy-bank-7549126.png" alt="돼지 로고" />
      <Box>
        <GoogleLogin onClick={handleAuth}>
          <GoogleLogo src="https://upload.wikimedia.org/wikipedia/commons/5/53/Google_%22G%22_Logo.svg" alt="구글 로고" />
          <span>구글로 간편 로그인!</span>
        </GoogleLogin>
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

const GoogleLogin = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  font-size: 14px;
  margin-top: 20px;
  cursor: pointer;
`;

const GoogleLogo = styled.img`
  width: 20px;
  height: 20px;
`;
