import React, { useState } from "react";
import { View, Text, ScrollView } from "react-native";
import SearchBar from "../Components/SearchBar";
import yelp from "../api/yelp";
import useResults from "../hooks/useResults";
import ResultsList from "../Components/ResultsList";

const SearchScreen = () => {
  const [term, setTerm] = useState("");
  const [searchAPI, results, errorMessage] = useResults();
  // For the result from Yelp API
  //console.log(results);

  const filterResultsByPrice = (price) => {
    // price === '$' ||"$$"
    return results.filter((results) => {
      return results.price === price;
    });
  };

  return (
    <>
      <SearchBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchAPI(term)} // searchAPI - helper function to invole
      />
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <ScrollView>
        <ResultsList
          results={filterResultsByPrice("$")}
          title={"Cost Effective"}
        />
        <ResultsList
          results={filterResultsByPrice("$$")}
          title={"Bit Pricier"}
        />
        <ResultsList
          results={filterResultsByPrice("$$$")}
          title={"Big Spender"}
        />
      </ScrollView>
    </>
  );
};

export default SearchScreen;
