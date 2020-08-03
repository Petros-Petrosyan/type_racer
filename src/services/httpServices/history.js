import { historyRequest } from '.';

export const createHistoryRequest = async (history) => {
    const res = await historyRequest.post('history.json', history);
    return res;
}

export const getHistoryRequest = async (history) => {
    const res = await historyRequest.get('history.json');
    return res.data;
}