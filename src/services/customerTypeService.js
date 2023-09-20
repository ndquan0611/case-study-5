import * as httpRequest from '~/utils/httpRequest';

export const get = async () => {
    try {
        const res = await httpRequest.get('customerType');
        return res;
    } catch (e) {
        console.log(e);
    }
};
