import api from "../api";

class Todo
{
    async list (id: number) {
        const res = await api.get(`/todos?userId=${id}&_order=desc`);
        const data = await res.data;
        return data;
    }

    async store (id: number, req: any) {
        const f = {...req, userId: id};
        const res = await api.post("/todos", f);
        const data = await res.data;
        return data;
    }

}

export default new Todo;