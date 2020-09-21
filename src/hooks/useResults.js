import { useEffect, useState } from "react";
import yelp from "../api/yelp";

export default () => {
  const [results, setResults] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  const searchAPI = async (searchTerm) => {
    try {
      const response = await yelp.get("/search", {
        params: {
          limit: 50, // limit and add to the query string
          location: "Kamloops",
          term: searchTerm,
        },
      });
      setResults(response.data.businesses);
    } catch (err) {
      setErrorMessage("Something went wrong");
    }
  };
  // Call searchAPI when component is first rendered: BAD CODE
  // searchAPI("pasta"); automatically re-render'
  useEffect(() => {
    searchAPI("pasta");
  }, []);

  return [searchAPI, results, errorMessage];
};
