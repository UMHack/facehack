import React from 'react'
import { Segment, Header, Container, Grid, Image } from 'semantic-ui-react'
import about from '../about-min.jpg'
import text from '../facehack_text-min.png'

export default class About extends React.Component {
  render() {
    return (
      <Segment padded inverted basic attached style={{backgroundImage: `url(${about})`, backgroundSize: 'cover', textAlign: 'justify'}}>
        <Container text>
          <Header as="h2" textAlign="center" inverted>
            About Us
          </Header>
          <Grid stackable columns={2}>
            <Grid.Column>
              <p>
                FaceHack 2017 is the signature Artificial Intelligence hackathon in Malaysia, bringing 100 students and tech enthusiasts together from various local universities to learn about the current state of the art in Face Technology, one of the prominent areas in Artificial Intelligence, and its future by competing in a 48-hour hackathon format.
              </p>
              <p id="venue">
                Organized by the Department of Artificial Intelligence, Faculty of Computer Science & IT from the University of Malaya, FaceHack provides a platform for participants to build and validate innovative ideas and take it them to the next level: Execution.
             </p>
            </Grid.Column>
            <Grid.Column>
              <p>
                As the first of many hackathons to come, FaceHack 2017 aims to synergize the growing power of AI to students and tech enthusiasts as well as push their knowledge and technical abilities to the limits.
              </p>
              <Image centered src={text}/>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    )
  }
}
