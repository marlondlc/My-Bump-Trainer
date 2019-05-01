import React, { Component } from 'react';

import { Nav } from 'react-bootstrap'



class NavFooter extends Component{

    render(){
        return(
            <Nav fill variant="tabs" defaultActiveKey="/home">
            <Nav.Item>
              <Nav.Link href="/home">Day</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-1">Week</Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link eventKey="link-2">Month</Nav.Link>
            </Nav.Item>
          </Nav>
        )
      }
}

export default NavFooter;