import React, { useContext } from 'react'

const GlobalContext = ({ children }: { children: React.ReactNode }) => {
    const [cart, setCart]
    const Context = useContext({});

    return (
        <Context.Provider>
            {children}
            good night
        </Context.Provider>
    )
}

export default GlobalContext
