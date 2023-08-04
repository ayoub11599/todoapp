import api from "../Api";
import ILoginRequest from "../Interfaces/ILoginRequest";
import IRegisterRequest from "../Interfaces/IRegisterRequest";

class Auth {
    async register (req: IRegisterRequest) {
        try {
            const res = await api.post("/users", req);
            const data = await res.data;
            return data;
        } catch (err:any) {
            console.log(err.message);
        }
    }

    async login (req: ILoginRequest) {
        try {
            const res = await api.get(`/users?email=${req.email}&password=${req.password}`);
            const data = await res.data;
            return data;
        } catch (err:any) {
            console.log(err.message);
        }
    }

}

export default new Auth;