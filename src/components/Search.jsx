import React, { useState } from "react";
import axios from "axios";

const Search = (props) => {
    const [data, setData] = useState({hits:[]});
    const [error, setError] = useState(null);
    const history = props.app.history;
    const setHistory = props.app.setHistory;

    const getData = async (e) => {
        try {
            e.preventDefault();
            e.stopPropagation();
            const query = document.getElementById('input-query').value;
            const focus = 'story'; // used to modify the focus of the  search
            setHistory([...history, query]); // store value for History page

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
            <div className="container">
                <div className="field has-addons">
                    <form onSubmit={getData}>
                        <input className="is-primary input is-large" id="input-query" name="search" type="text" placeholder="News" style={{position:'fixed', top:'-1.5px', left:'45vw'}} />
                        <button className="is-primary button is-large" name="search" type="submit" style={{position:"fixed", top:'-1.5px', right:'1px'}}>Search</button>
                    </form>
                </div>
            </div>
            <br/>
            {/* parse the json from query into sections */}
            {data.hits.map((obj, index)=> {
                return (
                    <section className="hero" key={index}>
                        <div className="hero-body">
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
