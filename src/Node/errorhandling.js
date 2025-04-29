function divide(a,b){
    try{
        if(b===0){
            throw new Error('cannot be divisible by Zero')
        }
        const result=a/b;
        console.log(`result:${result}`);
    }catch(error){
        console.log("error",`Error:${error.message}`)
    }
}
divide(10,0);