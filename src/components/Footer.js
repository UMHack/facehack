import React from 'react'
import { Segment, Image } from 'semantic-ui-react'
import { any } from 'prop-types'
import um from '../image/um-min.png'
import fsktm from '../image/fsktm-min.jpg'

export default class Footer extends React.Component {
  static propTypes = {
    logo: any
  }

  render() {
    return (
      <Segment basic attached textAlign="right">
          <Image
            src={this.props.logo}
            size="tiny"
            alt="Logo of FaceHack 2017"
            inline
            spaced
            verticalAlign="middle"
          />
          <Image
            src={um}
            size="small"
            alt="Logo of University of Malaya"
            inline
            spaced
            verticalAlign="middle"
          />
          <Image
            src={fsktm}
            size="small"
            alt="Logo of Faculty of Computer Science and Information Technology"
            inline
            verticalAlign="middle"
          />
      </Segment>
    )
  }
}
