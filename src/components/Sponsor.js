import React from 'react'
import { Segment, Image, Container, Grid } from 'semantic-ui-react'
import entrypass from '../image/entrypass_logo-min.png'
import glueck from '../image/glueck-logo-min.png'
import nettium from '../image/logo-min.png'
import silterra from '../image/silterra_tagline-min.png'
import vitrox from '../image/ViTrox_Logo-min.png'
import strateq from '../image/strateq-logo-min.png'

export default class Sponsor extends React.Component {
  render() {
    return (
      <Segment basic padded>
        <Container text textAlign="justified">
          <Grid verticalAlign="middle" style={{ margin: '3em 0 0 0' }}>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image
                  src={entrypass}
                  size="medium"
                  alt="Logo of Entrypass"
                  centered
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={vitrox}
                  size="medium"
                  alt="Logo of Vitrox"
                  centered
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={glueck}
                  size="medium"
                  alt="Logo of Glueck Technologies"
                  centered
                />
              </Grid.Column>
            </Grid.Row>
            <Grid.Row columns={3}>
              <Grid.Column>
                <Image
                  src={silterra}
                  size="medium"
                  alt="Logo of Silterra"
                  centered
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={nettium}
                  size="medium"
                  alt="Logo of Nettium"
                  centered
                />
              </Grid.Column>
              <Grid.Column>
                <Image
                  src={strateq}
                  size="medium"
                  alt="Logo of Strateq"
                  centered
                />
              </Grid.Column>
            </Grid.Row>
          </Grid>
        </Container>
      </Segment>
    )
  }
}
