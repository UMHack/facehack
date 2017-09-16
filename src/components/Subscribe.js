import React from 'react'
import { Modal, Header, Button, Icon } from 'semantic-ui-react'
import { bool, func } from 'prop-types'

export default class Subscribe extends React.Component {
  static propTypes = {
    show: bool,
    toggle: func
  }
  
  render() {
    const { show, toggle } = this.props
    return <Modal basic size="small" onClose={toggle} open={show} closeIcon>
      <Header>Thanks for subscribing!</Header>
      <Modal.Content>
        <p>You will now receive updates from us once in a while. Only important stuff. Promise.</p>
      </Modal.Content>
      <Modal.Actions>
        <Button basic inverted onClick={toggle}>
          <Icon name="checkmark" /> OK
        </Button>
      </Modal.Actions>
    </Modal>
  }
}