import React, {useState, useEffect} from 'react';
import GifSearch from "./GifSearch";
import GifList from "./GifList";

function GifListContainer() {
    const [gifList, setGifList] = useState([])
    const [searchTerm, setSearchTerm] = useState('');

    //fetch data, first 3 gifs to be in component state
    //pass this data in state to GifList
    // my api key: qCLlNIinSWuhVZsfYMF5s7Pen1KCTwlE


    useEffect(() => {
        if (searchTerm) {

        const fetchUrl = `https://api.giphy.com/v1/gifs/search?q=${searchTerm}&api_key=qCLlNIinSWuhVZsfYMF5s7Pen1KCTwlE&rating=g`

        fetch(fetchUrl)
            .then(res => res.json())
            .then(gifs => {
                setGifList(gifs.data.slice(0, 12))
            })
        }
    }, [searchTerm])
 

    //Pass down submit handler function to GifSearch
    function handleSearch(searchTerm) {
        setSearchTerm(searchTerm);
    }

    return(
        <div>
            <GifSearch handleSearch={handleSearch} />
            <GifList 
            gifList={gifList} 
            setSearchTerm={setSearchTerm}
            />
        </div>
    )
}

export default GifListContainer;