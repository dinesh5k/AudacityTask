import React from "react";
import { connect } from "react-redux";
import { addReaction } from "../actions/index";

const AddReactionToGrid = ({ dispatch }) => {
  let description, date, severity;

  return (
    <div className="reactions-grid">
      <form
        onSubmit={e => {
          e.preventDefault();
          if (!description.value.trim() || !date.value.trim()) {
            return;
          }
          dispatch(addReaction(description.value, date.value, severity.value));
          description.value = "";
          date.value = "";
          severity.value = 1;
        }}
      >
        <label>Description: </label>
        <input
          type="text"
          name="description"
          ref={node => (description = node)}
        />

        <label>Date: </label>

        <input type="date" name="date" ref={node => (date = node)} />

        <label>Severity</label>

        <select name="severity" ref={node => (severity = node)}>
          <option value="1">1</option>
          <option value="2">2</option>
          <option value="3">3</option>
          <option value="4">4</option>
          <option value="5">5</option>
          <option value="6">6</option>
          <option value="7">7</option>
          <option value="8">8</option>
          <option value="9">9</option>
          <option value="10">10</option>
        </select>

        <button type="submit">Add Reaction</button>
      </form>
    </div>
  );
};

export default connect()(AddReactionToGrid);
