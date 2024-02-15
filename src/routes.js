import { Routes, Route } from 'react-router-dom'
import { Main } from './components/Main/Main'
import { BigCard } from './components/BigCard/BigCard'

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
      <Route path="card/:id" element={<BigCard />} />
    </Routes>
  )
}
