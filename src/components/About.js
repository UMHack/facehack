import React from 'react'
import {
  Segment,
  Container,
  Grid,
  Image,
  Transition,
  Visibility
} from 'semantic-ui-react'
import about from '../image/about-min.jpg'
import text from '../image/facehack_text-min.png'

export default class About extends React.Component {
  state = {
    about: false,
    logo: false
  }

  handleVisible = () =>
    setTimeout(
      () =>
        this.setState({ about: true }, () =>
          setTimeout(
            () =>
              this.setState({
                logo: true
              }),
            200
          )
        ),
      200
    )

  render() {
    return (
      <Visibility onBottomVisible={this.handleVisible}>
        <Segment
          inverted
          vertical
          style={{
            backgroundImage: `url(${about})`,
            backgroundSize: 'cover'
          }}
        >
          <Container text textAlign="justified">
            <Grid
              container
              stackable
              columns={2}
              verticalAlign="middle"
              style={{ minHeight: '100vh' }}
            >
              <Grid.Column>
                <Transition
                  visible={this.state.about}
                  animation="fade down"
                  duration="1000"
                >
                  <div>
                    <p>
                      FaceHack 2017 is the signature Artificial Intelligence
                      hackathon in Malaysia, bringing 100 students and tech
                      enthusiasts together from various local universities to
                      learn about the current state of the art in Face
                      Technology, one of the prominent areas in Artificial
                      Intelligence, and its future by competing in a 48-hour
                      hackathon format.
                    </p>
                    <p>
                      Organized by the Department of Artificial Intelligence,
                      Faculty of Computer Science & IT from the University of
                      Malaya, FaceHack provides a platform for participants to
                      build and validate innovative ideas and take it them to
                      the next level: Execution.
                    </p>
                    <p>
                      As the first of many hackathons to come, FaceHack 2017
                      aims to synergize the growing power of AI to students and
                      tech enthusiasts as well as push their knowledge and
                      technical abilities to the limits.
                    </p>
                  </div>
                </Transition>
              </Grid.Column>
              <Grid.Column>
                <Transition
                  visible={this.state.logo}
                  animation="fade down"
                  duration="1000"
                >
                  <Image centered size="medium" src={text} />
                </Transition>
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
      </Visibility>
    )
  }
}
