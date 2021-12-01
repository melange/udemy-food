import React, { useEffect, useState } from "react";
import { View, Text, StyleSheet } from "react-native";
import yelp from "../api/yelp";
import SearchBar from "../components/SearchBar";
import useResults from "../hooks/useResults";


const SearchScreen = () => {
    const [term, setTerm] = useState('');
    const [searchApi, results, errorMessage] = useResults();

    return (
        <View>
            <SearchBar 
                term={term} 
                onTermChange={(newTerm) => setTerm(newTerm)}
                onTermSubmit={() => searchApi(term)}
            />
            <Text>Search Screen</Text>
            {errorMessage ? <Text>{errorMessage}</Text> : null}
            <Text>We have found {results.length} results</Text>
        </View>  
    );
};

export default SearchScreen;