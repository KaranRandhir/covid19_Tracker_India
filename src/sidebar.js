import {useState} from "react"
import React from 'react'
import { Header, Icon, Image, Menu, Segment, Sidebar } from 'semantic-ui-react'

const SidebarExampleDimmed = () => {
  const [visible, setVisible] = useState(false)

  return (
    
    
    <Sidebar.Pushable as={Segment}>
      <Sidebar
        as={Menu}
        animation='overlay'
        icon='labeled'
        inverted
        onHide={() => setVisible(false)}
        vertical
        visible={visible}
        width='thin'
      >
        <Menu.Item as='a'>
          <Icon name='home' />
          Home
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='gamepad' />
          Games
        </Menu.Item>
        <Menu.Item as='a'>
          <Icon name='camera' />
          Channels
        </Menu.Item>
      </Sidebar>

      <Sidebar.Pusher dimmed={visible}>
        <Segment basic>
          <Header as='h3'>Application Content</Header>
          <Image src='https://react.semantic-ui.com/images/wireframe/paragraph.png' />
        </Segment>
      </Sidebar.Pusher>
    </Sidebar.Pushable>
  )
}

export default SidebarExampleDimmed