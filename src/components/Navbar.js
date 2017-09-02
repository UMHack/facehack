import React from 'react'
import { Menu, Container } from 'semantic-ui-react'

export default class Navbar extends React.Component {
  render() {
    return (
      <Menu secondary pointing fixed="top" style={{background: 'white'}}>
        <Container textAlign="center">
          <Menu.Item name="Home" href="#header" />
          <Menu.Item name="About" href="#about" />
          <Menu.Item name="Venue" href="#venue" />
          <Menu.Item name="FAQ" href="#faq" />
        </Container>
      </Menu>
    )
  }
}
