import styles from './Button.module.css'

function Button(){
 
    const handleclick = (e) => e.target.innerText="ouch!";
    const handleclick1 = (e) => e.target.style.display="none";

    return(
       <button onClick={(e)=>handleclick(e)} onDoubleClick={(e)=>handleclick1(e)} className={styles.button}>Click</button>
    );
}

export default Button