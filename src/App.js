import "./App.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Information from "./pages/Home";
import Courses from "./pages/Courses";
import Discuss from "./pages/Discuss";
import Chatbot from "./pages/Chatbot";
import Video from "./pages/video";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Switch>
          <Route path="/" exact component={Information} />
          <Route path="/courses" exact component={Courses} />
          <Route path="/discuss" exact component={Discuss} />
          <Route path="/chatbot" exact component={Chatbot} />
          <Route path="/video" exact component={Video} />
        </Switch>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
