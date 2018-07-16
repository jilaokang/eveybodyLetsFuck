const _fetch = function (obj) {
    let url = obj.url;
    let methods = obj.methods;

    fetch(url, {
            method: methods
        })
        .then((response) => {
            response.text()
                .then((data) => {
                    let Data = JSON.parse(data)
                    console.log(Data)
                })
        })
}

_fetch({
    url:'/',
    method:'POST'
})