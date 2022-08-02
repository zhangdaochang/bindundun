let style = `
@media screen and (min-width: 400px){
    .bingdundun{
        transform: scale(0.5);
    }
}
body{
    background-color: antiquewhite;
    min-width: 100%;
    min-height: 100vh;
}
.bingdundun{
    width: 500px;
    height: 800px;
    position: absolute;
    top: 25vh;
    left: 50%;
    margin-left: -250px;
}
.ear{
    z-index: 1;
    width: 70px;
    height: 70px;
    background-color: black;
}
.ear.left{
    border-radius: 80% 50%;
    position: relative;
    top:130px;
    left: 46px;
    transform: rotate(-46deg);

}
.ear.right{
    border-radius: 80% 50%;  
    position: relative;
    top:65px;
    right: -314px;
    transform: rotate(98deg);
}
.binbody{
    position: relative;
    z-index: 2;
    width: 430px;
    height: 500px;
    border: 8px solid black;
    border-radius: 43% 44%;
    background-color: #fff;
}
.xian1{
    border: 5px solid green;
    width: 360px;
    height: 280px;
    position: relative;
    top: 42px;
    left: 50%;
    margin-left: -180px;
    border-radius: 67% 45%/69%;
}
.xian2{
    border: 5px solid yellow;
    width: 350px;
    height: 270px;
    position: absolute;
    top: -1px;
    left: -1px;
    border-radius: 67% 45%/69%;
}
.xian3{
    border: 5px solid black;
    width: 340px;
    height: 260px;
    position: absolute;
    top: -1px;
    left: -1px;
    border-radius: 67% 47%/69%;
}
.xian4{
    border: 5px solid red;
    width: 332px;
    height: 252px;
    position: absolute;
    top: -1px;
    left: -1px;
    border-radius: 67% 47%/69%;
}
.xian5{
    border: 5px solid blue;
    width: 323px;
    height: 242px;
    position: absolute;
    top: -1px;
    left: -1px;
    border-radius: 67% 47%/69%;
}
.eye{
    width: 100px;
    height: 100px;
    background-color: black;
}
.eye.left{
    border-radius: 93% 50%;
    position: absolute;
    top: 22px;
    left: 40px;
}
.eye.right{
    border-radius: 50% 93%;
    position: absolute;
    top: 17px;
    left: 193px;
}
.eyeye{
    border: 5px solid #fff;
    width: 50px;
    height: 50px;
    border-radius: 50%;
}
.eye.left > .eyeye{
    position: absolute;
    top: 16px;
    left: 39px;

}
.eye.right > .eyeye{
    position: absolute;
    top: 19px;
    left: 19px;
}
.eye.left > .eyeye::before{
    content: '';
    display: block;
    width: 15px;
    height:15px;
    background-color: #fff;
    border-radius:50% ;
    position: relative;
    top: 6px;
    left: 16px;
}
.eye.right > .eyeye::before{
    content: '';
    display: block;
    width: 15px;
    height:15px;
    background-color: #fff;
    border-radius:50% ;
    position: relative;
    top: 7px;
    left: 10px
}
.nose{
    width: 50px;
    height: 40px;
    position: relative;
    top: 80px;
    left: 50%;
    margin-left: -20px;
    border-radius: 30px 30px 46px 46px;
    background-color: black;
}
.mouth{
    border: 2px solid;
    width: 76px;
    height: 20px;
    border-bottom: 6px solid black;
    position: relative;
    top: 97px;
    left: 137px;
    border-radius: 0px 0px 20px 23px;
    background: #fff;
}
.hand{
    background-color: black;
    width: 160px;
    height: 80px;

}
.hand.left{
 position: relative;
 transform: rotate(-50deg);
 bottom: 256px;
 right: 66px;
}
.hand.left::before{
    background-color: black;
    content: '';
    display: block;
    width: 80px;
    height: 80px;
    border-radius: 50%;
    position: absolute;
    top: -1px;
    left: -38px;
}
.hand.right{
    border-radius: 72px 58px 66px 33px;
    position: absolute;
    bottom: 388px;
    right: -23px;
    transform: rotate(-49deg);
}
.foot{
    background-color: black;
    width: 95px;
    height: 100px;
}
.foot.left{
    z-index: 2;
    position: relative;
    bottom: 127px;
    left: 85px;
    border-radius: 23px 45px 30px 29px;
}
.foot.right{
    z-index: 2;
    position: relative;
    bottom: 225px;
    left: 247px;
    border-radius: 39px 12px 48px 16px;
}
.love{
    position: relative;
    height: 40px;
    width: 40px;
    top: 20px;
    left: 92px;
    animation: 3s linear 1s infinite running loveScore;
}
.love >div:nth-child(1){
    position: absolute;
    background-color: red;
    width: 20px;
    height: 20px;
    top: 8px;
    left: 0px;
    transform: rotate(22deg);
}
.love >div:nth-child(2){
    position: absolute;
    background-color: red;
    width: 20px;
    height: 20px;
    top: 15px;
    left: 17px;
    border-radius: 0px 17px 20px 0px;
    transform: rotate(24deg);
}
.love >div:nth-child(3){
    position: absolute;
    background-color: red;
    width: 19px;
    height: 20px;
    top: -9px;
    left: 7px;
    border-radius: 0px 17px 18px 0px;
    transform: rotate(-69deg);
}
@keyframes loveScore{
    0%{transform: scale(1);}
    50%{transform: scale(0.5);}
    80%{transform: scale(0.8);}
    100%{transform: scale(1);}
}
`

export default style = style