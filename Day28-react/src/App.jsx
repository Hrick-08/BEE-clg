function App() {
  let name = "Hrick";
  let islogged = true;
  return (
    <>
      <h1>Hello World!</h1>
      <h2>My name is {name}</h2>
      {islogged ? <h3>Active</h3> : <h3>Offline</h3>}
    </>
  );
}

export default App;