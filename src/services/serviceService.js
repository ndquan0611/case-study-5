import * as httpRequest from '~/utils/httpRequest';

export const get = async () => {
    try {
        const res = await httpRequest.get('service');
        return res.data;
    } catch (e) {
        console.log(e);
    }
};
