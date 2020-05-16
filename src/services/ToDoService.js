import axios from "axios";
const PATH = "/todos";

const apiClient = axios.create({
    baseURL: `http://localhost:3000`,
    withCredentials: false, // This is the default
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
    },
    timeout: 10000,
});

export default {
    getToDos() {
        return apiClient.get(PATH);
    },
    addToDo(payload) {
        return apiClient.post(PATH, payload);
    },
    deleteToDo(id) {
        return apiClient.delete(PATH + "/" + id);
    },
};
