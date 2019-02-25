import {endpoints} from './endpoints';

const {commentEndpoints} = endpoints;

class CommentService {

    static fetch(postId = 0, parentId = 0, offset = 0, perPage = 10) {
        return new Promise((resolve) => {
            resolve([
                {
                    id: 1
                },
                {
                    id: 2
                }
            ]);
        });
    }

    static create(data = {}, token = null) {
        return axios.post(commentEndpoints.create(), data, {
            headers: {Authorization: 'Bearer ' + token}
        })
            .then(response => response.data);
    }

}

export default CommentService;
