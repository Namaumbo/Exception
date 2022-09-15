import React, { Component } from "react";
import {Menu, Button, Segment,Image } from "semantic-ui-react";
import ExceptionalLogo from "../Asserts/Logo.png";

export default class MenuExampleSecondary extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { icon }) => this.setState({ activeItem: icon });

  render() {
    const { activeItem } = this.state;

    return (
      <>
      <div>
      <Segment secondary >
        <Menu secondary  style={{height:"80px"}}>
          <Menu.Item
            icon="bars"
            active={activeItem === "bars"}
            onClick={this.handleItemClick}
          ></Menu.Item>
          <Menu.Item
            icon="search"
            active={activeItem === "search"}
            onClick={this.handleItemClick}
          />
          <Menu.Item
            active={activeItem === "button"}
            onClick={this.handleItemClick}
          >
            <Button color="orange" compact size="mini">
              HOME
            </Button>
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item />
            <Image src={ExceptionalLogo} alt="ExceptionalLogo" width="300px" height="300px" style={{marginTop:"-120px"}} />
          </Menu.Menu>
        </Menu>
      </Segment>
      </div>
      
      </>
      
    );
  }
}


