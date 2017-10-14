export default class GiphyService {

    static API = 'http://api.giphy.com';
    static API_KEY = 'SRg5s9nYvyJmaBDnDl0buRQ64dq5NoPQ';

    static search(q: string) {
        return fetch(`${this.API}/v1/gifs/search?q=${q}&api_key=${this.API_KEY}`)
            .then(resp => resp.json());
    }
}