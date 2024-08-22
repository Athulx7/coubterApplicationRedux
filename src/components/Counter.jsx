import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, reset } from "../redux/counterSlice";

function Counter() {
  //counoments can access the state by useselector hook

  const counterValue = useSelector((state) => state.counter.value);

  //useDispatch() is aa hook used to call a method in action to uodate the state

  const [range, sestRange] = useState("");

  const dispatch = useDispatch();
  return (
    <div>
      <div className="d-flex flex-column align-items-center justify-content-center w-100 mt-3">
        <h2 style={{ fontSize: "85px", color: "black" }}>{counterValue}</h2>
        <div className="mt-5">
          <button
            className="btn btn-warning p-3"
            onClick={() => dispatch(decrement(Number(range)))}
          >
            DECREMENT
          </button>
          <button
            className="btn btn-success p-3 ms-3 me-3"
            onClick={() => dispatch(increment(Number(range)))}
          >
            INCREMENT
          </button>
          <button
            className="btn btn-danger p-3"
            onClick={() => dispatch(reset())}
            style={{ width: "120px" }}
          >
            RESET
          </button>
        </div>
      </div>

      <div>
        <input
          type="text"
          className="form-control mt-3 w-100"
          placeholder="enter the range" style={{borderColor:'blue'}}
          onChange={(e) =>sestRange(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Counter;
