import React from 'react'
import { Segment, Header, Image, Container, Divider } from 'semantic-ui-react'
import logo from '../image/logo.svg'

export default class Sponsor extends React.Component {
  render() {
    return (
      <Segment basic padded>
        <Container text textAlign="justified">
          <Header as="h2" textAlign="center">
            Hosted by
          </Header>
          <Image src={logo} size="medium" alt="Logo of UMHack" centered />
          <Divider hidden />
          <Header as="h2" textAlign="center">
            Event Sponsors
          </Header>
          <Image src={logo} size="medium" alt="Logo of UMHack" centered />
        </Container>
      </Segment>
    )
  }
}
