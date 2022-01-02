import React from "react";
import "./Summery.css";

const Summery = (props) => {
  const salarySet = props.salarySet;
  let totalSalary = 0;
  for (let i = 0; i < salarySet.length; i++) {
    const element = salarySet[i];
    totalSalary = totalSalary + element;
  }

  return (
    <div className="summery-container">
      <h1>Summery</h1>
      <h3>
        added friends: <span>{salarySet.length}</span>{" "}
      </h3>
      <h3>
        total salary: <span> $ {totalSalary}</span>{" "}
      </h3>
    </div>
  );
};

export default Summery;
