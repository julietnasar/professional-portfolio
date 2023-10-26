import React from 'react';
import { Col, Row, List } from 'reactstrap';

const Intro = () => {
  return (
    <div class="intro">
      <br />
      <Row>
        <Col
          xs="6"
        >
          <h1 class="greeting">Hi! I'm Juliet</h1>
            <h2>A <b>passionate and creative</b> problem solver
              <br />
              <br />

            </h2>
            <h3>
            <b>Here are some quick facts about me:</b></h3>
            <h4>
                <List>
                  <li>I am excited to begin my online <b>masters in Computer Science</b> at Georgia Tech in January 2024</li>
                  <li>I am a <b>certified Scrum Master</b> and enjoy introducing productivity enhancements to teams through Agile methodologies</li>
                  <li>I am on the lookout for high growth opportunities so don't hesitate to reach out!</li>
                </List>
            </h4>
        </Col>
        <Col
          xs="6"
        >
          <img class="intro-img" src="./blurred-headshot.png" alt="Headshot" />
          {/* for when local: ./professional-portfolio/blurred-headshot.png */}
        </Col>
      </Row>
    </div>
  );
};

export default Intro;