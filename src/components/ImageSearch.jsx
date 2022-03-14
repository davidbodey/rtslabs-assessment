import React, { useState } from "react";
import axios from "axios";
import '../custom-bulma.scss'; // Bulma

const ImageSearch = (props) => {
    const [data, setData] = useState({'value':[]});
    const [error, setError] = useState(null);

    const getData = async (e) => {
        try {
            e.preventDefault();
            e.stopPropagation();
            const akls = 'a7b1ac8b2e194fb6ad6bc21c407da8ac';
            const url = 'https://api.bing.microsoft.com/v7.0/images/search?q=';
            const query = document.getElementById('input-query').value;
            const headers = {'Ocp-Apim-Subscription-Key' : akls}
            const response = await axios.get(url + query, {headers: headers});

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
                        <input className="is-primary input" id="input-query" name="search" type="text" placeholder="Images" style={{position:'fixed', bottom:'6px', right:'0px'}}/>
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

export default ImageSearch;
