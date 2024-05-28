import propType from 'prop-types'

function Usergreeting(props){
    return(
        props.isLoggedin ? <h2 className='welcome'>Welcome {props.username}</h2> :
                           <h2 className='login'>Please login to continue</h2>
    );
}

Usergreeting.propType={
    isLoggedin:  propType.bool,
    username: propType.string,
}

export default Usergreeting