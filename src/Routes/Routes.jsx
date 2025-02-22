import { createBrowserRouter } from 'react-router-dom'
import HomePage from '../Pages/HomePage'
import Hero from '../Components/Hero/Hero'

const routes = createBrowserRouter([
    {
        path: "/",
        element: <HomePage />,
        children: [
            {
                path: "/",
                element: <Hero />
            }
        ]
    }
])

export default routes
