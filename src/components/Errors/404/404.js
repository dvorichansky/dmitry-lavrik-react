import React from "react";
import { routesMap } from "~/routes/routes";
import { Link } from "react-router-dom";

export default function() {
  return (
    <>
      <div className="alert alert-warning">
        <h1>Error 404, page not fount</h1>
        <hr></hr>
        <Link to={routesMap.order} className="btn btn-primary">
          Go to home page
        </Link>
      </div>
    </>
  );
}
