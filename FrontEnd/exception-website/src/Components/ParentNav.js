import React, { Component } from "react";
import { Link, Outlet } from "react-router-dom";
import { Menu, Button, Segment, Image } from "semantic-ui-react";
import ExceptionalLogo from "../Asserts/Logo.png";

export default class ParentNav extends Component {
  state = { activeItem: "home" };

  handleItemClick = (e, { icon }) => this.setState({ activeItem: icon });

  render() {
    const { activeItem } = this.state;
    return (
      <>
        <Segment secondary>
          <>
            <Menu secondary style={{ height: "80px" }}>
              <Link to="/blogs"  >
                <Menu.Item
                  icon="bars"
                  active={activeItem === "bars"}
                  onClick={this.handleItemClick}
                ></Menu.Item>
              </Link>

              <Link to="/contact">
                <Menu.Item
                  icon="search"
                  active={activeItem === "search"}
                  onClick={this.handleItemClick}
                />
              </Link>
              <Menu.Item
                active={activeItem === "button"}
                onClick={this.handleItemClick}
              >
                <Button color="orange" compact size="mini">
                  <Link
                    to="/"
                    style={{ color: "white", textDecoration: "none" }}
                  >
                    Home
                  </Link>
                </Button>
              </Menu.Item>
              <Menu.Menu position="right">
                <Menu.Item />
                <Image
                  src={ExceptionalLogo}
                  alt="ExceptionalLogo"
                  width="300px"
                  height="300px"
                  style={{ marginTop: "-120px" }}
                />
              </Menu.Menu>
            </Menu>
          </>
        </Segment>
        <Outlet />
      </>
    );
  }
}
