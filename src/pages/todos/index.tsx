import {useEffect, useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import Table from "../../components/Table";
import Modal from "../../components/Modal";
import { deleteTodo, getTodos, getTodosList, storeTodo } from "../../store/reducers/TodoReducer";
import { getUser } from "../../store/reducers/AuthReducer";
import { useForm, SubmitHandler } from "react-hook-form";
import ITodoRequest from "../../interfaces/ITodoRequest";
import { AppDispatch } from "../../store";
import { Link } from "react-router-dom";

const TodoList = () => {

    const dispatch = useDispatch<AppDispatch>();
    
    const todos = useSelector(getTodos);
    
    const user = useSelector(getUser);

    const { register, handleSubmit, reset } = useForm<ITodoRequest>();
    
    useEffect(() => {
        dispatch(getTodosList(user.id));
    }, []);

    useEffect(() => {
        reset();
    }, [todos]);

    const onSubmit: SubmitHandler<ITodoRequest> = (data) => {
        const r = {id: user.id, data: data};
        dispatch(storeTodo(r));
    }

    const deletedTodo = (num: number) => {
        dispatch(deleteTodo(num));
    }

    return (
        <div className="flex flex-col">
            <div className="mb-2">
                <h1 className="text-3xl font-bolder leading-tight text-gray-900">La liste de mes todos</h1>
            </div>
            <div className="mb-2 py-4 flex flex-wrap flex-grow justify-between">
                <div className="flex items-center py-2">
                    <Modal
                        btnClass="inline-block px-4 py-2 border border-transparent text-sm leading-5 font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-500 focus:outline-none focus:shadow-outline"
                        btnText="Créer une todo"
                    >
                        <h3 className="text-lg leading-6 font-medium text-gray-900 mb-4">Créer une todo</h3>
                        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
                            <div>
                                <label htmlFor="title" className="block text-sm font-medium leading-6 text-gray-900">Titre</label>
                                <div className="mt-2">
                                    <input id="title" {...register("title")} type="text" required className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                                </div>
                                <div className="mt-2">
                                    <textarea id="description" {...register("description")} className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <input id="done" {...register("completed")} type="checkbox" className="mr-2" />
                                <label htmlFor="done">Compléter</label>
                            </div>

                            <div>
                                <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Se connecter</button>
                            </div>
                        </form >
                    </Modal>
                </div>
            </div>
            <div className="-my-2 py-2 sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                <Table columns={["Titre", "Completer"]}>
                    {
                        todos.map((t:any) => {
                            return (
                                <tr key={t.id}>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div className="text-sm leading-5 text-gray-900">
                                            {t.title}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div className="text-sm leading-5 text-gray-900">
                                            {
                                                t.completed ? (
                                                    <span
                                                        className="inline-block whitespace-nowrap rounded-[0.27rem] bg-green-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-green-700">
                                                        Complèter
                                                    </span>
                                                ) : (
                                                    <span
                                                    className="inline-block whitespace-nowrap rounded-[0.27rem] bg-red-100 px-[0.65em] pb-[0.25em] pt-[0.35em] text-center align-baseline text-[0.75em] font-bold leading-none text-red-700">
                                                        Pas encore
                                                    </span>
                                                )
                                            
                                            }
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                        <Link to={`/${t.id}`}
                                            className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline" >
                                            Détail
                                        </Link>
                                        <a href="#"
                                            className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline mx-2" >
                                            Edit
                                        </a>
                                        <Modal
                                            btnClass="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline"
                                            btnText="Supprimer"
                                        >
                                            <h3 className="text-lg leading-6 font-medium text-gray-900 mb-10">Voulez vous bien supprimer cette Todo ?</h3>
                                            <div>
                                                <button onClick={() => deletedTodo(t.id)} className="flex w-full justify-center rounded-md bg-red-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-500">Oui</button>
                                            </div>
                                        </Modal>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </Table>
            </div>
        </div>
    )
}

export default TodoList;