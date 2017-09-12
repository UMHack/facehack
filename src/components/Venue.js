import React from 'react'
import {
  Segment,
  Header,
  Container,
  Grid,
  Image,
  Visibility,
  Transition
} from 'semantic-ui-react'
import aia from '../image/aia-min.jpg'
import venue from '../image/venue-min.jpeg'

export default class Venue extends React.Component {
  state = {
    card: false,
    info: false
  }

  handleVisible = () =>
    setTimeout(
      () =>
        this.setState({ info: true }, () =>
          setTimeout(
            () =>
              this.setState({
                card: true
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
          vertical
          inverted
          style={{
            backgroundImage: `url(${venue})`,
            backgroundSize: 'cover'
          }}
        >
          <Container text textAlign="justified">
            <Grid
              container
              stackable
              columns={2}
              verticalAlign="middle"
              style={{ minHeight: '100vh', padding: '3em 0' }}
            >
              <Grid.Column>
                <Transition
                  visible={this.state.card}
                  animation="fade up"
                  duration="1000"
                >
                  <Segment color="red">
                    <Image shape="rounded" src={aia} />
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
                </Transition>
              </Grid.Column>
              <Grid.Column>
                <Transition
                  visible={this.state.info}
                  animation="fade up"
                  duration="1000"
                >
                  <div>
                    <p>
                      This year, FaceHack will be organized at Menara AIA, in
                      the heart of modern Kuala Lumpur, proudly sponsored to us
                      by Nettium Sdn. Bhd.
                    </p>
                    <p>
                      The building is located on Jalan Ampang, next to SMK
                      Convent Bukit Nanas and the nearest LRT station to Menara
                      AIA is the Masjid Jamek LRT Station (KJ 13), which is then
                      a 10-minute walk from Menara AIA.
                    </p>
                    <p>
                      Alternatively, you can ride on the free Go-KL City Bus
                      service (Blue Route, Medan MARA – Bukit Bintang) and stop
                      at Menara AIA.
                    </p>
                    <p>
                      And since you are more than likely a tech-savvy person, if
                      all else fails, you can always count on Google Maps.
                    </p>
                  </div>
                </Transition>
              </Grid.Column>
            </Grid>
          </Container>
        </Segment>
      </Visibility>
    )
  }
}
