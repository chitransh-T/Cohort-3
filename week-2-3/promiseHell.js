function setTimeOutProomisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve,duration);
    })
}
// Promise chaining
setTimeOutProomisified(1000).then(() =>{
    console.log("hii");
    return setTimeOutProomisified(3000)
}).then(() =>{
    console.log("hii there")
    return setTimeOutProomisified(5000)
}).then(()=>{
    console.log("hello")
})