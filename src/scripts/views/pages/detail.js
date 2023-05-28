import TheMovieDbSource from '../../data/themoviedb-source';
import UrlParser from '../../routes/url-parser';
import {
  createLikeButtonTemplate,
  createMovieDetailTemplate,
} from '../templates/template-creator';

const Detail = {
  async render() {
    return `
    <div id="movie" class="movie"></div>
    <div id="createLikeButtonTemplate"></div>
    `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const movie = await TheMovieDbSource.detailMovie(url.id);
    const movieContainer = document.querySelector('#movie');
    movieContainer.innerHTML = createMovieDetailTemplate(movie);
    createLikeButtonTemplate.innerHTML = createLikeButtonTemplate();
  },
};

export default Detail;
