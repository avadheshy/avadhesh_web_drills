const ob={
    a:10,
    increment:function(){
        this.a+=1
        return this.a
    },
    decreament:function(){
        this.a-=1
        return this.a
    }
}
module.exports=ob