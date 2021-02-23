import React, { useState } from 'react'
import './stylesearch.css'

const Search = () => {
    const [searches, setSearch] = useState([])
    const [query, setQuery] = useState('')

    const handleClick = () => {
        // (Actually searching would require an API call here)
        setSearch(searches => [...searches, query])
        // setSearch(searches => searches.concat(query))
    } 

    const updateQuery = ({ target }) => {
        // update query onKeyPress of input box
        setQuery(target.value)
    }

    const keyPressed = ({ key }) => {
        // Capture search on Enter key
        if (key === 'Enter') {
            handleClick()
        }
    }

    const submitHandeler = e => {
        // Prevent form submission on Enter key
        e.preventDefault()
    }

    const Searching = ({ query }) => <li>{query}</li>

    return (
        <div clssName='Search'>
            <h1>Array.concat() to update state in React</h1>
            <h2>Previous searches: (React Hooks)</h2>
            <ul className="previousSearch">
                {searches.map((query, i) => (
                    <Searching
                        query={query}
                        // Prevent duplicate keys by appending index:
                        key={query + i}
                    />
                    ))}
            </ul>

            <div className='break' />

            <form onSubmit={submitHandeler}>
                <div>
                    <input
                        className='search-field-input'
                        placeholder='Search for ...'
                        type='text'
                        onChange={updateQuery}
                        onKeyPress={keyPressed}
                    />
                    <button
                        className='search-field-button'
                        type='button'
                        onClick={handleClick}
                    >
                        Search
                    </button><br/><br/>
                </div>
            </form>
        </div>
    )
}

export default Search

// https://js.plainenglish.io/how-to-add-to-an-array-in-react-state-3d08ddb2e1dc
