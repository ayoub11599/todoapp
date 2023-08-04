import { useEffect } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import ILoginRequest from "../../Interfaces/ILoginRequest";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch } from "../../Store";
import { getMessage, getUser, loginAttemps } from "../../Store/Reducers/AuthReducer";
import { toast } from "react-toastify";

const useLogin = () => {
    const { register, handleSubmit } = useForm<ILoginRequest>();

    const navigate = useNavigate();
    
    const dispatch = useDispatch<AppDispatch>();

    const user = useSelector(getUser);

    const message = useSelector(getMessage);

    const onSubmit: SubmitHandler<ILoginRequest> = (data) => {
        dispatch(loginAttemps(data));
    }

    useEffect(() => {
        if ( user ) {
            navigate("/");
        }
    }, [user]);

    useEffect(() => {
        if(message){
            toast.warning(message);
        }
    }, [message]);

    return {
        register,
        handleSubmit,
        onSubmit
    }
}

export default useLogin;