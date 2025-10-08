async function getdata(){
    // this is the way of fetching  data using fetch 
    const respone = await fetch('https://jsonplaceholder.typicode.com/posts/1')
    const data = await respone.json()
    document.getElementById('post').innerHTML = data.title;
}





 
async function getdata(){
    // this is the way of fetching data using the external library axios 
    const respone = await axios.get('https://jsonplaceholder.typicode.com/posts/1')
    document.getElementById('post').innerHTML = respone.data.title;
}
