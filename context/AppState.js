import React, { useState } from 'react'
import AppContext from './AppContext'
import { getLocalStorage } from "../services/helper";

const AppState = (props) => {
    const [username, setUsername] = useState(getLocalStorage("usrn") || null)

    return (
        <AppContext.Provider
            value={{
                username,
                setUsername,
            }}
        >
            {props.children}
        </AppContext.Provider>
    );
}

export default AppState;