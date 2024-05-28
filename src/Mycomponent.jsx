import propType from 'prop-types'
import React, {useState} from 'react'

function Mycomponent(props){
    const [name,setName] = useState("Guest");
    const updateName=()=>{
        setName("Fugah");
    }
   return(
    <div>
        <p>Name: {name}</p>
        <button onClick={updateName}>Set Name</button>
    </div>
   );
};

export default Mycomponent