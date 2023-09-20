import * as httpRequest from '~/utils/httpRequest';

export const get = async () => {
    try {
        const res = await httpRequest.get('customer');
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const post = async (value) => {
    try {
        const res = await httpRequest.post('customer', value);
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const detail = async (id) => {
    try {
        const res = await httpRequest.detail(`customer/${id}`);
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const put = async (id, value) => {
    try {
        const res = await httpRequest.put(`customer/${id}`, value);
        return res;
    } catch (e) {
        console.log(e);
    }
};

export const remove = async (id) => {
    try {
        const res = await httpRequest.remove(`customer/${id}`);
        return res;
    } catch (e) {
        console.log(e);
    }
};
