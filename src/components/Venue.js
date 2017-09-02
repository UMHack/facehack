import React from 'react'
import { Segment, Header, Container, Grid, Image } from 'semantic-ui-react'
import aia from '../aia-min.jpg'
import venue from '../venue-min.jpeg'

export default class Venue extends React.Component {
  render() {
    return (
      <Segment basic attached padded inverted style={{backgroundImage: `url(${venue})`, backgroundSize: 'cover'}}>
        <Container text textAlign="justified">
          <Header as="h2" textAlign="center" inverted>Venue</Header>
          <Grid stackable columns={2}>
            <Grid.Column>
              <Segment  color="red">
                <Image shape="rounded" src={aia}/>
                <Header>
                  Menara AIA
                  <Header.Subheader>
                    99 Jalan Ampang,<br />
                    50450 Kuala Lumpur,<br />
                    Wilayah Persekutuan Kuala Lumpur,<br />
                    Malaysia.
                  </Header.Subheader>
                </Header>
              </Segment>
            </Grid.Column>
            <Grid.Column>
              <p>
                  This year, FaceHack will be organized at Menara AIA, in the heart of modern Kuala Lumpur, proudly sponsored to us by Nettium Sdn. Bhd.
              </p>
              <p>
                  The building is located on Jalan Ampang, next to SMK Convent Bukit Nanas and the nearest LRT station to Menara AIA is the Masjid Jamek LRT Station (KJ 13), which is then a 10-minute walk from Menara AIA.
              </p>
              <p>
                  Alternatively, you can ride on the free Go-KL City Bus service (Blue Route, Medan MARA – Bukit Bintang) and stop at Menara AIA.
              </p>
              <p id="faq">
                  And since you are more than likely a tech-savvy person, if all else fails, you can always count on Google Maps.
              </p>
            </Grid.Column>
          </Grid>
        </Container>
      </Segment>
    )
  }
}
