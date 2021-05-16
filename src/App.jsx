import React, { useState } from 'react';
import { apiCall } from './utils.ts';
import NewsContainer from './components/NewsContainer';

const App = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [loaded, setLoaded] = useState(false);
  const [articles, setArticles] = useState();

  const submitForm = async (e) => {
    e.preventDefault();
    apiCall(searchTerm).then((response) => {
      setArticles(response);
      setLoaded(true);
    });
  };

  if (!loaded) {
    return (
      <>
        <h1>Typescript NewsAPI</h1>
        <form onSubmit={submitForm}>
          <label htmlFor="searchTerm">
            Search the news...
            <input
              type="text"
              name="searchTerm"
              onChange={(e) => setSearchTerm(e.target.value)}
              value={searchTerm}
            />
          </label>
          <button type="button" onClick={submitForm}>
            Search!
          </button>
        </form>
      </>
    );
  }
  return <NewsContainer articles={articles} />;
};

export default App;
