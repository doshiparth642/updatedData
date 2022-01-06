import api from "./apis/api";
import {hydrateUsers} from './transformers/userTransformer';

class UserService {
  getUsers() {
    return api.user.getUsers().then(hydrateUsers);
  }
}

export default new UserService();
