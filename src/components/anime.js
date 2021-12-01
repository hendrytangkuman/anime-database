import React, { useState, useEffect } from "react";
import AnimeItem from "./animeItem";

const Anime = () => {
    const [topAnime, setTopAnime] = useState([]);
    const [text, setText] = useState('');
    
    useEffect(() => {

        fetch(`https://api.jikan.moe/v3/top/anime/1/bypopularity`)
        .then(response => response.json())
        .then(data => setTopAnime(data.top)); 

    }, []);


    const handleSubmit = (e) => {
        e.preventDefault();

        fetch(`https://api.jikan.moe/v3/search/anime?q=${text}&order_by=title&sort=asc&limit=10`)
        .then(response => response.json())
        .then(data => setTopAnime(data.results)); 

        setText('');

    }


    const handleChange = (e) => {setText(e.target.value)};




    return(
        <section className="py-5">
            <div className="container px-4 px-lg-5 mt-5">
                <h2>Search Anime Here</h2>
                <form onSubmit={handleSubmit}>
                    <input type="text" className="form-control" onChange={handleChange} value={text} />
                </form>

                <div className="row gx-4 gx-lg-5 row-cols-2 row-cols-md-3 row-cols-xl-4 justify-content-center my-3 ">

                { topAnime.map(anime => <AnimeItem key={anime.mal_id} anime={anime} />) }
                
                </div>
            </div>
        </section>
    );
}

export default Anime;