import React from 'react';
import { Container, Row, Col, Card, Table } from 'react-bootstrap';
import { FaGraduationCap, FaSchool, FaUniversity } from 'react-icons/fa';

function Education() {
  return (
    <Container className="my-5">
      <Row className="justify-content-md-center">
        <Col md={10} lg={8} xl={6}>
          <Card className="shadow-lg border-0 rounded">
            <Card.Header as="h5" className="bg-primary text-white text-center">
              <FaGraduationCap className="me-2" />
              Education Details
            </Card.Header>
            <Card.Body>
              <Table striped bordered hover responsive variant="light" className="text-center">
                <thead className="bg-primary text-white">
                  <tr>
                    <th>#</th>
                    <th>Level</th>
                    <th>Institution</th>
                    <th>Percentage</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>1</td>
                    <td>
                      <FaSchool className="me-2" /> Schooling
                    </td>
                    <td>AP Model School</td>
                    <td>82%</td>
                  </tr>
                  <tr>
                    <td>2</td>
                    <td>
                      <FaUniversity className="me-2" /> Intermediate
                    </td>
                    <td>NRI Junior College</td>
                    <td>88%</td>
                  </tr>
                  <tr>
                    <td>3</td>
                    <td>
                      <FaGraduationCap className="me-2" /> B.Tech (CSE)
                    </td>
                    <td>Lendi Institute of Engineering and Technology</td>
                    <td>Pursuing...</td>
                  </tr>
                </tbody>
              </Table>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}

export default Education;
