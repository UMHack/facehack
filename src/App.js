import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Venue from './components/Venue'
// import Sponsor from './components/Sponsor'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import logo from './facehack_logo-min.png'

class App extends Component {
  render() {
    return (
      <Container fluid>
          <Navbar/>
          <Header logo={logo}/>
          <About />
          <Venue />
          <FAQ />
          <Footer logo={logo}/>
      </Container>
    )
  }
}

export default App
