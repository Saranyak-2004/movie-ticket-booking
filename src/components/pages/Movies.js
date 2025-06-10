import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Container, Row, Col, Card, Button, Form } from 'react-bootstrap';
import { useAuth } from '../context/AuthContext';
import inception from '../../Assets/inception.jpg';
import interstellar from '../../Assets/Interstellar.jpg';
import TheDarkKnight from '../../Assets/The Dark Knight.jpg';
import Avatar from '../../Assets/Avatar.jpg';
import Titanic from '../../Assets/Titanic.jpg';
import Joker from '../../Assets/Joker.jpg';
import AvengersEndgame from '../../Assets/AvengersEndgame.jpg';
import SpiderManNoWayHome from '../../Assets/Spider-ManNo Way Home.jpg';
import Oppenheime from '../../Assets/Oppenheimer.jpg';
import TheMatrix from '../../Assets/The Matrix.jpg';
import TheShawshankRedemption from '../../Assets/The Shawshank Redemption.jpg';
import FightClub from '../../Assets/Fight Club.jpg';
import ForrestGump from '../../Assets/Forrest Gump.jpg';
import Gladiator from '../../Assets/Gladiator.jpg';
import BlackPanther from '../../Assets/Black Panther.jpg';
import DoctorStrange from '../../Assets/Doctor Strange.jpg';
import GuardiansoftheGalaxy from '../../Assets/Guardians of the Galaxy.jpg';
import WALLE from '../../Assets/WALL-E.jpg';
import TheLionKing from '../../Assets/The Lion King.jpg';
import  Frozen from '../../Assets/Frozen.jpg';




