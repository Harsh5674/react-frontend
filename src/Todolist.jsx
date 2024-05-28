import propTypes from 'prop-types'
import React,{useState} from 'react'
import Lists from './Lists';

function Todolist(props){
      const [tasks,settasks]=useState(["Eat food","Take a Shower"]);
      const [newtask,setnewtask]=useState("");

      function handleinputchange(event){
            setnewtask(event.target.value);
      }

      function addtask(){
            if(newtask.trim()!==""){
                settasks(t => [...t,newtask]);
                setnewtask("");
            }
            
      }

      function removetask(index){
         const updatetasks=tasks.filter((element,i) => i!==index);
         settasks(updatetasks);
      }
      function movetaskup(index){
           if(index>0){
            const updatetasks=[...tasks];
            [updatetasks[index],updatetasks[index-1]]=[updatetasks[index-1],updatetasks[index]];
            settasks(updatetasks);
           }
      }
      function movetaskdown(index){
        if(index<tasks.length-1){
            const updatetasks=[...tasks];
            [updatetasks[index],updatetasks[index+1]]=[updatetasks[index+1],updatetasks[index]];
            settasks(updatetasks);
           }
      }

      return(
           <>
           <div className='to-do-list'>
                <h1 className='head'>To-Do-List</h1>
                <div>
                   <input type="text" value={newtask} placeholder='Enter a Task' className='inpu' id='inpu1' onChange={handleinputchange}/>
                   <button className='buto' onClick={addtask}>Add</button>
                </div>
                
                <ol className='olt'>
                    {tasks.map((task,index)=> <li className='lit' key={index}>
                                                 <span className='span1'>{task}</span>
                                                 <button className='buto1' onClick={() => removetask(index)}>Delete</button>
                                                 <button className='moveu' onClick={() => movetaskup(index)}>⬆️</button>
                                                 <button className='moveu' onClick={() => movetaskdown(index)}>⬇️</button>
                                              </li>)}
                </ol>
           </div>
           
           </>
      );
}

export default Todolist