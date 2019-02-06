import {endpoints} from './endpoints';
import axios from 'axios';

const {categoryEndpoints} = endpoints;

class CategoryService {

    static fetch() {
        return axios.get(categoryEndpoints.list())
            .then(response => response.data);
    }

}

export default CategoryService;
