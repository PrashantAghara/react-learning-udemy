import React, { useEffect } from "react";
import { Link, Route, useParams, useRouteMatch } from "react-router-dom";
import HighlightedQuote from "../components/quotes/HighlightedQuote";
import { getSingleQuote } from "../libs/api";
import Comments from "./../components/comments/Comments";
import LoadingSpinner from "../components/UI/LoadingSpinner";
import useHttp from "./../hooks/use-http";

const QuoteDetail = () => {
  const match = useRouteMatch();
  const params = useParams();
  const { quoteId } = params;
  const {
    sendRequest,
    status,
    data: quote,
    error,
  } = useHttp(getSingleQuote, true);

  useEffect(() => {
    console.log(quoteId);
    sendRequest(quoteId);
  }, [sendRequest, quoteId]);

  //Another way to create nested Route
  /* <Route path={`/quotes/${params.quoteId}/comments`}><Comments /></Route> */

  if (status === "pending") {
    return (
      <div className="centered">
        <LoadingSpinner />
      </div>
    );
  }
  if (error) {
    return <p className="centered focused">{error}</p>;
  }
  if (!quote.text === "") {
    return <p>No Quote Found</p>;
  }
  return (
    <>
      <HighlightedQuote text={quote.text} author={quote.author} />
      <Route path={match.path} exact>
        <div className="centered">
          <Link className="btn--flat" to={`${match.url}/comments`}>
            Load Comments
          </Link>
        </div>
      </Route>
      <Route path={`${match.path}/comments`}>
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
