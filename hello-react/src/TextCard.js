import React from "react";
import "./TaskCard.css";

export default function TextCard(props) {
  const { title, type, dueDate, completedAtDate, assigneeName } = props;
  return (
    <div className="TaskItem my-2">
      <h2 className="text-xl font-bold">{title}</h2>
      <p>
        {type === "panding" ? "Due On:" : "Completed On:"}:{" "}
        {type === "panding" ? dueDate : completedAtDate}
      </p>
      <p>Assignee: {assigneeName}</p>
    </div>
  );
}