export const mockMovies = [
  {
    id: 1,
    title: 'Inception',
    poster: inception,
    description: 'Sci-fi thriller.',
    theatres: [
      { name: 'PVR Velachery', showTimes: ['10:00 AM', '1:00 PM', '4:00 PM'] },
      { name: 'INOX Phoenix', showTimes: ['12:30 PM', '3:30 PM'] },
    ],
  },
  {
    id: 2,
    title: 'Interstellar',
    poster: interstellar,
    description: 'Space adventure.',
    theatres: [
      { name: 'Sathyam Cinemas', showTimes: ['12:00 PM', '3:00 PM', '6:00 PM'] },
      { name: 'Luxe Cinemas', showTimes: ['10:00 AM', '1:00 PM'] },
    ],
  },
  {
    id: 3,
    title: 'The Dark Knight',
    poster: TheDarkKnight,
    description: 'Batman returns.',
    theatres: [
      { name: 'Escape EA', showTimes: ['11:00 AM', '2:00 PM', '5:00 PM'] },
      { name: 'PVR Ampa', showTimes: ['12:30 PM', '4:30 PM'] },
    ],
  },
  {
    id: 4,
    title: 'Avatar',
    poster: Avatar,
    description: 'Alien world adventure.',
    theatres: [
      { name: 'AGS T Nagar', showTimes: ['9:30 AM', '1:00 PM', '4:30 PM'] },
      { name: 'INOX Marina Mall', showTimes: ['10:00 AM', '2:00 PM'] },
    ],
  },
  {
    id: 5,
    title: 'Titanic',
    poster: Titanic,
    description: 'Romantic tragedy.',
    theatres: [
      { name: 'Ega Cinemas', showTimes: ['11:00 AM', '2:00 PM'] },
      { name: 'Devi Cineplex', showTimes: ['9:00 AM', '12:30 PM'] },
    ],
  },
  {
    id: 6,
    title: 'Joker',
    poster: Joker,
    description: 'Villain origin story.',
    theatres: [
      { name: 'Escape Forum', showTimes: ['1:00 PM', '4:00 PM'] },
      { name: 'Palazzo', showTimes: ['3:00 PM', '6:00 PM'] },
    ],
  },
  {
    id: 7,
    title: 'Avengers: Endgame',
    poster: AvengersEndgame,
    description: 'Superhero finale.',
    theatres: [
      { name: 'Jazz Cinemas', showTimes: ['2:30 PM', '6:00 PM'] },
      { name: 'PVR VR Mall', showTimes: ['12:00 PM', '3:30 PM'] },
    ],
  },
  {
    id: 8,
    title: 'Spider-Man: No Way Home',
    poster: SpiderManNoWayHome,
    description: 'Multiverse crisis.',
    theatres: [
      { name: 'INOX Citi Centre', showTimes: ['11:00 AM', '2:00 PM', '5:00 PM'] },
      { name: 'S2 Cinemas', showTimes: ['10:30 AM', '1:30 PM'] },
    ],
  },
  {
    id: 9,
    title: 'Oppenheimer',
    poster: Oppenheime,
    description: 'Atomic age begins.',
    theatres: [
      { name: 'SPI Escape', showTimes: ['12:00 PM', '3:00 PM'] },
      { name: 'PVR Skywalk', showTimes: ['11:00 AM', '2:30 PM'] },
    ],
  },
  {
    id: 10,
    title: 'The Matrix',
    poster: TheMatrix,
    description: 'Digital reality.',
    theatres: [
      { name: 'Sathyam Cinemas', showTimes: ['9:30 AM', '12:30 PM'] },
      { name: 'Escape EA', showTimes: ['10:00 AM', '1:00 PM'] },
    ],
  },
  {
    id: 11,
    title: 'The Shawshank Redemption',
    poster:TheShawshankRedemption,
    description: 'Hope and perseverance.',
    theatres: [
      { name: 'INOX Express Avenue', showTimes: ['2:00 PM', '6:00 PM'] },
      { name: 'PVR Anna Nagar', showTimes: ['10:30 AM', '1:30 PM'] },
    ],
  },
  {
    id: 12,
    title: 'Fight Club',
    poster: FightClub,
    description: 'Anarchy and identity.',
    theatres: [
      { name: 'Ega Cinemas', showTimes: ['1:00 PM', '4:00 PM'] },
      { name: 'S2 Perambur', showTimes: ['3:00 PM', '6:00 PM'] },
    ],
  },
  {
    id: 13,
    title: 'Forrest Gump',
    poster: ForrestGump,
    description: 'Life’s journey.',
    theatres: [
      { name: 'PVR VR Chennai', showTimes: ['11:00 AM', '2:00 PM'] },
      { name: 'AGS Navalur', showTimes: ['12:00 PM', '3:00 PM'] },
    ],
  },
  {
    id: 14,
    title: 'Gladiator',
    poster:Gladiator,
    description: 'Ancient Rome action.',
    theatres: [
      { name: 'INOX Marina Mall', showTimes: ['10:00 AM', '1:00 PM'] },
      { name: 'Sathyam Cinemas', showTimes: ['11:00 AM', '2:30 PM'] },
    ],
  },
  {
    id: 15,
    title: 'Black Panther',
    poster: BlackPanther,
    description: 'Wakanda forever.',
    theatres: [
      { name: 'Escape EA', showTimes: ['9:30 AM', '12:00 PM'] },
      { name: 'PVR Velachery', showTimes: ['2:00 PM', '5:00 PM'] },
    ],
  },
  {
    id: 16,
    title: 'Doctor Strange',
    poster: DoctorStrange,
    description: 'Mystic arts.',
    theatres: [
      { name: 'Palazzo', showTimes: ['1:00 PM', '3:30 PM'] },
      { name: 'Jazz Cinemas', showTimes: ['12:30 PM', '4:00 PM'] },
    ],
  },
  {
    id: 17,
    title: 'Guardians of the Galaxy',
    poster: GuardiansoftheGalaxy,
    description: 'Cosmic misfits.',
    theatres: [
      { name: 'INOX Marina Mall', showTimes: ['10:00 AM', '12:30 PM'] },
      { name: 'S2 Perambur', showTimes: ['1:30 PM', '4:00 PM'] },
    ],
  },
  {
    id: 18,
    title: 'WALL-E',
    poster: WALLE,
    description: 'Robot love story.',
    theatres: [
      { name: 'INOX Citi Centre', showTimes: ['9:00 AM', '11:30 AM'] },
      { name: 'PVR Ampa', showTimes: ['1:00 PM', '3:30 PM'] },
    ],
  },
  {
    id: 19,
    title: 'The Lion King',
    poster: TheLionKing,
    description: 'A Disney classic.',
    theatres: [
      { name: 'Sathyam Cinemas', showTimes: ['10:00 AM', '12:30 PM'] },
      { name: 'Ega Cinemas', showTimes: ['2:00 PM', '4:30 PM'] },
    ],
  },
  {
    id: 20,
    title: 'Frozen',
    poster: Frozen,
    description: 'Let it go!',
    theatres: [
      { name: 'Escape EA', showTimes: ['9:30 AM', '12:00 PM'] },
      { name: 'AGS T Nagar', showTimes: ['1:30 PM', '4:00 PM'] },
    ],
  },
];



