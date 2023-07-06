import { Outlet } from 'react-router-dom'
import { Header, BottomNav } from 'components/index'
import styled from 'styled-components'

export const Layout = () => {
  return (
    <Wrapper>
      <Container>
        <Header />
        <Outlet />
        <BottomNav />
      </Container>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  background-color: #eee;
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  background-color: gray;
  min-height: 100vh;
`
