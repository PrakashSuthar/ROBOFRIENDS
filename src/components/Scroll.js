import React from 'react';

//Scroll is not a self scrolling compoent but a container tag/element
/*
<Scroll>
    <App robots={robots}/>
</Scroll>
*/

const Scroll=(props)=>{//props is the children object
    //use props.children

    return(
        <div style={{overflow:"scroll",border:"1px solid black", height:"700px"}}>
            {props.children}

        </div>

    )
}

export default Scroll;