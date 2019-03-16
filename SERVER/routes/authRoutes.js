
import { login, signUp } from '../Controller/userController';

const auth = (app) =>{

app.post('/auth/signUp', signUp);

app.post('/auth/login', login);
}

export default auth;