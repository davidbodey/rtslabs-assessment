import React, {useEffect, useState} from "react";
import axios from "axios"

const Search = () => {
    const [data, setData] = useState({hits:[]});
    const [history, setHistory] = useState([{query:'', hits:[]}]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    const input_bar = document.getElementById('input-query') // the searchbar

    const getData = async (e) => {
        try {
            e.preventDefault();
            e.stopPropagation();
            let query = document.getElementById('input-query').value;
            const focus = 'story'; // used to modify the focus of the  search

            // Make query request to Hackernews API
            const response = await axios.get(
                `https://hn.algolia.com/api/v1/search_by_date?query=${query}&tags=${focus}`
            );

            console.log(response.data);
            setData(response.data);
            setError(null);
        } catch (err) {
            setData(null);
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <br/>
            <div className="container">
                <div className="field has-addons">
                    <form onSubmit={getData}>
                        <input className="is-primary input is-large" id="input-query" name="search" type="text" placeholder="What are you looking for?" style={{position:'fixed', top:'-1.5px', left:'45vw'}} />
                        <button className="is-primary button is-large" name="search" type="submit" style={{position:"fixed", top:'-1.5px', right:'1px'}}>Search</button>
                    </form>
                </div>
            </div>
            <br/>

            {data.hits.map((obj, index)=> {
                return (
                    <section className="hero" id="text-results">
                        <div className="hero-body ">
                            <p> <a href={obj.url} className="title"> {obj.title + " "} </a> </p>
                            <p className="subtitle"> by {obj.author} @ {obj.created_at} </p>
                        </div>
                        <hr />
                    </section>
                 )}
            )}
        </div>
    );
}

export default Search;
