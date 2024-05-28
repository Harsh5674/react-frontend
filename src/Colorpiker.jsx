import propTypes from  'prop-types'
import React,{useState} from 'react'

function Colorpiker(props){
    const [color,setcolor] = useState("#FFFFFF");

    function handlecolor(event){
        setcolor(event.target.value);
    }

    return(
        <>
          <div className='color-picker'>
            <h1 className='h11'>Color Picker</h1>
                <div className='color-display' style={{backgroundColor: color}}>
                <p>Selected color: {color}</p>
                </div>
                <label className='lubel'>Select a Color: </label>
                <input type="color" value={color} onChange={handlecolor} />
            </div>  

        </>
    );
}

export default Colorpiker