function Profile1() {
  return (
    <>
      <img src="https://i.imgur.com/MK3eW3As.jpg" alt="Katherine Johnson" style={{height:"300px"}}/>
    </>
  );
}

function Background() {
  return (
    <>
    <br></br>
      <img style={{maxHeight:"1000px"}} src="https://images.unsplash.com/photo-1686644472082-75dd48820a5d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80"/>
    </>
  );
}

function Gallary() {
  return (
    <>
    <h1>This is the Gallary Component following are images of it</h1>
      <Profile1 />
      <Background/>
    </>
  );
}

export default Gallary;
