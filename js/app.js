/**
 * Created by Hasani on 3/8/2017.
 */

let request = obj => {
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

request({url:"employees.json"})
    .then (data => {
        let employees = JSON.parse(data);
        let html = '';
        employees.forEach((employees) => {
            html += `
            <div><img src='" + employee.picture + "'/><div>" + employee.firstName + " " + employee.lastName + "<p>" + employee.phone + "</p></div></div>
            `
        });
        document.getElementById('list').innerHTML = html;
    }).catch(error => {
        console.log(error);
    })
