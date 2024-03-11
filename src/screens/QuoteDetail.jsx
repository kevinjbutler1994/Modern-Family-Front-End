import { useState, useEffect } from 'react';
import { getQuote } from "../services/quotes.js";
import { useParams, useNavigate } from "react-router-dom";

function    QuoteDetail() {
  const [quote, setQuote] = useState({})

  let { id } = useParams()
  let navigate = useNavigate()

  const fetchQuote = async () => {
    const oneQuote = await getQuote(id)
    setCharacter(oneQuote)
  }

  useEffect(() => {
    fetchQuote()
  }, [])

  
  return (
    <div>
      <h1>Quote: {quote.quote}</h1> 
      <h2>Said By: {quote.saidBy}</h2>
    </div>
  )
}

export default QuoteDetail