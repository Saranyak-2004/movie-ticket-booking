import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Button, Row, Col } from 'react-bootstrap';

const AdminDashboard = () => {
  const navigate = useNavigate();

  return (
    <Container className="py-5">
      <h3 className="text-center mb-4">Admin Dashboard</h3>
      <Row className="justify-content-center">
        <Col xs={12} md={6} className="d-grid gap-3">
          <Button variant="primary" size="lg" onClick={() => navigate('/admin/movies')}>Manage Movies</Button>
          <Button variant="secondary" size="lg" onClick={() => navigate('/admin/theatres')}>Manage Theatres</Button>
        </Col>
      </Row>
    </Container>
  );
};

export default AdminDashboard;
