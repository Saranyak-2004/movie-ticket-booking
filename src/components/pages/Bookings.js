import React, { useEffect, useState } from 'react';
import { Container, Table, Button } from 'react-bootstrap';
import { mockMovies } from './Movies'; // Make sure this points to your mock data

const Bookings = () => {
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('bookings') || '[]');
    setBookings(data);
  }, []);

  const handleDelete = (index) => {
    const updated = [...bookings];
    updated.splice(index, 1);
    setBookings(updated);
    localStorage.setItem('bookings', JSON.stringify(updated));
  };

  const getMovieTitle = (id) => {
    const movie = mockMovies.find((m) => m.id === parseInt(id));
    return movie ? movie.title : 'Unknown Movie';
  };

  return (
    <Container className="py-4">
      <h3 className="text-center mb-4">My Bookings</h3>
      {bookings.length === 0 ? (
        <p className="text-center">No bookings found.</p>
      ) : (
        <Table striped bordered hover responsive>
          <thead>
            <tr>
              <th>#</th>
              <th>Movie</th>
              <th>Name</th>
              <th>Theatre</th>
              <th>Time</th>
              <th>Seats</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((booking, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{getMovieTitle(booking.movieId)}</td>
                <td>{booking.name}</td>
                <td>{booking.theatre}</td>
                <td>{booking.time}</td>
                <td>{booking.seats.join(', ')}</td>
                <td>
                  <Button
                    variant="danger"
                    size="sm"
                    onClick={() => handleDelete(index)}
                  >
                    Delete
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </Container>
  );
};

export default Bookings;
