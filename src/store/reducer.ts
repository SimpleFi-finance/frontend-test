import { GET_DATA, SET_SELECTED } from '../helpers/constants'
import { MainStoreType, ActionType } from "../types";

export const mainReducer = (state:MainStoreType, action:ActionType):MainStoreType => {
    switch(action.type) {
        case GET_DATA:
            const {name, historyData} = action.payload;
            const pools = {...state.pools};
            pools[name] = { historyData };
            return {  ...state, pools  };
        case SET_SELECTED:
            return {  ...state, selectedPool:action.payload }
        default:
            return state
    }
};