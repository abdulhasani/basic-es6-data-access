/**
 * Created by Hasani on 3/9/2017.
 */

export default obj => {
    return new Promise((resolve,reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open(obj.method || "GET", obj.url);
        /**
         * detected attribut headers[]
         */
        if(obj.headers){
            Object.keys(obj.headers).forEach((ket) => {
                xhr.setRequestHeader(key, obj.headers[key]);
            });
        }
        xhr.onload = () => {
            if(xhr.status >= 200 && xhr.status < 300){
                resolve(xhr.response)
            }else{
                reject(xhr.statusText);
            }
        }
        xhr.onerror = () => reject(xhr.statusText);
        xhr.send(obj.body);
    });
}
