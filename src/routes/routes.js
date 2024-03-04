import Home from "../pages/Home"
import Error from "../pages/Error404"
import EmployeeList from "../pages/ListEmployees"

// Création des routes
const routes = [
    {
        path: "/",
        component: <Home />,
    },
    {
        path: "/employee",
        component: <EmployeeList />,
    },
    {
        path: "/*",
        component: <Error />,
    },
]

const Path = (route) => route.component

export { Path, routes }
