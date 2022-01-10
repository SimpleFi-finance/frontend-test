import moment from "moment";
export const timestampToDate = (tickFormat:string|number):string => moment(+tickFormat).format("DD.MM.YY");