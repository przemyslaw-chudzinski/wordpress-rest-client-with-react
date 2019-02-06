import {endpoints} from "./endpoints";
import axios from 'axios';

const {postEndpoints} = endpoints;

class PostService {

    static fetch(perPage, offset, categoryId = null) {
        return axios.get(postEndpoints.list(perPage, offset, categoryId))
            .then(response => response.data);
    }

}

export default PostService;
