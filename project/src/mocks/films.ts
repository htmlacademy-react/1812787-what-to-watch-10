import { Film } from '../types/film-info';

export const films: Film[] = [
  {
    id: 1,
    name: 'The Grand Budapest Hotel',
    posterImage: 'img/the-grand-budapest-hotel-poster.jpg',
    previewImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundImage: 'img/bg-the-grand-budapest-hotel.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'In the 1930s, the Grand Budapest Hotel is a popular European ski resort, presided over by concierge Gustave H. (Ralph Fiennes). Zero, a junior lobby boy, becomes Gustave`s friend and protege.',
    rating: 8.9,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bill Murray'
    ],
    runTime: 99,
    genre: 'Comedy',
    released: 2014,
    isFavorite: false,
  },
  {
    id: 2,
    name: 'Bohemian Rhapsody',
    posterImage: 'img/bohemian-rhapsody.jpg',
    previewImage: 'img/bohemian-rhapsody.jpg',
    backgroundImage: 'img/bohemian-rhapsody.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'Bohemian Rhapsody is a foot-stomping celebration of Queen, their music and their extraordinary lead singer Freddie Mercury. ',
    rating: 7.9,
    scoresCount: 240,
    director: 'Bryan Singer',
    starring: [
      'Rami Malek',
      'Lucy Boynton',
    ],
    runTime: 134,
    genre: 'Drama',
    released: 2018,
    isFavorite: false,
  },
  {
    id: 3,
    name: 'Aviator',
    posterImage: 'img/aviator.jpg',
    previewImage: 'img/aviator.jpg',
    backgroundImage: 'img/aviator.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'The Aviator is a 2004 American epic biographical drama film directed by Martin Scorsese and written by John Logan.',
    rating: 7.5,
    scoresCount: 240,
    director: 'Martin Scorsese',
    starring: [
      'Leonardo DiCaprio'
    ],
    runTime: 109,
    genre: 'Drama',
    released: 2004,
    isFavorite: true,
  },
  {
    id: 4,
    name: 'No Country for Old Men',
    posterImage: 'img/no-country-for-old-men.jpg',
    previewImage: 'img/no-country-for-old-men.jpg',
    backgroundImage: 'img/no-country-for-old-men.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    previewVideoLink: 'https://download.blender.org/durian/trailer/sintel_trailer-480p.mp4',
    description: 'Violence and mayhem ensue after a hunter stumbles upon a drug deal gone wrong and more than two million dollars in cash near the Rio Grande.',
    rating: 8.1,
    scoresCount: 240,
    director: 'Joel Coen',
    starring: [
      'Tommy Lee Jones',
      'Javier Bardem'
    ],
    runTime: 119,
    genre: 'Drama',
    released: 2007,
    isFavorite: true,
  },
  {
    id: 5,
    name: 'The Darjeeling Limited',
    posterImage: 'img/dardjeeling-limited.jpg',
    previewImage: 'img/dardjeeling-limited.jpg',
    backgroundImage: 'img/dardjeeling-limited.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'A year after their father`s funeral, three brothers travel across India by train in an attempt to bond with each other.',
    rating: 7.1,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Owen Wilson',
    ],
    runTime: 91,
    genre: 'Comedy',
    released: 2007,
    isFavorite: false,
  },
  {
    id: 6,
    name: 'Moonrise Kingdom',
    posterImage: 'img/moonrise-kingdom.jpg',
    previewImage: 'img/moonrise-kingdom.jpg',
    backgroundImage: 'img/moonrise-kingdom.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Set on an island off the coast of New England in the 1960s, as a young boy and girl fall in love they are moved to run away together.',
    rating: 7.5,
    scoresCount: 240,
    director: 'Wes Anderson',
    starring: [
      'Bruce Willis',
      'Edward Norton',
      'Bill Murray',
    ],
    runTime: 94,
    genre: 'Comedy',
    released: 2012,
    isFavorite: true,
  },
  {
    id: 7,
    name: 'Orlando',
    posterImage: 'img/orlando.jpg',
    previewImage: 'img/orlando.jpg',
    backgroundImage: 'img/orlando.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'Young nobleman Orlando is commanded by Queen Elizabeth I to stay forever young.',
    rating: 7.1,
    scoresCount: 240,
    director: 'Sally Potter',
    starring: [
      'Tilda Swinton',
    ],
    runTime: 93,
    genre: 'Drama',
    released: 1992,
    isFavorite: false,
  },
  {
    id: 8,
    name: 'Pulp Fiction',
    posterImage: 'img/pulp-fiction.jpg',
    previewImage: 'img/pulp-fiction.jpg',
    backgroundImage: 'img/pulp-fiction.jpg',
    backgroundColor: '#ffffff',
    videoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    previewVideoLink: 'https://upload.wikimedia.org/wikipedia/commons/transcoded/b/b3/Big_Buck_Bunny_Trailer_400p.ogv/Big_Buck_Bunny_Trailer_400p.ogv.360p.webm',
    description: 'The lives of two mob hitmen, a boxer, a gangster and his wife, and a pair of diner bandits intertwine in four tales of violence and redemption.',
    rating: 7.8,
    scoresCount: 240,
    director: 'Quentin Tarantino',
    starring: [
      'John Travolta',
      'Samuel L. Jackson',
      'Uma Thurman',
    ],
    runTime: 154,
    genre: 'Drama',
    released: 1994,
    isFavorite: true,
  },
];

export const promoFilm: Film = films[0];

export const favoriteFilms: Film[] = films.filter((film) => film.isFavorite === true);