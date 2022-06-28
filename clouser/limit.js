function limit(cb,n){
    function fun()
    {
        for(let i=0;i<n;i++)
        cb();
        return "hello"
    }
    return fun()
}

const cb=()=> 1
const ab=limit(cb,10)
console.log(ab)