import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Container, Row, Col, Form, Button, Alert } from 'react-bootstrap';
import { mockMovies } from './Movies';

const seatsLayout = Array.from({ length: 30 }, (_, i) => i + 1);

const Book = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = mockMovies.find((m) => m.id === parseInt(id));
  const [formData, setFormData] = useState({
    name: '',
    theatre: '',
    time: '',
  });
  const [selectedSeats, setSelectedSeats] = useState([]);
  const [bookedSeats, setBookedSeats] = useState([]);
  const [success, setSuccess] = useState(false);

  const selectedTheatreObj = movie?.theatres.find(
    (t) => t.name === formData.theatre
  );

  // Fetch booked seats based on movie + theatre + time
  useEffect(() => {
    if (!formData.theatre || !formData.time) {
      setBookedSeats([]);
      return;
    }

    const allBookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    const movieBookings = allBookings.filter(
      (b) =>
        b.movieId === id &&
        b.theatre === formData.theatre &&
        b.time === formData.time
    );
    const takenSeats = movieBookings.flatMap((b) => b.seats);
    setBookedSeats(takenSeats);
  }, [id, formData.theatre, formData.time]);

  const toggleSeat = (seat) => {
    if (bookedSeats.includes(seat)) return;
    setSelectedSeats((prev) =>
      prev.includes(seat)
        ? prev.filter((s) => s !== seat)
        : [...prev, seat]
    );
  };

  const handleBooking = () => {
    const bookings = JSON.parse(localStorage.getItem('bookings') || '[]');
    bookings.push({
      movieId: id,
      theatre: formData.theatre,
      time: formData.time,
      name: formData.name,
      seats: selectedSeats,
    });
    localStorage.setItem('bookings', JSON.stringify(bookings));
    setSuccess(true);
    setTimeout(() => navigate('/bookings'), 2000);
  };

  if (!movie) {
    return (
      <Container>
        <p>Movie not found.</p>
      </Container>
    );
  }

  return (
    <Container className="py-4">
      <h3 className="text-center mb-4">Book Tickets – {movie.title}</h3>

      <Form className="mb-4">
        <Form.Group className="mb-3">
          <Form.Label>Your Name</Form.Label>
          <Form.Control
            type="text"
            required
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            placeholder="Enter your name"
          />
        </Form.Group>

        <Form.Group className="mb-3">
          <Form.Label>Select Theatre</Form.Label>
          <Form.Select
            required
            value={formData.theatre}
            onChange={(e) =>
              setFormData({ ...formData, theatre: e.target.value, time: '' })
            }
          >
            <option value="">Choose a theatre</option>
            {movie.theatres.map((theatre, index) => (
              <option key={index} value={theatre.name}>
                {theatre.name}
              </option>
            ))}
          </Form.Select>
        </Form.Group>

        <Form.Group className="mb-4">
          <Form.Label>Select Time</Form.Label>
          <Form.Select
            required
            value={formData.time}
            onChange={(e) => setFormData({ ...formData, time: e.target.value })}
            disabled={!formData.theatre}
          >
            <option value="">Choose a time</option>
            {selectedTheatreObj?.showTimes.map((slot, index) => (
              <option key={index} value={slot}>
                {slot}
              </option>
            ))}
          </Form.Select>
        </Form.Group>
      </Form>

      <h5 className="text-center mb-3">Choose Your Seats</h5>
      {success && <Alert variant="success">Booking Confirmed!</Alert>}

      <Row className="g-2 justify-content-center mb-4">
        {seatsLayout.map((seat) => {
          const isBooked = bookedSeats.includes(seat);
          const isSelected = selectedSeats.includes(seat);
          return (
            <Col key={seat} xs={2} sm={1} className="text-center">
              <Button
                variant={
                  isBooked
                    ? 'danger'
                    : isSelected
                    ? 'success'
                    : 'outline-secondary'
                }
                className="w-100 mb-2"
                disabled={isBooked}
                onClick={() => toggleSeat(seat)}
              >
                {seat}
              </Button>
            </Col>
          );
        })}
      </Row>

      <div className="text-center">
        <Button
          variant="primary"
          disabled={
            !formData.name ||
            !formData.theatre ||
            !formData.time ||
            selectedSeats.length === 0
          }
          onClick={handleBooking}
        >
          Confirm Booking
        </Button>
      </div>
    </Container>
  );
};

export default Book;
