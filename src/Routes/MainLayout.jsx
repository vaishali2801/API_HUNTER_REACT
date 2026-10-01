import NavbarCom from '../components/NavbarCom'
import { Outlet } from 'react-router-dom'

const MainLayout = () => {
    return (
        <>
            <NavbarCom/>
            <Outlet/>
        </>
    )
}

export default MainLayout;
    