import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getUser, logout } from "../../Store/Reducers/AuthReducer";

const useNavbar = () => {
    const navigate = useNavigate();

    const [show, setShow] = useState(false);

    const dispatch = useDispatch();

    const user = useSelector(getUser);
    
    const showMobileNav = () => {
        setShow(s => !s);
    }

    const userLogout = () => {
        dispatch(logout());
        navigate("/login");
    }

    return {
        show,
        user,
        showMobileNav,
        userLogout
    }
}

export default useNavbar;