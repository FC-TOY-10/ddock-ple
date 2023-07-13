import { styled } from 'styled-components'
import { Logout } from '@/components'

export const Header = () => {
  return (
    <HeaderContainer>
      <Logout/>
    </HeaderContainer>
  )
}

const HeaderContainer = styled.header`
  max-width: 768px;
  height: 50px;
  background-color: var(--color-accent);
  color: var(--color-black);
  display: flex;
  justify-content: center;
  align-items: center;

  h1 {
    font-size: 20px;
  }
`
