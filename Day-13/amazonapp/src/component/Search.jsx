import React from 'react'

const Search = ({searchHandler})=>{
    return (
        <div className="search">
            <input type="text" name='search' onChange={(e)=>searchHandler(e.target.value)} />
        </div>
    )
}
export default Search;