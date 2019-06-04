import apisauce from 'apisauce'
import { BASE_URL } from '../gameConfig'

const api = apisauce.create({baseURL: BASE_URL + 'v1/'})

export function postCheckGamePosition(data) {
    return api.post('/check', data);
}