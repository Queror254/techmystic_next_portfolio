import { useEffect, useState } from "react";
import { getQuotes, getRandomQuote, getDayOfQuote } from "motivate-quotes";

const RandomQuoute = () => {
  const [programmingQuotes, setProgrammingQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [quoteOfTheDay, setQuoteOfTheDay] = useState("");

  useEffect(() => {
    // Fetch a random quote
    const random = getRandomQuote("Creativity");
    setRandomQuote(random.text || random);
  }, []);

  return (
    <div className="text-white rounded-lg shadow-lg">
      <div className="text-center">
        <p className="text-3xl font-mono">"{randomQuote || "Loading..."}"</p>
      </div>
    </div>
  );
};

export default RandomQuoute;