const Movies = () => {
  const [movies, setMovies] = useState([]);
  const [newMovie, setNewMovie] = useState({
    title: '',
    poster: '',
    description: '',
    theatres: [{ name: '', showTimes: [''] }],
  });

  const navigate = useNavigate();
  const { user } = useAuth();
  const isAdmin = user?.role === 'admin';

  useEffect(() => {
    setMovies(mockMovies);
  }, []);

  const handleAddMovie = (e) => {
    e.preventDefault();
    const id = movies.length + 1;
    setMovies([...movies, { ...newMovie, id }]);
    setNewMovie({
      title: '',
      poster: '',
      description: '',
      theatres: [{ name: '', showTimes: [''] }],
    });
  };

  const handleDeleteMovie = (id) => {
    setMovies(movies.filter((movie) => movie.id !== id));
  };

  return (
    <Container className="py-4">
      <h2 className="text-center mb-4">Now Showing</h2>

      {isAdmin && (
        <Form onSubmit={handleAddMovie} className="mb-5">
          <h4>Add New Movie</h4>
          <Row>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Title</Form.Label>
                <Form.Control
                  value={newMovie.title}
                  onChange={(e) => setNewMovie({ ...newMovie, title: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Poster URL</Form.Label>
                <Form.Control
                  value={newMovie.poster}
                  onChange={(e) => setNewMovie({ ...newMovie, poster: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
            <Col md={4}>
              <Form.Group className="mb-3">
                <Form.Label>Description</Form.Label>
                <Form.Control
                  value={newMovie.description}
                  onChange={(e) => setNewMovie({ ...newMovie, description: e.target.value })}
                  required
                />
              </Form.Group>
            </Col>
          </Row>
          <Form.Group className="mb-3">
            <Form.Label>Theatre Name</Form.Label>
            <Form.Control
              value={newMovie.theatres[0].name}
              onChange={(e) =>
                setNewMovie({
                  ...newMovie,
                  theatres: [{ ...newMovie.theatres[0], name: e.target.value }],
                })
              }
              required
            />
          </Form.Group>
          <Form.Group className="mb-3">
            <Form.Label>Show Times (comma separated)</Form.Label>
            <Form.Control
              value={newMovie.theatres[0].showTimes.join(', ')}
              onChange={(e) =>
                setNewMovie({
                  ...newMovie,
                  theatres: [
                    {
                      ...newMovie.theatres[0],
                      showTimes: e.target.value.split(',').map((s) => s.trim()),
                    },
                  ],
                })
              }
              required
            />
          </Form.Group>
          <Button type="submit" variant="success">Add Movie</Button>
        </Form>
      )}

      <Row>
        {movies.map((movie) => (
          <Col key={movie.id} sm={12} md={6} lg={4} className="mb-4">
            <Card>
             <Card.Img variant="top" src={movie.poster} />
              <Card.Body>
                <Card.Title>{movie.title}</Card.Title>
                <Card.Text>{movie.description}</Card.Text>
                <Button
                  variant="primary"
                  className="me-2"
                  onClick={() => navigate(`/book/${movie.id}`)}
                >
                  Book Now
                </Button>
                {isAdmin && (
                  <Button variant="danger" onClick={() => handleDeleteMovie(movie.id)}>
                    Delete
                  </Button>
                )}
              </Card.Body>
            </Card>
          </Col>
        ))}
      </Row>
    </Container>
  );
};

export default Movies;
