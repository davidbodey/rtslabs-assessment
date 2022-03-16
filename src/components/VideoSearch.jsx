import React, { useState } from "react";
import axios from "axios";
import '../custom-bulma.scss'; // Bulma

// TODO - Ground up rewrite or proper OOP with ImageSearch
const VideoSearch = (props) => {
    const [data, setData] = useState({'value':[]});
    const [error, setError] = useState(null);

    const getData = async (e) => {
        try {
            e.preventDefault();
            e.stopPropagation();
            const key = process.env.REACT_APP_MS1;
            const url = process.env.REACT_APP_VIDEO_API;
            const query = document.getElementById('input-query').value;
            const freshness = '&freshness=Day'; // {Day, Week, Month}
            const headers = {'Ocp-Apim-Subscription-Key' : key}
            const response = await axios.get(url + query + freshness, {headers: headers});

            console.log(response);
            setData(response.data);
            setError(null);
        } catch (error) {
            setData({value:[]}); // initial state
            setError(error.message);
        }
    }

    return (
        <div className={''}>
            <br/>
            <div className="container">
                <div className="field">
                    <form onSubmit={getData}>
                        <input className="is-primary input" id="input-query" name="search" type="text" placeholder="Videos" style={{position:'fixed', bottom:'6px', right:'0px'}}/>
                        <button className="is-primary button" name="search" type="submit" style={{position:"fixed", bottom:'6px', right:'0px'}}>Search</button>
                    </form>
                </div>

                <br/>
                <div className={'container card'} key={'card'}>
                    {/* parse the json from query into sections */}
                    {data.value.map((obj, index)=> {
                        return (
                            <div className="columns" key={'card-content-' + index} style={{padding: '30px'}} >
                                <div className={'column'}>
                                    <img src={obj.thumbnailUrl} alt={obj.title} key={'card-img-' + index} style={{width:'100vw'}}/>
                                </div>

                                <div className={'column'}>
                                    <p className={'title'}> <a href={obj.hostPageDisplayUrl}> {obj.name} </a> </p>
                                    <p className={'subtitle'}> {obj.datePublished} </p>
                                </div>
                            </div>
                        )}
                    )}
                </div>
            </div>
        </div>
    );
}

export default VideoSearch;
