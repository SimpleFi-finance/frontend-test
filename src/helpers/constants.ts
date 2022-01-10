const API_URL = 'https://api.indexer.simplefi.finance/api/v1/connect/'
export const W_ADDRESS = '0xed85af164d02b5eb2f10abedee9a7577e90a2ffb' //'0x0082ecb97de99d907b779625e8b3c45f1c151a60'
export const FULL_URL = `${API_URL}${W_ADDRESS}`;

export const GET_DATA = Symbol('GET_DATA');
export const SET_SELECTED = Symbol('SET_SELECTED');
