import { Routes, Route } from 'react-router-dom'
import RootLayout from './_root/RootLayout'
import { Home } from './_root/pages'
import AuthLayout from './_auth/AuthLayout'
import SignInForm from './_auth/forms/SignInForm'
import SignUpForm from './_auth/forms/SignUpForm'
import { Toaster } from './components/ui/toaster'
import Courses from './_root/pages/Courses'
import AboutUs from './_root/pages/AboutUs'

const App = () => {
  return (
    <main className="flex h-screen">
      <Routes>
        {/* public routes */}
        <Route element={<AuthLayout/>}>
          <Route path='/sign-in' element={<SignInForm/>}/>
          <Route path='/sign-up' element={<SignUpForm/>}/>
        </Route>
        <Route element={<RootLayout/>}>
          <Route index element={<Home/>}/>
          <Route path="about-us" element={<AboutUs />} />
          <Route path="courses" element={<Courses />} />
        </Route>
        {/* private routes */}
      </Routes>
      <Toaster />
    </main>
  )
}

export default App