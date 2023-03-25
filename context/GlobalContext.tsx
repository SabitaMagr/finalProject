import { asyncPost } from '@/apis/rest.api';
import React, { useContext, Dispatch, SetStateAction, useState, createContext } from 'react'
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
    const [cart, setCart] = useState([])
    const [user, setUser] = useState<User | null>(null)
    const login = async (username: string, password: string): Promise<any> => {
        //api clall
        const payload = { username, password }
        const { data, error } = await asyncPost('/login', payload)
        if (data && !error) {
            // data.token
            setUser(data?.data)
        }
    }
    const logout = () => {

    }

    const currentUser = () => {

    }

    const contextValue = { login, logout, cart, setCart, user, setUser }
    return (
        <Context.Provider value={contextValue}>
            {children}
        </Context.Provider>
    )
}



export const useGlobal = () => useContext(Context)
