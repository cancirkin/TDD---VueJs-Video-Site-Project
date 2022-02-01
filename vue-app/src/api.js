import axios from 'axios'
import adapter from "axios/lib/adapters/http";

axios.defaults.adapter = adapter;

export class API {
    constructor(url) {
        if (url === undefined || url === "") {
            url = 'https://my-json-server.typicode.com/modanisa/bootcamp-video-db';
        }
        if (url.endsWith("/")) {
            url = url.substr(0, url.length - 1)
        }
        this.url = url
    }

    withPath(path) {
        if (!path.startsWith("/")) {
            path = "/" + path
        }
        return `${this.url}${path}`
    }

    async getVideos() {
        return axios.get(this.withPath('/videos')).then(r => r.data)
    }
}

export default new API('https://my-json-server.typicode.com/modanisa/bootcamp-video-db');
