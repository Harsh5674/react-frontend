import propTypes from 'prop-types'
import React,{useState} from 'react'

function Listupdate(props){
    const [foods,setfoods]=useState(["Apple","Mango","Orange"]);
    
    function handlefood(){
        const newfood=document.getElementById("foodinput").value;
        document.querySelector("#foodinput").value="";
        setfoods(f=>[...f,newfood]);
    }

    function handlremove(){
        const remo = document.getElementById("foodinput1").value;
        document.querySelector("#foodinput1").value="";
        const newlist=foods.filter((element) => element!==remo);
        //listitems=newlist;
        setfoods(newlist);
    }

    const listitems = foods.map(fruit => <li>{fruit}</li>);

    return(
        <>
            <h1>List of Foods</h1>
            <ul>
                {listitems}
            </ul>
            <input type="text" id='foodinput' placeholder='Enter food name'/>
            <button value={foods} onClick={handlefood}>Add Food</button>
            <input type="text" id='foodinput1' placeholder='Enter food name'/>
            <button value={foods} onClick={handlremove}>Remove Food</button>
        </>
    );
}

export default Listupdate