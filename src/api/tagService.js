import {endpoints} from "./endpoints";
import axios from 'axios';

const {tagEndpoints} = endpoints;


class TagService {

    static fetch() {
        return axios.get(tagEndpoints.list())
            .then(response => response.data);
    }

}

export default TagService;
