import React from 'react'
import {
  Segment,
  Header,
  Image,
  Input,
  Button,
  Icon,
  Container,
  Divider,
  Grid,
  Transition
} from 'semantic-ui-react'
import { any, func } from 'prop-types'
import background from '../image/header-min.jpg'

export default class PageHeader extends React.Component {
  state = {
    'form-name': 'subscribe',
    email: '',
    visible: {
      logo: false,
      details: false
    }
  }

  static propTypes = {
    logo: any,
    toggle: func
  }

  componentDidMount() {
    setTimeout(
      () =>
        this.setState({ visible: { ...this.state.visible, logo: true } }, () =>
          setTimeout(
            () =>
              this.setState({
                visible: { ...this.state.visible, details: true }
              }),
            200
          )
        ),
      500
    )
  }

  handleClick = () =>
    fetch('/', {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: Object.keys(this.state)
        .map(
          key =>
            encodeURIComponent(key) + '=' + encodeURIComponent(this.state[key])
        )
        .join('&')
    })
      .then(this.props.toggle)
      .then(this.setState({ email: '' }))

  handleChange = (_, { value }) => this.setState({ email: value })

  handleOnScreen = (e, e_) => console.log(e, e_)

  render() {
    return (
      <Segment
        id="header"
        textAlign="center"
        vertical
        style={{
          backgroundImage: `url(${background})`,
          backgroundSize: 'cover'
        }}
      >
        <Container>
          <Grid
            container
            columns={2}
            verticalAlign="middle"
            style={{ padding: '3em 0', minHeight: '100vh' }}
          >
            <Grid.Column>
              <Transition
                visible={this.state.visible.logo}
                animation="fade right"
                duration="1000"
              >
                <Image
                  src={this.props.logo}
                  size="medium"
                  alt="Logo of UMHack"
                  centered
                  verticalAlign="middle"
                />
              </Transition>
            </Grid.Column>
            <Grid.Column>
              <Transition
                visible={this.state.visible.details}
                animation="fade left"
                duration="1000"
              >
                <div>
                  <Header as="h2" inverted>
                    Open for registration on September 12th
                  </Header>
                  <Divider horizontal inverted>
                    Organised by
                  </Divider>
                  <p style={{ color: 'white', margin: '3em 0' }}>
                    Department of Artificial Intelligence<br />
                    Faculty of Computer Science & IT<br />
                    University of Malaya<br />
                    17th – 19th November 2017
                  </p>
                  <Divider horizontal inverted>
                    Newsletter
                  </Divider>
                  <Header size="tiny" textAlign="center" inverted>
                    Subscribe for latest updates!
                  </Header>
                  <Input
                    id="about"
                    name="email"
                    type="email"
                    value={this.state.email}
                    fluid
                    action={
                      <Button
                        animated
                        color="blue"
                        inverted
                        type="submits"
                        onClick={this.handleClick}
                      >
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
                    onChange={this.handleChange}
                  />
                </div>
              </Transition>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    )
  }
}
