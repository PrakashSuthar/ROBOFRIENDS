import React from 'react';


const SearchBox=({searchfield, searchChange})=>{
    return(

        <div>
            <input type="search" placeholder="Enter Robot Name" onChange={searchChange}/>
        </div>

    );
}

export default SearchBox;