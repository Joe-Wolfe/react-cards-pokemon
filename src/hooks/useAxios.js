import { useState } from 'react';
import axios from 'axios';

function useAxios(baseUrl) {
    const [response, setResponse] = useState([]);
    const addData = async (data, extendedUrl) => {

        console.log(extendedUrl)
        const res = await axios.get(`${baseUrl}${extendedUrl ? extendedUrl : ''}`);
        setResponse(data => [...data, res.data]);
    };
    return [response, addData];
}

export default useAxios;