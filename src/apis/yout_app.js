import { callApi } from '../utils/apiCaller';

/**
 *
 */
export const getYoutApp = async () => {
    return await callApi(`/admin/yout-app`);
};

/**
 *
 * @param {String} field
 * @param {JSON.stringify} data_stringify
 */
export const updateYoutApp = async (field, data_stringify) => {
    const _data_stringigy = data_stringify.replaceAll("'", '');
    const _data_stringigy2 = _data_stringigy.replaceAll('--', '__');
    return await callApi(`/admin/yout-app`, 'POST', { field, data_stringify: _data_stringigy2 });
};
