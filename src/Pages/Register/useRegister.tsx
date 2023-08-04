import { useEffect, useRef } from "react";
import { useForm, SubmitHandler } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux";
import IRegisterRequest from "../../Interfaces/IRegisterRequest";
import { getRegistered, registerAttemps } from "../../Store/Reducers/AuthReducer";
import { AppDispatch } from "../../Store";
import { toast } from "react-toastify";

const useRegister = () => {
    const { register, handleSubmit, reset } = useForm<IRegisterRequest>();

    const refConfirm = useRef<HTMLInputElement>(null);
    
    const dispatch = useDispatch<AppDispatch>();

    const registered = useSelector(getRegistered);

    const onSubmit: SubmitHandler<IRegisterRequest> = (data) => {
        if(data.password != refConfirm.current?.value){
            toast.warn('Le mot de passe de confirmation ne correspond pas.');
            return;
        }
        dispatch(registerAttemps(data));
    }

    useEffect(() => {
        if ( registered ) {
            toast.success('Le compte est créé avec succès, veuillez vous connecter maintenant.');
            reset();
        }
    }, [registered]);

    return {
        register,
        handleSubmit,
        onSubmit,
        refConfirm
    }
}

export default useRegister;