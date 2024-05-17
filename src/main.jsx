import React from 'react'
// import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
// import Poetry from './views/blogPoetry/index.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <Router>
      <Switch>
        <Route exact path='/' Component={App} />
        <Route path='/' Component={Poetry} />
      </Switch>
    </Router> */}
    <App />
  </React.StrictMode>,
)
