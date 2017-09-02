import React from 'react'
import {
  Segment,
  Header,
  Image,
  Input,
  Button,
  Icon,
  Container,
  Divider
} from 'semantic-ui-react'
import { any } from 'prop-types'
import background from '../header-min.jpg'
export default class PageHeader extends React.Component {
  static propTypes = {
    logo: any
  }

  render() {
    return (
      <Segment id="header"  textAlign="center" attached padded basic style={{backgroundImage: `url(${background})`, backgroundSize: 'cover'}}>
        <Container text>
          <Divider hidden />
          <Image src={this.props.logo} size="medium" alt="Logo of UMHack" centered />
          <Header as="h1" inverted>
            <Header.Subheader>
              FCSIT, University of Malaya | 17th – 19th November 2017
            </Header.Subheader>
          </Header>
          <Divider hidden />
          <Header size="tiny" textAlign="center" inverted>
            Subscribe for latest updates!
          </Header>
          <Input
            id="about"
            fluid
            action={
              <Button animated color="blue" inverted>
                <Button.Content visible>Subscribe</Button.Content>
                <Button.Content hidden>
                  <Icon name="feed" />
                </Button.Content>
              </Button>
            }
            icon="mail"
            iconPosition="left"
            placeholder="Your email address..."
            inverted
          />
        </Container>
      </Segment>
    )
  }
}
