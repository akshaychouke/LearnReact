import { useRef, useState } from "react";

function Counter() {
  console.log("rerendering counter");
  const [number, setNumber] = useState(0);
  let num = useRef(0); // to update it even if the component rerenders it just keep track of the num does not rerender the component
  const handleClick = (e) => {
    e.stopPropagation();
    // setNumber((number) => number + 1);
    // setNumber((number) => number + 1);
    // setNumber((number) => number + 1);
    num.current++;
    console.log(num.current);
  };
  return (
    <>
      <h1 style={{ color: "white" }}>
        Number is {number} , num is {num.current}
      </h1>
      <button onClick={handleClick}>update number</button>
    </>
  );
}

export default Counter;
