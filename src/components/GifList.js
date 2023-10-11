import React from 'react';

//receives data props from state
function GifList({gifList}) {



    return (
            <ul>
                {gifList.map((gif) => {
                    return (
                        <li key={gif.id}>
                            {console.log(gif.source)}
                            <img src={gif.images.original.url} alt="gif"/>
                        </li>
                    )
                })}
                
            </ul>
    )
}

export default GifList;