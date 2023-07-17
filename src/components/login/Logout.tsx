import { styled } from 'styled-components'
import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { getAuth, signOut } from 'firebase/auth'

export const Logout = () => {
  const auth = getAuth();
  const navigate = useNavigate();
  // 초기 사용자 데이터 설정

  const initialUserData = localStorage.getItem('userData')
    ? JSON.parse(localStorage.getItem('userData') || '{}')
    : {}

  const [userData, setUserData] = useState(initialUserData)

  // 사용자 데이터 확인 및 업데이트
  useEffect(() => {
    if (!userData.displayName) {
      setUserData(JSON.parse(localStorage.getItem('userData') || '{}'))
    }
  }, [])

  // 로그아웃 처리
  const handleLogOut = () => {
    signOut(auth)
    setUserData({})
    localStorage.removeItem('userData')
    navigate('/login')
  }

  return (
    <>
      {userData.email && (
        <User>
          <Name>{userData.email}님</Name>
          <Out onClick={handleLogOut}> 로그아웃 </Out>
        </User>
      )}
    </>
  )
}

const User = styled.div`
  height: 50px;
  width: 40%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  right: 0;
`

const Name = styled.div`
  margin-right: 10px;
`
const Out = styled.div`
  margin-right: 10px;
  cursor: pointer;
`
