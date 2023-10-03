import { Route, Routes } from 'react-router-dom'
import { PrivateRouter } from './PrivateRouter'
import { BrowserRouter as Router } from "react-router-dom";

export const AppRouter = () => {
  return (
    <>
        <Routes>
            <Route path="/*" element={
              <PrivateRouter />
            } />
        </Routes>
    </>
  )
}