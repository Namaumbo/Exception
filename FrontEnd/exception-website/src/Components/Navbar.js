import React, { Component } from "react";
import { Input, Menu, Image, Icon, Button, Segment } from "semantic-ui-react";
import ExceptionalLogo from "../Asserts/Logo.png";

export default class MenuExampleSecondary extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { icon }) => this.setState({ activeItem: icon });

  render() {
    const { activeItem } = this.state;

    return (
      <Segment secondary >
        <Menu secondary>
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
            {/* <Image src={ExceptionalLogo} alt="ExceptionalLogo" width="250px" /> */}
          </Menu.Menu>
        </Menu>
      </Segment>
    );
  }
}

{
  /*
{/* 
*/
}
