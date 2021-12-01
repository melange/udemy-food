import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState('');
    
    const searchApi = async (serchTerm) => {
        console.log('searchApi called');
        try {
            const response = await yelp.get('/search', {
                params: {
                    limit: 50,
                    term: serchTerm,
                    location: 'san jose'
                } 
            });
            setResults(response.data.businesses);
            setErrorMessage('');
        } catch(err) {
            setErrorMessage('Something went wrong');
        }
    }

   useEffect(()=> {
       searchApi('pasta');
   }, [])

   return [searchApi, results, errorMessage];
};