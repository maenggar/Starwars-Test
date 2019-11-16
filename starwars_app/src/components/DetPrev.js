import React from "react";
import { useParams } from "react-router-dom";

function DetPrev() {
  let { id } = useParams;
  return <h1>{`try this detai:${id}`}</h1>;
}
export default DetPrev;
