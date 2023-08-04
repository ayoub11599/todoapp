import { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { getTodos, getTodosList } from "../../../Store/Reducers/TodoReducer";
import { getUser } from "../../../Store/Reducers/AuthReducer";
import { AppDispatch } from "../../../Store";


const useTodoList = () => {
    const [showDelete, setShowDelete] = useState(false);
    const [showUpdate, setShowUpdate] = useState(false);
    const [current, setCurrent] = useState<any>(null);

    const dispatch = useDispatch<AppDispatch>();
    
    const todos = useSelector(getTodos);
    
    const user = useSelector(getUser);
    
    useEffect(() => {
        dispatch(getTodosList(user.id));
    }, []);

    const closeDeleteModal = () => {
        setCurrent(null);
        setShowDelete(false);
    }

    const closeUpdateModal = () => {
        setCurrent(null);
        setShowUpdate(false);
    }

    const showDeleteModal = (todo:any) => {
        setCurrent(todo);
        setShowDelete(true);
    }

    const showUpdateModal = (todo:any) => {
        setCurrent(todo);
        setShowUpdate(true);
    }

    return {
        showDelete,
        showUpdate,
        current,
        todos,
        closeDeleteModal,
        closeUpdateModal,
        showDeleteModal,
        showUpdateModal,
        user,
        dispatch
    }
}

export default useTodoList;