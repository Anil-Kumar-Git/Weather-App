import React, { useState } from "react";
import { Grid, Input, Menu, Button, Icon, Divider } from "semantic-ui-react";
import { Link } from "react-router-dom";

const Header = () => {
  const [display, setDisplay] = useState("none");
  const url=window.location.href;
  console.log(url)
  return (
    <div>
      <Grid padded className="tablet computer only">
        <Menu borderless inverted fluid fixed="top">
           <Link to="/">
            <Menu.Item header as="Link">
              Project name
            </Menu.Item>
            </Link>
          <Menu.Menu position="right">
            <Menu.Item>
              <Input placeholder="Search..." size="small" />
            </Menu.Item>
            <Link to="/weather">
              <Menu.Item as="Link">Weather</Menu.Item>
            </Link>
          </Menu.Menu>
        </Menu>
      </Grid>
      <Grid padded className="mobile only">
        <Menu borderless inverted fluid fixed="top">
          <Menu.Item header as="a">
            Project Name
          </Menu.Item>
          <Menu.Menu position="right">
            <Menu.Item>
              <Button
                basic
                inverted
                icon
                toggle
                onClick={()=>{display == "none" ? setDisplay("flex") : setDisplay("none");}}
              >
                <Icon name="content" />
              </Button>
            </Menu.Item>
          </Menu.Menu>
          <Menu borderless fluid inverted vertical style={{ display: display }}>
            <Menu.Item as="a">Dashboard</Menu.Item>
            <Menu.Item as="a">Settings</Menu.Item>
            <Menu.Item as="a">Profile</Menu.Item>
            <Menu.Item as="a">Help</Menu.Item>
            <Divider fitted />
            <Menu.Item>
              <Input placeholder="Search..." size="small" />
            </Menu.Item>
          </Menu>
        </Menu>
      </Grid>
    </div>
  );
};

export default Header;
