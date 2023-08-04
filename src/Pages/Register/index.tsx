import { Link } from "react-router-dom";
import useRegister from "./useRegister";

const Register = () => {
    
    const { handleSubmit, onSubmit, register, refConfirm } = useRegister();

    return (
        <>
            <div className="flex min-h-full flex-col justify-center px-6 py-12 lg:px-8">
                <div className="sm:mx-auto sm:w-full sm:max-w-sm">
                    <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">Créer un compte</h2>
                </div>

                <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
                    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
                        
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium leading-6 text-gray-900">Nom complet</label>
                            <div className="mt-2">
                                <input id="username" {...register("username")} type="text" required className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Adresse e-mail</label>
                            <div className="mt-2">
                                <input id="email" {...register("email")} type="email" autoComplete="email" required className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="password" className="block text-sm font-medium leading-6 text-gray-900">Mot de passe</label>
                            </div>
                            <div className="mt-2">
                                <input id="password" {...register("password")} type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <div className="flex items-center justify-between">
                                <label htmlFor="confirm" className="block text-sm font-medium leading-6 text-gray-900">Mot de passe de confirmation</label>
                            </div>
                            <div className="mt-2">
                                <input id="confirm" ref={refConfirm} type="password" autoComplete="current-password" required className="block w-full rounded-md border-0 py-1.5 pl-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
                            </div>
                        </div>

                        <div>
                            <button type="submit" className="flex w-full justify-center rounded-md bg-indigo-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-indigo-500">Se connecter</button>
                        </div>
                    </form >
                    <p className="mt-10 text-center text-sm text-gray-500">
                        Vous avez dèjà un compte, connecter vous
                        <Link to={"/login"} className="font-semibold leading-6 text-indigo-600 hover:text-indigo-500 ml-1">ici</Link>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Register;