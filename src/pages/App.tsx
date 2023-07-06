import { Route, Routes } from 'react-router-dom'
import { Layout } from 'components/index'
import { Home } from 'pages/index'

export const App = () => {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route
          path="/"
          element={<Home />}
        />
      </Route>
    </Routes>
  )
}
