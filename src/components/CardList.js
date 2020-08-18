import React from 'react';
import Card from './Card';

const CardList=({robots})=>{

    const cardMapper=robots.map((element,i)=>{
        //Unique key needs to be given to optimize ReactDom manipulation
        // if(true){
        //     throw new Error('NOOOOO');
        // }
        return (<Card key={i} id={robots[i].id} name={robots[i].name} email={robots[i].email}/>);
        //return (<Card id={element.id} name={element.name} email={element.email}/>);
    });


    return (
        <div>
        {cardMapper}
        </div>
    );
    
}
export default CardList;