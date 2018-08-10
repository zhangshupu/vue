import jsonp from '../js/jsonp';
import { commonParams, options } from './config';
import { rejects } from 'assert';
export function getRecommend() {
    const url = 'https://c.y.qq.com/v8/fcg-bin/fcg_v8_toplist_cp.fcg';
    return new Promise((resolve, reject) => {
        jsonp(url, commonParams, options).then(res => {
            if (res) {
                resolve(res)
            } else {
                rejects(new Error())
            }
        })
    })

}