import { Route, Routes } from 'react-router-dom'
import { Layout, Layout2 } from 'components/index'
import { Home, Weekly, Chart } from 'pages/index'

export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout2 />}>
        <Route index element={<Home />} />
      </Route>

      <Route element={<Layout />}>
        <Route path="/weekly" element={<Weekly />} />
        <Route path="/chart" element={<Chart />}
        />
      </Route>
    </Routes>
  )
}
