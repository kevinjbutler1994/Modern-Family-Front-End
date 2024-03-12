import { useState, useEffect } from "react";
import { getQuotes } from "../services/quotes.js";
import Quote from "../components/Quote.jsx";

function Quotes() {
  const [quotes, setQuotes] = useState([]);

  async function fetchQuotes() {
    const allQuotes = await getQuotes();
    setQuotes(allQuotes);
  }

  useEffect(() => {
    fetchQuotes();
  }, []);

  return (
    <div>
      <h1>Quotes</h1>
      <h1>Select quotes that we all know and love</h1>
      <div className="quotes-container">
        {quotes?.map((quote) => (
          <Quote quote={quote} key={quote.saidBy} />
        ))}
      </div>
    </div>
  );
}

export default Quotes;
