
//components
import Student from "./components/Student";
import MainLayout from "./Routes/MainLayout";
import AddStudent from './components/AddStudent';
import EditStudent from './components/EditStudent';
import Error from "./components/Error";

//css
import "./App.css";

//react-router-dom
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

const App = () => {
    const router = createBrowserRouter([{
        path: "/",
        element: <MainLayout />,
        errorElement:<Error/>,
        children: [
            {
                index: true,
                element: <Student />
            },
            {
                path: "Add",
                element: <AddStudent />
            },
            {
                path: "editStudent",
                element: <EditStudent />
            }
        ]
    }])
    return (
        <>
            <RouterProvider router={router} />
        </>
    )
}

export default App
