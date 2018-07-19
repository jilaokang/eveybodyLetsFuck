const axios = require("axios")

function _fetch(url, methods, value) {
    let Url = url || 'http://localhost:3000',
        Methods = methods || 'get',
        Value = null;

    let result
    axios.get(Url, Value)
        .then(res => {
           
        })

        axios.post(Url,{
            username:"kaso",
            password:"5555"
        })
}

_fetch()