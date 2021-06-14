
import './App.css';

import Home from './Home';
import Project from './Project'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {

  return (
    <Router>
      <div className="App">
        <Switch>
          <Route exact path='/'><Home /></Route>
          <Route path='/project/:id'><Project/></Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;





//   fetch('https://jsonplaceholder.typicode.com/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))
//   const requestOptions = {
//     // method: 'POST',
//     mode:'no-cors',
//     headers: { 'Accept': 'application/vnd.heroku+json; version=3', 'Content-Type': 'application/json' },

// };
//   fetch('https://id.heroku.com/oauth/authorize', {
//     client_id:'cb3583e5-35de-4913-b2aa-108ac7ec62bf',
//     response_type:'code',
//     scope:'global',
//     headers:{
//     Accept: 'application/vnd.heroku+json; version=3' }})
//   .then(response => response.json())
  // fetch('https://api.heroku.com/schema', {
  //   client_id:'cb3583e5-35de-4913-b2aa-108ac7ec62bf',
  //   response_type:'code',
  //   scope:'global',
  //   Accept: 'application/vnd.heroku+json; version=3' })
  // .then(response => response.json())
  // fetch('https://api.heroku.com/schema', {
  //   headers:{
  //   Accept: 'application/vnd.heroku+json; version=3' }})
  // .then(response => response.json())
  // .then(json=>console.log(json))
  // fetch('https://api.heroku.com/oauth/tokens', {
  //   headers:{
  //   Accept: 'application/vnd.heroku+json; version=3' }})
  // .then(response => response.json())
  // .then(json=>console.log(json))
// const Heroku = require('heroku-client')
// const heroku = new Heroku({ token: 'b733491e-7845-497d-80a6-195f967c41c9' })
// fetch('https://id.heroku.com/oauth/authorize?client_id=cb3583e5-35de-4913-b2aa-108ac7ec62bf&response_type=code&scope=global&&Accept=application/vnd.heroku+json; version=3').then(apps => {
//   // do something with apps
//   console.log(apps)
// })