import "./App.css";
import Navigation from "./components/navigation";
import Header from "./components/header";
import Main from "./components/main";
import Footer from "./components/footer";
import Post from "./components/post";
import { Route, Switch } from "react-router-dom";
import About from "./components/about";
import Contact from "./components/contact";
import Error from "./components/error";

function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <Switch>
      <Route exact path="/" component={Main} />
      <Route exact path="/post" component={Post} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/error" component={Error} />
      </Switch>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
