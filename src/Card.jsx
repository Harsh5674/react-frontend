
import profi from './assets/profi.png'

function Card(){
    return(
         <div className="card">
              <img className="card-image" src={profi} alt="profile picture"></img>
              <h2 className='card-title'>so_haarsh</h2>
              <p className='card-text'>making cards on easy go</p>
         </div>
    );

}

export default Card