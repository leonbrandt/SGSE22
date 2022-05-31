import React, { Component, Fragment } from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import authService from './api-authorization/AuthorizeService';
import { AuthorizationPaths } from './api-authorization/ApiAuthorizationConstants';
import { ApplicationPaths } from './Constants';

export class NavMenu extends Component
{
  static displayName = NavMenu.name;

  constructor(props)
  {
    super(props);

    this.state = {
      isAuthenticated: false,
      userName: null,
      role: null
    };
  }

  componentDidMount()
  {
    this._subscription = authService.subscribe(() => this.populateState());
    this.populateState();
  }

  componentWillUnmount()
  {
    authService.unsubscribe(this._subscription);
  }

  async populateState()
  {
    const [isAuthenticated, user] = await Promise.all([authService.isAuthenticated(), authService.getUser()])
    this.setState({
      isAuthenticated,
      userName: user && user.name,
      role: user && user.role
    });
  }

  render()
  {
    return (
      <header>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand as={Link} to="/">SCHÜCO</Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              {this.checkAuthAndRenderMenuItems()}
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </header>
    );
  }

  checkAuthAndRenderMenuItems()
  {
    if (!this.state.isAuthenticated)
    {
      return this.anonymousView();
    } else
    {
      return this.authenticatedView();
    }
  }

  anonymousView()
  {
    const loginPath = `${AuthorizationPaths.Login}`;
    return (<Fragment>
      <Nav className="mr-auto">
        <Nav.Link as={Link} to="/">HOME</Nav.Link>
      </Nav>
      <Nav>
        <Nav.Link as={Link} to={loginPath}>Login</Nav.Link>
      </Nav>
    </Fragment>);
  }

  authenticatedView()
  {
    if (this.state.role === "Admin")
    {
      return (<Fragment>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">HOME</Nav.Link>
          {this.storeAndInventoryItems()}
          <Nav.Link as={Link} to={ApplicationPaths.CatalogPath}>CATALOG</Nav.Link>
          <Nav.Link as={Link} to={ApplicationPaths.UsersPath}>USERS</Nav.Link>
        </Nav>
        <Nav>
          {this.profileAndLogoutItems()}
        </Nav>
      </Fragment>);
    }
    else if (this.state.role === "User")
    {
      return (<Fragment>
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">HOME</Nav.Link>
          {this.storeAndInventoryItems()}
        </Nav>
        <Nav>
          {this.profileAndLogoutItems()}
        </Nav>
      </Fragment>);
    }
    else
    {
      return (<Fragment>
        {this.profileAndLogoutItems()}
      </Fragment>);
    }
  }

  storeAndInventoryItems()
  {
    return (<Fragment>
      <Nav.Link as={Link} to={ApplicationPaths.StorePath}>STORE</Nav.Link>
      <Nav.Link as={Link} to={ApplicationPaths.InventoryPath}>MY INVENTORY</Nav.Link>
    </Fragment>);
  }

  profileAndLogoutItems()
  {
    const profilePath = `${AuthorizationPaths.Profile}`;
    const logoutPath = { pathname: `${AuthorizationPaths.LogOut}`, state: { local: true } };
    return (<Fragment>
      <Nav.Link as={Link} to={profilePath}>Hello {this.state.userName}</Nav.Link>
      <Nav.Link as={Link} to={logoutPath}>LOGOUT</Nav.Link>
    </Fragment>);
  }
}
