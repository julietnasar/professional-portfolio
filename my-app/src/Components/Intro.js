import React from 'react';
import { Col, Row, Nav, NavItem, NavLink } from 'reactstrap';

const Intro = () => {
  return (
    <div class="intro">
      <br />
      <Row>
        <Col
          xs="6"
        >
          <h1 class="greeting">Hi! I'm Juliet</h1>
            <p>A passionate and creative problem solver looking to transition into a career in Software Engineering
              <br />
              Learn More About me Below!
            </p>

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
        </Col>
        <Col
          xs="6"
        >
          <img class="intro-img" src="blurred-headshot.png" alt="Headshot" />
        </Col>
      </Row>
    </div>

  );
};

export default Intro;