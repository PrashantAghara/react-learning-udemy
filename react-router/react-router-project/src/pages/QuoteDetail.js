import React from "react";
import { Route, useParams } from "react-router-dom";
import Comments from "./../components/comments/Comments";

const QuoteDetail = () => {
  const params = useParams();

  //Another way to create nested Route
  /* <Route path={`/quotes/${params.quoteId}/comments`}><Comments /></Route> */

  return (
    <>
      <div>QuoteDetail</div>
      <p>{params.quoteId}</p>
      <Route path="/quotes/:quoteId/comments">
        <Comments />
      </Route>
    </>
  );
};

export default QuoteDetail;
