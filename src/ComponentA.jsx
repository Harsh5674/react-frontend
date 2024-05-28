import React,{useState,createContext} from 'react'
import ComponentD from './ComponentD.jsx'

export const userContext = createContext();

function ComponentA(){
    const [user,setuser] = useState("Ramesh");

    return(
        <div>
            <h1>Component A</h1>
            <h2>Hello {user}</h2>
            <userContext.Provider value={user}>
            <ComponentD user={user}/>
            </userContext.Provider>
            
        </div>
    );
}

export default ComponentA