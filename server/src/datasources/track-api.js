const { RESTDataSource } = require('apollo-datasource-rest');

class TrackAPI extends RESTDataSource {
  constructor() {
    super();
    // the Sorare API is hosted on this server
    this.baseURL = 'https://api.sorare.com';
  }

  // willSendRequest(request) {
  //   request.headers.set('Authorization', this.context.token);
  // }

  getQuery() {
    return this.get('graphql');
  }
}

module.exports = TrackAPI;
