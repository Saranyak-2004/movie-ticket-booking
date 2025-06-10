import React, { useState } from 'react';
import { Container, Table, Button, Form, Row, Col } from 'react-bootstrap';

const AdminMovies = () => {
  const [movies, setMovies] = useState([]);
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const addMovie = () => {
    const newMovie = {
      id: Date.now(),
      title,
      description,
    };
    setMovies([...movies, newMovie]);
    setTitle('');
    setDescription('');
  };

  const deleteMovie = (id) => {
    setMovies(movies.filter((m) => m.id !== id));
  };

  return (
    <Container className="py-4">
      <h3 className="text-center mb-4">Manage Movies</h3>
      <Form className="mb-3">
        <Row>
          <Col md={5}><Form.Control placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)} /></Col>
          <Col md={5}><Form.Control placeholder="Description" value={description} onChange={(e) => setDescription(e.target.value)} /></Col>
          <Col md={2}><Button onClick={addMovie}>Add</Button></Col>
        </Row>
      </Form>
      <Table striped bordered hover responsive>
        <thead>
          <tr><th>#</th><th>Title</th><th>Description</th><th>Actions</th></tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={movie.id}>
              <td>{index + 1}</td>
              <td>{movie.title}</td>
              <td>{movie.description}</td>
              <td>
                <Button variant="danger" size="sm" onClick={() => deleteMovie(movie.id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default AdminMovies;