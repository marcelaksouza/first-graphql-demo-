import React, { useState, useEffect } from "react";
import { useQuery } from "@apollo/client";
import { GET_AUTHORS } from "../lib/queries/queries";

const AuthorsList = (props) => {
  const { loading, data } = useQuery(GET_AUTHORS);
  const [authorsList, setAuthors] = useState([]);

  useEffect(() => {
    if (data) {
      setAuthors(data.authors);
    }
  }, [data]);

  const displayAuthors = () => {
    if (loading) return <option disabled>Loading authors</option>;
    else {
      return authorsList.map((author) => {
        return (
          <option key={author.id} value={author.id} > 
            {author.name}
          </option>
        );
      });
    }
  };
  return displayAuthors();
};

export default AuthorsList;
