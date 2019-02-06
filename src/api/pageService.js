import {endpoints} from "./endpoints";
import axios from 'axios';

const {pageEndpoints} = endpoints;

class PageService {

    static fetch() {
        return axios.get(pageEndpoints.list())
            .then(response => response.data);
    }

}

export default PageService;
