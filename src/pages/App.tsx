import { Route, Routes } from 'react-router-dom'
import { Layout, Layout2 } from 'components/index'
import { Home, Weekly, Chart, Monthly, Search } from 'pages/index'

export const App = () => {
  return (
    <Routes>
      <Route
        path="/"
        element={<Layout2 />}>
        <Route
          index
          element={<Home />}
        />
      </Route>

      <Route element={<Layout2 />}>
        <Route
          path="/"
          element={<Home />}
        />
        <Route
          path="/calendar"
          element={<Monthly />}
        />
        <Route
          path="/chart"
          element={<Chart />}
        />
        <Route
          path="/weekly"
          element={<Weekly />}
        />
        <Route
          path="/search"
          element={<Search />}
        />
      </Route>
    </Routes>
  )
}
