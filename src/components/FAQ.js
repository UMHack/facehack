import React from 'react'
import { Segment, Header, Container, Grid } from 'semantic-ui-react'

export default class FAQ extends React.Component {
  render() {
    return (
      <Segment basic padded attached>
        <Container text textAlign="justified">
          <Header as="h2" textAlign="center" color="teal">
            Questions?
            <Header.Subheader>
              Get{"'"}em answers here.
            </Header.Subheader>
          </Header>
          <Grid stackable>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Header size="small" color="green">
                  Who can participate in FaceHack 2017?
                </Header>
                <p>
                  Don’t worry, we do not discriminate. Even if you have never had any experience in hackathons or are an entry-level coder, FaceHack 2017 welcomes you! The only things participants need is a head fresh full of ideas, and an empty stomach to fill up on all the food and drinks provided.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Header size="small" color="green">
                  What are the rules for forming a team?
                </Header>
                <p>
                  A team can consist of any students from any universities in Malaysia. The minimum number of teammates is 3, and each team are not allowed to have more than 5 members.
                </p>
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={2}>
              <Grid.Column>
                <Header size="small" color="green">
                  Why is FaceHack 2017 being organized?
                </Header>
                <p>
                  FaceHack​ ​aims to bring the growing power of AI to students and tech enthusiasts by promoting the latest tools and technologies for AI development, while boosting the academic and industrial AI mentorship. FaceHack will be the measure to raise students’ standards and introduce them to new possibilities that AI has to offer.
                </p>
              </Grid.Column>
              <Grid.Column>
                <Header size="small" color="green">
                  How long will this hackathon take?
                </Header>
                <p>
                  It will be a 48-hour competitive hackathon, starting at 7.00PM on Friday, 17th of November, 2017, and ending at 4.00PM on Sunday, 19th of November, 2017.
                </p>
              </Grid.Column>
            </Grid.Row>
          </Grid>
          <Header size="tiny" textAlign="center">
            Did we miss any questions?
            <Header.Subheader>
              E-mail us at
              {' '}
              <a href="mailto:facehack.um@gmail.com">facehack.um@gmail.com</a>
              {' '}
              to get more info.
            </Header.Subheader>
          </Header>
        </Container>
      </Segment>
    )
  }
}
