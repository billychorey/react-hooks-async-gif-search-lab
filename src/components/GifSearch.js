import React, {useState} from 'react';


function GifSearch({handleSearch}) {
const [inputValue, setInputValue] = useState("");

    function handleChange(e) {
        setInputValue(e.target.value);
    }
    function handleSubmit(e) {
        e.preventDefault();
        handleSearch(inputValue);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>
                    Enter search term:
                    <input type="text" value={inputValue} onChange={handleChange} />
                </label>
                <button type="submit">Search</button>
            </form>
        </div>
    )
}

export default GifSearch;