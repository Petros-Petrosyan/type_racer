import axios from 'axios';

export const baseRequest = axios.create({
    baseURL: 'https://baconipsum.com/api'
});

export const historyRequest = axios.create({
    baseURL: 'https://typeracer-62bf9.firebaseio.com/'
});

export { getTextRequest } from './text';
export {
    createHistoryRequest,
    getHistoryRequest
} from './history';