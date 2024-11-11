import React, { createContext } from 'react';

export const Authcontext=createContext()

const Authprovider = ({children}) => {

    return (
        <Authcontext.Provider value={"nafis"}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;