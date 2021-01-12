import React, { useState, useEffect } from 'react';
import './App.css';
import Quote from "./Quote";
import axios from './axios';

function App() {
  const [quotes, setQuotes] = useState();
  const [quoteType, setQuoteType] = useState("0");
  const [author, setAuthor] = useState("");
  
  useEffect(() => {    
    const getQuotes = async () => {
      if (quoteType !== "") {
        const url = quoteType === "0" ? "quotes/random" : `quotes?author=${author}`;
        const request = await axios.get(url);
        setQuotes(request.data.data);
      }
    }
    getQuotes();

  }, [ quoteType, author ]);
  
  

  const onAuthorClick = (author) => {
    setAuthor(author);
    setQuoteType("1");
  }

  return (
    <div className="app">   
      <div className="app__header" onClick={() => { setQuoteType(""); setQuoteType("0") } }>
        <h4>random</h4>
        <i className="material-icons md-24">loop</i>        
      </div>  
      {
        quoteType === "1" ? <h2 className="app__author"> {author} </h2> : null
      }
      <Quote quotes={quotes} quoteType={quoteType} onAuthorClick={onAuthorClick} />
      <div className="app__footer">Jyoti ADHIAKRI @ DevChallenges.io</div>      
    </div>
  );
}

export default App;
