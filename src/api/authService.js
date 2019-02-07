import axios from 'axios';
import {endpoints} from "./endpoints";

const {authEndpoints} = endpoints;

class AuthService {

    static signIn(credentials = null) {
        return credentials && axios.post(authEndpoints.singIn(), credentials)
            .then(response => response.data);
    }

}

export default AuthService;
