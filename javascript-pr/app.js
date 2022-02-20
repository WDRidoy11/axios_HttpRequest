const makerequerst = async(Config) => {
    return await axios(Config);
}
const sentData = () => {
    makerequerst({
            url: 'https://jsonplaceholder.typicode.com/posts',
            method: 'POST',
            data: JSON.stringify({
                title: 'foo',
                body: 'bar',
                userId: 1,
            }),
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
}
sentData();
const updataData = () => {
    makerequerst({
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            method: 'PUT',
            data: JSON.stringify({
                title: 'footer',
            }),
        })
        .then((res) => console.log(res.data))
        .catch((err) => console.log(err))
}
updataData();