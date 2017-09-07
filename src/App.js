import React, { Component } from 'react'
import { Container } from 'semantic-ui-react'
import Navbar from './components/Navbar'
import Header from './components/Header'
import About from './components/About'
import Venue from './components/Venue'
// import Sponsor from './components/Sponsor'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Subscribe from './components/Subscribe'
import logo from './image/facehack_logo-min.png'

class App extends Component {
  state = { subscribe: false }

  toggle = () => this.setState({ subscribe: !this.state.subscribe })

  render() {
    return (
      <Container fluid>
          <Navbar/>
          <Header logo={logo} toggle={this.toggle}/>
          <About />
          <Venue />
          <FAQ />
          <Footer logo={logo}/>
          <Subscribe show={this.state.subscribe} toggle={this.toggle}/>
      </Container>
    )
  }
}

export default App
