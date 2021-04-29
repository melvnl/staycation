import "assets/scss/style.scss"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from 'pages/Homepage'

function App() {
  return (
    <div className="App">
      <Router>
        <Route path="/" component={Homepage}></Route>
      </Router>
    </div>
  );
}

export default App;
