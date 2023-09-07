import React from 'react';
import { Col, Card, CardProps, CardText, Row, CardTitle, Button, CardGroup } from 'reactstrap';

const Education = () => {
  return (
    <div class="education">
      <h1>Education</h1>
      <br/>
      <CardGroup>

        <Card body>
          <CardTitle tag="h5">
            Yeshiva University, Sy Syms School of Business
          </CardTitle>
          <CardText>
            September 2018 - January 2022
            Bachelor of Science, Data Analytics & Computer Science (minor)
            GPA: 3.866 | Sum Cumma Laude, Dean’s List (7/7 Semesters)
          </CardText>
          <Button>
            Yeshiva University Website
          </Button>
        </Card>

        <Card body>
          <CardTitle tag="h5">
            (Hopefully) Georgia Tech
          </CardTitle>
          <CardText>
            Beginning January 2024
            Masters in Computer Science
          </CardText>
          <Button>
            Georgia Tech OMSCS Program
          </Button>
        </Card>

      </CardGroup>
    </div>
  );
};

export default Education;