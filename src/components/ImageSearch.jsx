import React, { useState } from "react";
import axios from "axios";
import '../custom-bulma.scss'; // Bulma
import {v4 as uuidv4} from "uuid"; // Randomized string

const ImageSearch = (props) => {
    const [data, setData] = useState({'value':[]});
    const [error, setError] = useState(null);

    const getData = async (e) => {
        try {
            e.preventDefault();
            e.stopPropagation();
            const key = process.env.REACT_APP_MS1;
            const url = process.env.REACT_APP_IMAGE_API;
            const query = document.getElementById('input-query').value;
            const headers = {'Ocp-Apim-Subscription-Key' : key}

            // Make request
            const response = await axios.get(url + query, {headers: headers});

            // Store Data
            setData(response.data);
            setError(null);
        } catch (error) {
            setData({value:[]}); // Initial state
            setError(error.message);
        }
    }

    return (
        <div>
            <br/>
            <div className="container">
                <div className="field">
                    <form onSubmit={getData}>
                        <input className="is-primary input is-large animate__animated animate__fadeInRightBig" id="input-query" name="search" type="text" placeholder="Images" style={{position:'fixed', bottom:'6px', right:'0px'}}/>
                        <button className="is-primary button is-large animate__animated animate__fadeInRightBig" name="search" type="submit" style={{position:"fixed", bottom:'6px', right:'0px'}}>Search</button>
                    </form>
                </div>

                <br/>
                <div className={'container card'} >
                    {/* parse the json from query into sections */}
                    {data.value.map((obj, index)=> {
                        return (
                            <div className="columns animate__animated animate__fadeInLeftBig" key={uuidv4()}  >
                                <div className={'column'} >
                                    <img src={obj.thumbnailUrl} alt={obj.title} style={{width:'100vw'}} />
                                </div>

                                <div className={'column'} >
                                    <p className={'title'}> <a href={obj.hostPageDisplayUrl}> {obj.name} </a> </p>
                                    <p className={'subtitle'}> {obj.datePublished} </p>
                                </div>
                                <br/>
                            </div>
                        )}
                    )}
                </div>
            </div>
        </div>
    );
}

export default ImageSearch;
