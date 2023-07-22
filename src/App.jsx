import Header from "./Components/Header/Header";
import Hero from "./components/Hero/Hero";
import Experties from "./components/Experties/Experties";
import Works from "./components/Works/Works";
import Portfolio from "./components/Portfolio/Portfolio";
import People from "./components/People/People";
import Footer from "./components/Footer/Footer";
import css from './styles/app.module.scss'
const App = () => {
  return <div className={'bg-primary ${css.container}'}>
      <Header/>
      <Hero/>
      <Experties/>
      <Works/>
      <Portfolio/>
      <People/>
      <Footer/>
  </div>
};

export default App;