function setTimeOurPromisified(duration){
    return new Promise(function(resolve){
        setTimeout(resolve, duration);
    });
}


async function solve(){
    await setTimeOurPromisified(1000)
    console.log("hiii");

    await setTimeOurPromisified(3000)
    console.log("heleoeoe");

    await setTimeOurPromisified(5000)
    console.log("hii whos there")

    
}

solve();