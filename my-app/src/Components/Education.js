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
          <h2><b>Undergraduate & Graduate Degrees</b></h2>
          <br />
          <div class="education-point">
            <h4><b><em>Yeshiva University, Sy Syms School of Business</em></b></h4>
            <p><i>September 2018 - January 2022</i><br />
              Bachelor of Science, Data Analytics & Computer Science (minor)<br />
              GPA: 3.866 | Sum Cumma Laude, Dean’s List (7/7 Semesters)</p>
          </div>
          <br />
          <div class="education-point">
            <h4><b><em>Georgia Institute of Technology</em></b></h4>
            <p><i>Beginning January 2024</i><br />
              Online Masters of Computer Science</p>
          </div>
        </Col>
        <Col
          xs="6"
        >
          <h2><b>Certifications & External Courses</b></h2>
          <br />
          <div class="education-point">
            <h4><b><em>Udemy</em></b></h4>
            <p><a href="https://www.udemy.com/certificate/UC-19fc35b4-6000-4bba-b6e4-ac977467c572/">Agile Samurai Bootcamp</a></p>
            <p><a href="https://www.udemy.com/certificate/UC-7541c7cc-e8a2-4e9f-9ca5-5f7cb5f7f10f/">Alteryx Bootcamp</a></p>
          </div>
          <div class="education-point">
            <h4><b><em>ScrumAlliance</em></b></h4>
            <p>Certified Scrum Master</p>
          </div>
        </Col>
      </Row>




    </div>
  );
};

export default Education;