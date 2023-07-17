import { Route, Routes } from 'react-router-dom'
import { Layout, Layout2, AuthGuard } from 'components/index'
import { HomePage, WeeklyPage, Chart, Monthly, LoginPage, Search } from 'pages/index'

export const App = () => {
  return (
    <Routes>
      <Route
        path="/login"
        element={<Layout />}>
        <Route
          index
          element={<LoginPage />}
        />
      </Route>

      <Route
        element={
          <AuthGuard>
            <Layout2 />
          </AuthGuard>
        }>
        <Route
          path="/"
          element={<HomePage />}
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
          element={<WeeklyPage />}
        />
        <Route
          path="/search"
          element={<Search />}
        />
      </Route>
    </Routes>
  )
}
