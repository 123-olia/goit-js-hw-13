const baseUrl = 'https://pixabay.com/api/';

export default {
  key: '16997109-7f0e3215b93572c0bd796cdf9',
  page: 1,
  query: '',

  async fetchImages() {
    const srchQuery = `?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=12&key=${this.key}`;

    try {
      const response = await fetch(baseUrl + srchQuery);
      const data = await response.json();
      this.incrementPage();
      return data.hits;
    } catch (err) {
      return error('Some error in fetch');
    }
  },

  get searchQuery() {
    return this.query;
  },
  set searchQuery(string) {
    this.query = string;
  },
  incrementPage() {
    this.page += 1;
  },
  resetPage() {
    this.page = 1;
  },
};
