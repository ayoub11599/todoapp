import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCurrentTodo, getTodo } from "../../../Store/Reducers/TodoReducer";
import { getUser } from "../../../Store/Reducers/AuthReducer";
import { useParams } from "react-router-dom";
import { AppDispatch } from "../../../Store";

const useTodoShow = () => {
    const dispatch = useDispatch<AppDispatch>();

    const user = useSelector(getUser);

    const todo = useSelector(getCurrentTodo);

    const params = useParams();

    useEffect(() => {
        const r = {userId: user.id as number, id: params.id as string};
        dispatch(getTodo(r));
    }, []);

    return {
        todo
    }
}

export default useTodoShow;