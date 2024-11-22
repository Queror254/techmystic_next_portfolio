import { useEffect, useState } from "react";
import { getQuotes, getRandomQuote, getDayOfQuote } from "motivate-quotes";

const QuoteFetcher = () => {
  const [programmingQuotes, setProgrammingQuotes] = useState([]);
  const [randomQuote, setRandomQuote] = useState("");
  const [quoteOfTheDay, setQuoteOfTheDay] = useState("");

  useEffect(() => {
    // Fetch quotes from the "Programming" category
    try {
      const quotes = getQuotes({
        author: false,
        numberOfQuotes: 1,
        category: "Life",
      });
      // Ensure we're mapping over the array and extracting the 'text' field
      setProgrammingQuotes(quotes.map((quote) => quote.text || quote));
    } catch (error) {
      console.error("Error fetching Life quotes:", error.message);
    }

    // Fetch a random quote from the "Education" category
    const random = getRandomQuote("Creativity");
    setRandomQuote(random.text || random);

    // Fetch the quote of the day
    const dayQuote = getDayOfQuote();
    setQuoteOfTheDay(dayQuote.text || dayQuote);
  }, []);

  return (
    <div className="text-white rounded-lg shadow-lg">
      <div className="text-center">
        <span className="list-none text-3xl font-mono">
          {programmingQuotes.length > 0 ? (
            programmingQuotes.map((quote, index) => (
              <span key={index}>"{quote}"</span>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </span>
      </div>
    </div>
  );
};

export default QuoteFetcher;
