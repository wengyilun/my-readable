/**
 * Created by mbp on 28/10/2017.
 */
import dateFormat from 'dateformat'
export const ALL_POST = 1;
export const STRAYED_POST = 2;
export const ROADKILL_POST = 3;
export const ABUSED_POST = 4;

export function capitalize (str=''){
	return typeof str !== 'string'
	? ''
	: str[0].toUpperCase() + str.slice(1)
}

export function convertToDate(timestamp){
	let d = new Date(timestamp)
	return dateFormat(d, "mediumDate")
}