import { styled } from 'styled-components'
import { Link, useLocation } from 'react-router-dom'
import { AiOutlineSearch } from 'react-icons/ai'

export const Header = () => {
  const path = useLocation().pathname

  return (
    <HeaderContainer>
      {path === '/' || path === '/search' ? null : (
        <SearchLink to="/search">
          <AiOutlineSearch />
        </SearchLink>
      )}
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
  position: relative;

  h1 {
    font-size: 20px;
  }
`

const SearchLink = styled(Link)`
  position: absolute;
  left: 20px;
  top: 0;
  bottom: 0;
  font-size: 24px;
  display: flex;
  justify-content: center;
  align-items: center;
`
