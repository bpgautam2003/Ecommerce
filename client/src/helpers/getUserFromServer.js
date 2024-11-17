import { server_url } from "./getServerUrl"
import axios from "axios"

const getUserFromServer = async () => {
    const res = await axios.get(`${server_url}/api/auth/user`, {
        withCredentials: true,
    });
    console.log(res.data);
    return res.data;
};

export default getUserFromServer
