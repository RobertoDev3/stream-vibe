export type MovieProps = {
  adult: boolean;
  media_type: string;
  backdrop_path: string;
  budget: number;
  genre_ids: number[];
  genres: GenresProps[];
  id: number;
  original_language: string;
  original_title: string;
  overview: string;
  popularity: number;
  poster_path: string;
  production_companies: ProductionCompaniesProps[];
  production_countries: ProductionCountriesProps[];
  release_date: string;
  revenue: number;
  runtime: number;
  spoken_languages: SpokenLanguagesProps[];
  status: string;
  title: string;
  video: boolean;
  vote_average: number;
  vote_count: number;
  name?: string;
  first_air_date?: string;
};

export type SpokenLanguagesProps = {
  english_name: string;
  iso_639_1: string;
  name: string;
};

export type ProductionCountriesProps = {
  iso_3166_1: string;
  name: string;
};

export type ProductionCompaniesProps = {
  id: number;
  logo_path: string;
  name: string;
  origin_country: string;
};

export type GenresProps = {
  id: number;
  name: string;
};

export type GenresMoviesProps = {
  idCategory: number;
  nameCategory: string;
  movies: MovieProps[];
};

export type AllCategorysMoviesProps = {
  trendingMoviesAndSeries: MovieProps[];
  nowPlayingMovies: MovieProps[];
  popularMovies: MovieProps[];
  topRatedMovies: MovieProps[];
  upcomingMovies: MovieProps[];
};
