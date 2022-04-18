import React, {useCallback, useEffect, useMemo, useState} from 'react';
import '../../App.css';
import {IProfile, IUser, serverAPI} from "./api";
import {useUserManagement} from "./useUserManagement";

function UsersManagement(props: any) {
    console.log('UsersManagement')
    const [id, setID] = useState<number | null>(null)

    const users = useUserManagement()


    const getProfileHandler = useCallback((id: number) => {
        setID(id)
    }, [])

    return (
        <>
            <Users users={users} onCLick={getProfileHandler}/>
            <Details userID={id}/>
        </>
    )

}

export function UsersManagementPrivate(props: any) {
    console.log('UsersManagementPrivate')

    const users = useUserManagement()


    return (
        <>
            <Users users={users} onCLick={() => {
            }}/>
        </>
    )

}

type UsersPropsType = {
    users: IUser[]
    onCLick: (id: number) => void
}
const Users = React.memo(({users, onCLick}: UsersPropsType) => {
    console.log('Users')

    return (
        <ul>
            {users.map(u => <li key={u.id} onClick={() => onCLick(u.id)}>{u.name}</li>)}
        </ul>
    )
})


type DetailsPropsType = {
    userID: number | null
}
const Details = (props: DetailsPropsType) => {
    const [profile, setProfile] = useState<IProfile | null>(null)

    useEffect(() => {
        if (!props.userID) return
        const getProfile = async (id: number) => {
            const res = await serverAPI.getProfile(id)
            setProfile(res)
        }
        getProfile(props.userID)
    }, [props.userID])

    console.log('Details')
    if (!profile) return <div>-----</div>
    return (
        <div>
            {profile.fullName}
            <img src={profile.photos.small || ""}/>
        </div>
    );
};

const Footer = React.memo(({year, onIncrement}: { year: number, onIncrement: () => void }) => {
    console.log('Footer')
    return (
        <div>
            FOOTER {year}
            <button onClick={onIncrement}>+</button>
        </div>
    );
})


export default UsersManagement;
