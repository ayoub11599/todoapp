import {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import Table from "../../components/Table";
import ITodo from "../../interfaces/ITodo";
import Modal from "../../components/Modal";
import { getTodos, getTodosList } from "../../store/reducers/TodoReducer";
import { getUser } from "../../store/reducers/AuthReducer";
import { useForm } from "react-hook-form";
import ITodoRequest from "../../interfaces/ITodoRequest";

const TodoList = () => {
    
    const todos = useSelector(getTodos);
    
    const user = useSelector(getUser);

    const { register, handleSubmit } = useForm<ITodoRequest>();
    
    useEffect(() => {
        getTodosList(user.id);
    }, []);

    const onSubmit = () => {
        
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
                                    <input id="title" type="text" required className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <div className="flex items-center justify-between">
                                    <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">Description</label>
                                </div>
                                <div className="mt-2">
                                    <textarea id="description" required className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                                </div>
                            </div>

                            <div>
                                <input id="done" type="checkbox" className="mr-2" />
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
                <Table columns={["Titre", "Completer", "Créer le"]}>
                    {
                        /*todos.map(t => {
                            return (
                                <tr>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div className="text-sm leading-5 text-gray-900">
                                            {t.title}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div className="text-sm leading-5 text-gray-900">
                                            {t.completed}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap border-b border-gray-200">
                                        <div className="text-sm leading-5 text-gray-900">
                                            {t.createdAt}
                                        </div>
                                    </td>
                                    <td className="px-6 py-4 whitespace-no-wrap text-right border-b border-gray-200 text-sm leading-5 font-medium">
                                        <a href="#"
                                            className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline" >
                                            Détail
                                        </a>
                                        <a href="#"
                                            className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline mx-2" >
                                            Edit
                                        </a>
                                        <a href="#"
                                            className="text-indigo-600 hover:text-indigo-900 focus:outline-none focus:underline" >
                                            Supprimer
                                        </a>
                                    </td>
                                </tr>
                            )
                        })*/
                    }
                </Table>
            </div>
        </div>
    )
}

export default TodoList;