import React from 'react';
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';
import store from './store'
import Home from './pages/Home';

function App() {
  return (
    <Provider store={store}>
        <Router>
            <div>
                <nav>
                <ul>
                    <li>
                    <Link to="/">Home</Link>
                    </li>
                </ul>
                </nav>

                <Route path="/" exact component={Home} />
            </div>
        </Router>
    </Provider>
  );
}

export default App;
