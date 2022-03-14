import React, { useState } from "react";
import axios from "axios";
import '../custom-bulma.scss'; // Bulma

const TextSearch = (props) => {
    const [data, setData] = useState({hits:[]});
    const [error, setError] = useState(null);

    const getData = async (e) => {
        try {
            e.preventDefault();
            e.stopPropagation();
            const query = document.getElementById('input-query').value;
            const focus = 'story'; // used to modify the focus of the  search

            // Make query request to Hackernews API (currently query is whole wrapped by "")
            const response = await axios.get(
                `https://hn.algolia.com/api/v1/search_by_date?query="${query}"&tags=${focus}`
            );

            console.log(response.data);
            setData(response.data);
            setError(null);
        } catch (error) {
            setData({hits:[]}); // initial state
            setError(error.message);
        }
    }

    return (
        <div>
            <br/>
            <div>
                <div className="field">
                    <form onSubmit={getData}>
                        <input className="is-primary input" id="input-query" name="search" type="text" placeholder="News" style={{position:'fixed', bottom:'6px', right:'0px'}} />
                        <button className="is-primary button" name="search" type="submit" style={{position:"fixed", bottom:'6px', right:'0px'}}>Search</button>
                    </form>
                </div>
            </div>
            <br/>
            {/* parse the json from query into sections */}
            {data.hits.map((obj, index)=> {
                return (
                    <section className="container" key={index}>
                        <div className="card" style={{padding:'20px'}}>
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

export default TextSearch;
