import "assets/scss/style.scss"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from 'pages/Homepage'
import InputNumberExample from 'pages/Example'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={InputNumberExample}></Route>
      </Router>
    </div>
  );
}

export default App;
