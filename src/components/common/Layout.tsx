import { Outlet } from 'react-router-dom'
import { Header, BottomNav } from 'components/index'
import styled from 'styled-components'
import GlobalStyle from '@/GlobalStyle'

export const Layout = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <OutletWrapper>
            <Outlet />
          </OutletWrapper>
          <BottomNav />
        </Container>
      </Wrapper>
    </>
  )
}

export const HeaderLayout = () => {
  return (
    <>
      <GlobalStyle />
      <Wrapper>
        <Container>
          <Header />
          <OutletWrapper>
            <Outlet />
          </OutletWrapper>
          <BottomNav />
        </Container>
      </Wrapper>
    </>
  )
}

const Wrapper = styled.div`
  background-color: var(--color-bg);
`

const Container = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
  max-width: 768px;
  margin-left: auto;
  margin-right: auto;
  background-color: var(--color-white);
  min-height: 100vh;
`

const OutletWrapper = styled.div`
  flex-grow: 1;
`
