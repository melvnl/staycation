import "assets/scss/style.scss"
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Homepage from 'pages/Homepage'
// import InputNumberExample from 'pages/Example'
import DetailPage from "pages/DetailPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={Homepage}></Route>
        <Route path="/properties/:id" component={DetailPage}></Route>
      </Router>
    </div>
  );
}

export default App;
