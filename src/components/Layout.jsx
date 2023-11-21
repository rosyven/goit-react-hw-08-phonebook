import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn, selectIsLoading } from "redux/authSelectors";
import Loading from "./Loading/Loading";
import AuthNav from "./AuthNav/AuthNav";
import UserMenu from "./UserMenu/UserMenu";

const Layout = () => {
    const isLoggedIn = useSelector(selectIsLoggedIn);
    const isLoading = useSelector(selectIsLoading);

    return (
        <>
            <header>
                <div>
                    {<nav>{isLoggedIn ? <UserMenu /> : <AuthNav />}</nav>}
                </div>
            </header>
            <main>{isLoading ? <Loading /> : <Outlet />}</main>
        </>
    );
};

export default Layout;