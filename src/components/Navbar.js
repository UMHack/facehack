import React from 'react'
import { Menu, Container } from 'semantic-ui-react'

export default class Navbar extends React.Component {
  render() {
    const { Link } = this.props
    return (
      <Menu
        inverted
        secondary
        pointing
        fixed="top"
        style={{ background: 'black' }}
      >
        <Container textAlign="center">
          <Menu.Item link>
            <Link activeClass="active" to="header" spy smooth duration={500}>
              Home
            </Link>
          </Menu.Item>
          <Menu.Item link>
            <Link activeClass="active" to="about" spy smooth duration={500}>
              About
            </Link>
          </Menu.Item>
          <Menu.Item link>
            <Link activeClass="active" to="venue" spy smooth duration={500}>
              Venue
            </Link>
          </Menu.Item>
          <Menu.Item link>
            <Link activeClass="active" to="faq" spy smooth duration={500}>
              FAQ
            </Link>
          </Menu.Item>
        </Container>
      </Menu>
    )
  }
}
