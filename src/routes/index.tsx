import { createBrowserRouter } from "react-router-dom";
import TodoList from "../Pages/Todos/List";
import Layout from "../Layouts";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ProtectedRoute from "../Middlewares/Protected";
import TodoDetail from "../Pages/Todos/Show";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout/>,
        children: [
            {
                path: "/",
                element: <ProtectedRoute el={<TodoList/>} required={true} />
                
            },
            {
                path: "/login",
                element: <ProtectedRoute el={<Login />} required={false} />
            },
            {
                path: "/register",
                element: <ProtectedRoute el={<Register />} required={false} />
            },
            {
                path: "/:id",
                element: <ProtectedRoute el={<TodoDetail/>} required={true} />
                
            },
        ]
    }
]);

export default router;