import React from 'react';
import { Col, Row } from 'reactstrap';

const Education = () => {
  return (


    <div class="education">
      <h1 class="title">Education</h1>
      <br />

      <Row>
        <Col
          xs="6">
          <h2>Undergraduate & Graduate Degrees</h2>
          <br />
          <div class="education-point">
            <h4>Yeshiva University, Sy Syms School of Business</h4>
            <p><i>September 2018 - January 2022</i><br />
              Bachelor of Science, Data Analytics & Computer Science (minor)<br />
              GPA: 3.866 | Sum Cumma Laude, Dean’s List (7/7 Semesters)</p>
          </div>
          <br />
          <div class="education-point">
            <h4>Georgia Institute of Technology</h4>
            <p><i>Beginning January 2024</i><br />
              Online Masters of Computer Science</p>
          </div>
        </Col>
        <Col
          xs="6"
        >
          <h2>Certifications & External Courses</h2>
          <br />
          <div class="education-point">
            <h4>Udemy</h4>
            <p>Agile Samurai Bootcamp</p>
            <p>Alteryx Bootcamp</p>
          </div>
          <div class="education-point">
            <h4>Scrum Alliance</h4>
            <p>Certified Scrum Master</p>
          </div>
        </Col>
      </Row>




    </div>
  );
};

export default Education;