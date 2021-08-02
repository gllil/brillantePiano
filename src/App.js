import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import Tuition from "./pages/Tuition";

function App() {
  return (
    <Router>
      <Navigation />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/tuition" component={Tuition} />
        <Route exact path="/calendar" component={Calendar} />
        <Route exact path="/policy" component={Policy} />
        <Route exact path="/about" component={About} />
        <Route exact path="/faqs" component={Faq} />
      </Switch>
    </Router>
  );
}

export default App;
