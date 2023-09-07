import React from 'react';
import { Nav, NavItem, NavLink } from 'reactstrap';

const Intro = () => {
  return (
    <div class="intro">
        <br/>
        <h1 class="greeting">Hi! I'm Juliet</h1>
        <div class="center-col">
            <h4>A passionate and creative problem solver looking to transition into a career in Software Engineering</h4>
            <h3>Learn More About me Below!</h3>
            <Nav vertical class="myNav">
              <NavItem>
                <NavLink href="#">Education</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Experience</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Key Projects</NavLink>
              </NavItem>
              <NavItem>
                <NavLink href="#">Skills</NavLink>
              </NavItem>
            </Nav>
        </div>
        <br/>
    </div>
  );
};

export default Intro;