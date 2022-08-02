const globalStyle = document.querySelector('.player')
import string from '../css/style'

function WriteDiv(obj,string){
        this.i=0,
        this.TextDiv=obj,
        this.string=string,
        this.id=''
}
WriteDiv.prototype.play=function(speed){
    this.id=setInterval(()=>{
        if(this.i>string.length){
            window.clearInterval(this.id)
            return
        }
        this.TextDiv.scrollTop= this.TextDiv.scrollHeight
        this.TextDiv.innerText = string.slice(0,this.i)
        this.i++  
    },speed || 500)
}
WriteDiv.prototype.stop=function(){
    window.clearInterval(this.id)
}
WriteDiv.prototype.speed=function(speed){
    window.clearInterval(this.id)
    this.play(speed)
}


let player = new WriteDiv(globalStyle,string)

player.play()

plystop.addEventListener('click',()=>{
    player.stop()
})
plyplay.addEventListener('click',()=>{
    player.play()
})
plyspeed2x.addEventListener('click',()=>{
    player.speed(100)
})