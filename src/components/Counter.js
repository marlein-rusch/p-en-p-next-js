import React from "react";
import { connect } from "react-redux";
import { increment } from "../actions/fetchActions";

function Counter({ counter, increment }) {
  return (
    <div className="container py-3">
      <h1>{counter}</h1>
      <button onClick={increment}>INCREMENT</button>
    </div>
  );
}

const mapStateToProps = state => ({
  counter: state.dataFetchReducer.counter
});

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Counter);
