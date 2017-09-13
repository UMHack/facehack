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
import Particles from 'react-particles-js'
import params from './particlesjs-config.json'
import { any, func } from 'prop-types'
import background from '../image/header-min.jpg'

export default class PageHeader extends React.Component {
  state = {
    'form-name': 'subscribe',
    email: '',
    visible: {
      logo: false,
      details: false
    },
    disable: true
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
  validateEmail = email => {
    var re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    return re.test(email)
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
      .then(this.setState({ email: '', disable: true }))

  handleChange = (_, { value }) =>
    this.setState({ email: value, disable: !this.validateEmail(value) })

  handleOnScreen = (e, e_) => console.log(e, e_)

  render() {
    return (
      <Segment
        textAlign="center"
        vertical
        style={{ background: `url(${background})`, backgroundSize: 'cover' }}
      >
        <Particles
          params={params}
          style={{
            position: 'absolute',
            left: 0
          }}
        />
        <Container>
          <Grid
            container
            stackable
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
                <div>
                  <Image
                    src={this.props.logo}
                    size="medium"
                    alt="Logo of UMHack"
                    centered
                    verticalAlign="middle"
                  />
                  <Header inverted size="large" style={{ fontWeight: 100 }}>
                    17TH - 19TH NOVEMBER 2017
                  </Header>
                </div>
              </Transition>
            </Grid.Column>
            <Grid.Column>
              <Transition
                visible={this.state.visible.details}
                animation="fade left"
                duration="1000"
              >
                <div>
                  <Button
                    animated
                    color="green"
                    inverted
                    href="http://face2017.peatix.com"
                    target="_blank"
                    size="big"
                    style={{ margin: '1em' }}
                  >
                    <Button.Content visible>Register Now</Button.Content>
                    <Button.Content hidden>
                      <Icon name="id card outline" />
                    </Button.Content>
                  </Button>
                  <Button
                    animated
                    color="blue"
                    inverted
                    href="https://www.facebook.com/facehack.tech"
                    target="_blank"
                    size="big"
                    style={{ margin: '1em' }}
                  >
                    <Button.Content visible>Facebook Page</Button.Content>
                    <Button.Content hidden>
                      <Icon name="facebook" />
                    </Button.Content>
                  </Button>
                  <Divider horizontal inverted>
                    Organised by
                  </Divider>
                  <p style={{ color: 'white', margin: '3em 0' }}>
                    Department of Artificial Intelligence<br />
                    Faculty of Computer Science & IT<br />
                    University of Malaya<br />
                  </p>
                  <Divider horizontal inverted>
                    Newsletter
                  </Divider>
                  <Header size="tiny" textAlign="center" inverted>
                    Subscribe for latest updates!
                  </Header>
                  <Input
                    name="email"
                    type="email"
                    value={this.state.email}
                    fluid
                    action={
                      <Button
                        disabled={this.state.disable}
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
