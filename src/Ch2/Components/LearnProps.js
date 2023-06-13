function LearnProps({ title, bgCol = "lightblue", children }) {
  //using the destructuring otherwie you can write (props) and to access it props.item
  // bgCol is set to default value which is used if no prop is sent by the parent
  console.log(title);
  console.log(title);
  return (
    <>
      <h1 style={{ backgroundColor: bgCol }}>
        This is the component to {title} {children}
      </h1>
    </>
  );
}

//or
/*
function LearnProps(props) {
  console.log(props.title);
  console.log(props.bgCol);
  return (
    <>
      <h1 style={{ backgroundColor: props.bgCol }}>
        This is the component to {props.title}
        {props.children}
      </h1>
    </>
  );
}
*/
export default LearnProps;
