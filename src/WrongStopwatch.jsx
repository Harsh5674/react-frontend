import React,{useState,useEffect,useRef} from 'react'

function Stopwatch(){
    const [mili,setmili] = useState(0);
    const [sec,setsec] = useState(0);
    const [nim,setmin] = useState(0);

    function startstopwatch(){
        const handlemili = setInterval(() => {
            setmili(m => m+1);
           }, 10); 
    
        const handlesec = setInterval(() => {
            setsec(s => s+1);
           }, 1000);
    
        const handlemin = setInterval(() => {
            setmin(n => n+1);
           }, 60000);
        
        document.getElementById("show").innerHTML =  `${pad(nim)}:${pad(sec)}:${pad(mili)}`; 
        
    }

    function pad(number){
        if(number<10){
           return "0"+number;
        }
        else
        return number;
     }
    

     function refresh(){
         setmili(m => m==0);
         setmin(n => n==0);
         setsec(s => s==0);
     }

     function stop(){
          clearInterval(handlemili);
          clearInterval(handlemin);
          clearInterval(handlesec);
          
     }

    return(
        <div className='clock-container'>
            <div className='clock'>
                   <span id='show'></span>
            </div>
            <button className='start1' onClick={startstopwatch}>Start</button>
            <button className='stop1' onClick={stop}>Stop</button>
            <button className='restart' onClick={refresh}>Restart</button>
        </div>
    );
}

export default Stopwatch