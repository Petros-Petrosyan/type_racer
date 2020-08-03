import { baseRequest } from '.';

export const getTextRequest = async (sentences) => {
    const res = await baseRequest.get('/', {
        params: {
            type: 'all-meat',
            sentences,
        }
    });
    return res.data[0];
}