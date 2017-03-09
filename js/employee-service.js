/**
 * Created by Hasani on 3/9/2017.
 */
import request from './request'
export let findAll = () => {
    return request({url:'employees.json'})
    .then(data => data = JSON.parse(data));
}
