import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Hero from '../Components/Hero/Hero'
import Login from '../Pages/Login'
import Signup from '../Pages/Signup'
import About from '../Pages/About'

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [
            {
                path: "/",
                element: <Hero />
            },
            {
                path: "/login",
                element: <Login />
            },
            {
                path: "/signup",
                element: <Signup/>
            },
            {
                path: "/about",
                element: <About />
            }
        ]
    }
])

export default routes
