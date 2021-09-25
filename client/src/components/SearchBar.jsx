import React, { useState, useEffect } from 'react'
import axios from 'axios'

const Search = () => {
    const [searchTerm, setSearchTerm] = useState('');
    const [novels, setNovels] = useState([])
    
    useEffect(() => {
        fetchNovels()
    }, [])

    const fetchNovels = async() => {
        let { data } = await axios.get('http://localhost:1337/api/novels')

        console.log(data)

        setNovels(data)
    }

    return (
        <div className="container">
        <div className="title"><h1>Great Novels</h1></div>
        
        <input className="searchbar" type="text" name="searchbar" value={searchTerm} onChange={event => setSearchTerm(event.target.value)} />
        {
            novels.filter(novel => novel.title.toLowerCase().includes(searchTerm.toLowerCase())).map(novel => {
                return (<p>{novel.title} by {novel.author.nameFirst} {novel.author.nameLast}</p>)
            })
        }
        </div>
    )
}

export default Search