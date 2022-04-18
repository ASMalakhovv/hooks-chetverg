import {useEffect, useState} from "react";
import {IUser, serverAPI} from "./api";

export function useUserManagement() {

    const [users, setUsers] = useState<IUser[]>([])

    useEffect(() => {
        const getUsersAPI = async () => {
            const users = await serverAPI.getUsers(10, 329, "", null)
            setUsers(users.items)
        }
        getUsersAPI()
    }, [])

    return users
}