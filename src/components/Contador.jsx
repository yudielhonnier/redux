import React from "react";
import { useDispatch, useSelector } from "react-redux";
// import {
//   reset,
//   restar,
//   restar5,
//   sumar,
//   sumar5,
// } from "../actions/contadorActions";

// all version
// const Contador = () => {
//   const { contador } = useSelector((state) => state.contador);
//   const dispatch = useDispatch();

//   return (
//     <div>
//       Contador Redux{" "}
//       <nav>
//         <button onClick={() => dispatch(sumar)}>+1</button>
//         <button onClick={() => dispatch(sumar5())}>+5</button>
//         <button onClick={() => dispatch(reset())}>0</button>
//         <button onClick={() => dispatch(restar())}>-1</button>
//         <button onClick={() => dispatch(restar5())}>-5</button>
//       </nav>
//       <h3>{contador}</h3>
//     </div>
//   );
// };
// export default Contador;

import {
  decrement,
  decrementBy as decrementBy,
  increment,
  incrementBy as incrementBy,
  reset,
} from "../store/slices/contador";

const Contador = () => {
  const { contador } = useSelector((state) => state.contador);
  const dispatch = useDispatch();

  return (
    <div>
      Contador Redux{" "}
      <nav>
        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(incrementBy(5))}>+5</button>
        <button onClick={() => dispatch(reset())}>0</button>
        <button onClick={() => dispatch(decrement())}>-1</button>
        <button onClick={() => dispatch(decrementBy(5))}>-5</button>
      </nav>
      <h3>{contador}</h3>
    </div>
  );
};

export default Contador;
