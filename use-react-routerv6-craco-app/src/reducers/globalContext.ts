import React from 'react';
interface Store{
    global:{
        user: string|null,
        chainId: string|null,
        chainName:string|null,
    },
    dispatch:any
}
export const GlobalContext = React.createContext<Store>({} as Store);