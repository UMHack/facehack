import React, { Component } from 'react'
import { Link, Element, Events, scrollSpy } from 'react-scroll'
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

  componentDidMount() {
    Events.scrollEvent.register('begin')
    Events.scrollEvent.register('end')
    scrollSpy.update()
  }

  componentWillUnmount() {
    Events.scrollEvent.remove('begin')
    Events.scrollEvent.remove('end')
  }

  toggle = () => this.setState({ subscribe: !this.state.subscribe })

  render() {
    return (
      <div>
        <Navbar Link={Link} />
        <Element name="header" className="element">
          <Header logo={logo} toggle={this.toggle} />
        </Element>
        <Element name="about" className="element">
          <About />
        </Element>
        <Element name="venue" className="element">
          <Venue />
        </Element>
        <Element name="faq" className="element">
          <FAQ />
        </Element>
        <Footer logo={logo} />
        <Subscribe show={this.state.subscribe} toggle={this.toggle} />
      </div>
    )
  }
}

export default App
