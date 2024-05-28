import React,{useState,useEffect} from 'react'

function Digitalclock(){
   const [time,settime] = useState(new Date());

   useEffect(() => {
         const intervalId = setInterval(() => {
                settime(new Date());
         },1000);

         return () => {
            clearInterval(intervalId);
         }
   },[])

   function formattime(){
       let hours=time.getHours();
       const minutes=time.getMinutes();
       const seconds=time.getSeconds();
       const meridiem=hours >= 12 ? "PM":"AM";

       hours = hours%12 || 12;
       return `${pad(hours)}:${pad(minutes)}:${pad(seconds)} ${meridiem}`;
   }

   function pad(number){
      if(number<10){
         return "0"+number;
      }
      else
      return number;
   }

    return(
        <>
           <div className='clock-container'>
              <div className='clock'>
                <span className='tim'>{formattime()}</span>
              </div>
           </div>
        </>
    );
}

export default Digitalclock