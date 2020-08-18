import React from 'react';//Required when using the JSX syntax(HTML like syntax )
//use tachyons for className=' list of classes'
const Card=(props)=>{
    return (
    
    <div className='bg-light-green dib br3,pa3 ma2 dim bw2 shadow-5'>
                <img alt='robots' src={`https://robohash.org/${props.id}?200x200`} />
                <h2>{props.name}</h2>
                <p>{props.email}</p>        
            </div>
    );
    //src={"TEMPLATE STRING"}
};

export default Card;