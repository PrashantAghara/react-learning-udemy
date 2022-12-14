import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import QuoteForm from "../components/quotes/QuoteForm";
import { addQuote } from "../libs/api";
import useHttp from "./../hooks/use-http";

const NewQuote = () => {
  const { sendRequest, status } = useHttp(addQuote);
  const history = useHistory();

  useEffect(() => {
    if (status === "completed") {
      history.push("/quotes");
    }
  }, [status, history]);

  const addQuoteHandler = (data) => {
    sendRequest(data);
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
};

export default NewQuote;
