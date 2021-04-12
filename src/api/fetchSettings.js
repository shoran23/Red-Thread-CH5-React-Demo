export let getSettings = (address,port,settings) => {
    return (
        fetch(`http://${address}:${port}/${settings}`, {
            header: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(resJson => resJson[settings])
    )
}

export let postSettings = (address,port,settings,body) => {
    return (
        fetch(`http://${address}:${port}/${settings}`, {
            header: {
                'Content': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify(body)
        })
        .then(res => res.json())
        .then(resjson => console.log(resjson))
    )
}



