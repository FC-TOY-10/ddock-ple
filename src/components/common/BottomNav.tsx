import { Link, useLocation } from 'react-router-dom'
import { styled } from 'styled-components'
import {
  AiFillHome,
  AiOutlineHome,
  AiFillCalendar,
  AiOutlineCalendar,
  AiFillSchedule,
  AiOutlineSchedule,
  AiFillPieChart,
  AiOutlinePieChart,
  AiOutlineLogout
} from 'react-icons/ai'

export const BottomNav = () => {
  const path = useLocation().pathname
  return (
    <Navigation>
      <ul>
        <TabItem isActive={path === '/'}>
          <Link to="/">{path === '/' ? <AiFillHome /> : <AiOutlineHome />}</Link>
        </TabItem>
        <TabItem isActive={path === '/calendar'}>
          <Link to="/calendar">{path === '/calendar' ? <AiFillCalendar /> : <AiOutlineCalendar />}</Link>
        </TabItem>
        <TabItem isActive={path === '/weekly'}>
          <Link to="/">{path === '/weekly' ? <AiFillSchedule /> : <AiOutlineSchedule />}</Link>
        </TabItem>
        <TabItem isActive={path === '/chart'}>
          <Link to="/">{path === '/chart' ? <AiFillPieChart /> : <AiOutlinePieChart />}</Link>
        </TabItem>
        <TabItem isActive={path === '/logout'}>
          <Link to="/">
            <AiOutlineLogout />
          </Link>
        </TabItem>
      </ul>
    </Navigation>
  )
}

interface ITabItemProps {
  isActive: boolean
}

const Navigation = styled.nav`
  width: 100%;
  height: 64px;
  background-color: var(--color-gray-ddd);
  box-shadow: -4px 0px 20px rgba(0, 0, 0, 0.19);

  ul {
    display: flex;
    height: 100%;
  }
`
const TabItem = styled.li<ITabItemProps>`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  a {
    width: 100%;
    text-align: center;
    color: ${props => (props.isActive ? 'var(--color-tab-active)' : 'var(--color-black)')};
    font-size: 24px;
  }
`
