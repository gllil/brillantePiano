import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Footer from "./components/Footer";
import Navigation from "./components/Navigation";
import About from "./pages/About";
import Calendar from "./pages/Calendar";
import Faq from "./pages/Faq";
import Home from "./pages/Home";
import Policy from "./pages/Policy";
import Tuition from "./pages/Tuition";
import Admin from "./pages/Admin";
import Login from "./pages/Login";
import Register from "./pages/Register";
import { AuthProvider } from "./auth/Auth";
import PrivateRoute from "./auth/PrivateRoute";
import NotFound from "./pages/NotFound";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Navigation />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/tuition" component={Tuition} />
          <Route exact path="/calendar" component={Calendar} />
          <Route exact path="/policy" component={Policy} />
          <Route exact path="/about" component={About} />
          <Route exact path="/faqs" component={Faq} />
          <PrivateRoute exact path="/admin" component={Admin} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
          <Route path="*" component={NotFound} />
        </Switch>
        <Footer />
      </Router>
    </AuthProvider>
  );
}

export default App;
