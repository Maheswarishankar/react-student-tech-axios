import React from 'react'
import { createContext, useContext, useState } from 'react';



//step 1 create a context
const AppContext = createContext();

const Appprovider = ({ children }) => {
    const [students, setStudents] = useState();
    const [teachers, setTeachers] = useState()

    // step 2 create provider subcriber model
    return (
        <AppContext.Provider
            value={{
                students,
                setStudents,
                teachers,
                setTeachers
            }}>
            {children}
        </AppContext.Provider>
    )
}

// step 3 use the context

export const Appstate = () => {
    return useContext(AppContext)
}
export default Appprovider