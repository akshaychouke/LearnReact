import { useState } from "react";

function Counter() {
  console.log("rerendering counter");
  const [number, setNumber] = useState(0);

  const handleClick = (e) => {
    e.stopPropagation();

    // setNumber(number+1);

    // or the follwing will not update the state simultaniousuly means it will rerender the component only for one time in each timeout
    // setTimeout(()=>{
    //     setNumber(number+1);
    // },3000);

    //or the following will update state simultaniousuly means it will rerender the component how many time the components is clicked in the partculer timeout
    setTimeout(() => {
      setNumber((number) => number + 1);
    }, 3000);

    console.log(number);
  };
  return (
    <>
      <h1 style={{ color: "white" }}>{number}</h1>
      <button onClick={handleClick}>update number</button>
    </>
  );
}

export default Counter;
