import React from 'react';
import PropTypes from 'prop-types';
import { Link, withRouter } from 'react-router-dom';
import { Dropdown, Menu, Icon } from 'semantic-ui-react';
import styled from 'styled-components';

import User from './User';
import Tasks from './Tasks';
import Language from './Language';

const Logo = styled.span`
  font-size: 1.2em;
  font-weight: bold;
`;

const NavBar = ({ location }) =>
  <Menu fixed="top">
    <Menu.Item as={Link} to="/">
      <Logo>
        Lingv<Icon name="talk outline" />doc
      </Logo>
    </Menu.Item>

    <Dropdown item text="Dashboard">
      <Dropdown.Menu>
        <Dropdown.Item>English</Dropdown.Item>
        <Dropdown.Item>Russian</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Dropdown item text="Maps">
      <Dropdown.Menu>
        <Dropdown.Item as={Link} to="/map_search">Search</Dropdown.Item>
        <Dropdown.Item as={Link} to="/sociolinguistics">Sociolinguistics</Dropdown.Item>
      </Dropdown.Menu>
    </Dropdown>

    <Menu.Item as={Link} to="/desktop" active={location.pathname === '/desktop'} >
      Desktop software
    </Menu.Item>

    <Menu.Item as={Link} to="/info" active={location.pathname === '/info'} >
      Info
    </Menu.Item>

    <Menu.Menu position="right">
      <User />
      <Tasks />
      <Language />
    </Menu.Menu>
  </Menu>;

NavBar.propTypes = {
  location: PropTypes.shape({
    pathname: PropTypes.string,
  }).isRequired,
};

export default withRouter(NavBar);