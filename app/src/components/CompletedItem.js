import React from "react";
import { Checkbox } from "semantic-ui-react";
import "./CompletedItem.css";

const CompletedItem = props => {
  return (
    <>
      <p className="CompletedItem_paragraph">{props.item}</p>
      <span className="CompletedItem_span">Completed {props.completeDate}</span>
    </>
  );
};

export default CompletedItem;
