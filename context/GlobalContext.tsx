import { authUrl } from '@/apis/list.api';
import { asyncGet, asyncPost } from '@/apis/rest.api';
import { Router, useRouter } from 'next/router';
import React, { useContext, Dispatch, SetStateAction, useState, useEffect, createContext } from 'react'
interface GlobalContext {
    // authUser: User | null;
    login: (username: string, password: string) => Promise<any>,
    logout: () => void,
    setUser: Dispatch<SetStateAction<any>>,
    user: any,
    cart: any,
    setCart: Dispatch<SetStateAction<any>>
}
interface User {
    first: string,
    lastName: string
}
const Context = createContext<GlobalContext | null>(null);
export const GlobalContextProvider = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart] = useState<any[]>([])
    const [user, setUser] = useState<User | null>(null)
    const router = useRouter()
    //login session
    const login = async (username: string, password: string): Promise<any> => {
        //api clall
        const payload = { email: username, password }
        const { data, error } = await asyncPost(authUrl?.login, payload)
        if (data && !error) {
            setUser(data?.data?.user)
            sessionStorage.setItem('token', data?.data?.token?.access_token)
            return Promise.resolve(data?.data?.user)
        } else {
            return Promise.reject(error)
        }
    }
    const logout = () => {
        if (typeof window != 'undefined') {
            sessionStorage.clear()
        }
    }

    const currentUser = async () => {
        const { data, error } = await asyncGet(authUrl?.current_user)
        if (data && !error) {
            setUser(data?.data?.user)
        } else {
            // router.push('/')
        }
    }


    useEffect(() => {
        //save in localstorage 
        const cart = localStorage.getItem('cart') as string
        setCart(JSON.parse(cart || '[]'))
        currentUser()
    }, [])

    const contextValue = { login, logout, cart, setCart, user, setUser }
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}



export const useGlobal = () => useContext(Context)
