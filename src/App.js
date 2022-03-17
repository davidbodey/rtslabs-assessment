import Header from "./components/Header";
import React from "react";
import {Route, Routes} from "react-router-dom";
import TextSearch from "./components/TextSearch";
import ImageSearch from "./components/ImageSearch";
import VideoSearch from "./components/VideoSearch";

function App() {

// TODO - AWS SECRETS MANAGER SETUP
// var AWS = require('aws-sdk');
// AWS.config.update({
//     accessKeyId: process.env.REACT_APP_AWS_ACCESS_KEY_ID,
//     secretAccessKey: process.env.REACT_APP_AWS_SECRET_ACCESS_KEY,
//     "region": "us-west-2"
// }); // for simplicity. In prod, use loadConfigFromFile, or env variables
// const clientsecrets = new AWS.SecretsManager( { region: 'us-west-2' } );
// const getMySecret = async ( SecretId ) => {
//     const s = await clientsecrets.getSecretValue( { SecretId } ).promise();
//     return s.SecretString;
// };
// const secret =  getMySecret( process.env.REACT_APP_ARN );
// console.log( 'secret : ', secret );

    return (
        <div>
            <Header></Header>
            <Routes>
                <Route path="/" element={<VideoSearch />} />
                <Route path="/images" element={<ImageSearch />} />
                <Route path="/videos" element={<VideoSearch />} />
                <Route path="/news" element={<TextSearch />} />
            </Routes>
        </div>
    );
}

export default App;
