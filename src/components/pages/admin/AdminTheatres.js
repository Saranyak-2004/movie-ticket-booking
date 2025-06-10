import React, { useState } from 'react';
import { Container, Table, Button, Form, Row, Col } from 'react-bootstrap';

const AdminTheatres = () => {
  const [theatres, setTheatres] = useState([]);
  const [name, setName] = useState('');
  const [location, setLocation] = useState('');

  const addTheatre = () => {
    const newTheatre = {
      id: Date.now(),
      name,
      location,
    };
    setTheatres([...theatres, newTheatre]);
    setName('');
    setLocation('');
  };

  const deleteTheatre = (id) => {
    setTheatres(theatres.filter((t) => t.id !== id));
  };

  return (
    <Container className="py-4">
      <h3 className="text-center mb-4">Manage Theatres</h3>
      <Form className="mb-3">
        <Row>
          <Col md={5}><Form.Control placeholder="Theatre Name" value={name} onChange={(e) => setName(e.target.value)} /></Col>
          <Col md={5}><Form.Control placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} /></Col>
          <Col md={2}><Button onClick={addTheatre}>Add</Button></Col>
        </Row>
      </Form>
      <Table striped bordered hover responsive>
        <thead>
          <tr><th>#</th><th>Name</th><th>Location</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {theatres.map((theatre, index) => (
            <tr key={theatre.id}>
              <td>{index + 1}</td>
              <td>{theatre.name}</td>
              <td>{theatre.location}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => deleteTheatre(theatre.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminTheatres;
