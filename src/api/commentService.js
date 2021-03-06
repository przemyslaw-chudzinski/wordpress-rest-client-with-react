import {endpoints} from './endpoints';
import axios from 'axios';

const {commentEndpoints} = endpoints;

class CommentService {

    static fetch(postId = 0, parentId = 0, offset = 0, perPage = 10) {
        return axios.get(commentEndpoints.list(perPage, offset, postId, parentId))
            .then(response => response.data);
    }

    static create(data = {}, token = null) {
        return axios.post(commentEndpoints.create(), data, {
            headers: {Authorization: 'Bearer ' + token}
        })
            .then(response => response.data);
    }

}

export default CommentService;
