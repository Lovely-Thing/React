import {BrowserRouter, Switch, Route} from 'react-router-dom' 
import './App.css'
import './assets/css/style.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Portfolio from './pages/Portfolio'
import Projects from './pages/Projects'
import Home from './pages/Home'

function App() {

  return (
    <>
    
      <BrowserRouter>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} /> 
          <Route exact path="/projects" component={Projects} /> 
          <Route exact path="/portfolio" component={Portfolio} /> 
        </Switch>
        <Footer />
      </BrowserRouter>
    
    </>
  )
}

export default App
