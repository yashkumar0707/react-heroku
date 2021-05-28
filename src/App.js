
import './App.css';

function App() {
  function buttonClicked(){
    console.log('hi')
    fetch('https://jsonplaceholder.typicode.com/todos/1')
  .then(response => response.json())
  .then(json => console.log(json))
  const requestOptions = {
    method: 'POST',
    headers: { 'Accept': 'application/vnd.heroku+json; version=3', 'Content-Type': 'application/json' },
    
};
  fetch('https://id.heroku.com/oauth/authorize?client_id={cb3583e5-35de-4913-b2aa-108ac7ec62bf}&response_type=code&scope={global}&state={anti-forgery-token}')
  .then(response => response.json())
  .then(json => console.log(json))
  }
  return (
    <div className="App">
     <button onClick={buttonClicked}></button>
     yash
    </div>
  );
}

export default App;
