import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
:root{
    --maxWidth: 1280px;
    --white: #ffffff;
    --black: #020202;
    --blue: #5CB8B2;
    --brown: #774212;
    --lightbrown: #DDCBA4;
    --fontSuperBig: 2.5rem;
    --fontBig: 1.5rem;
    --fontMed: 1.2rem;
    --fontSmall: 1rem;
    scroll-behavior: smooth;
}
*{
    box-sizing: border-box;

}

body{
    margin: 0;
    padding: 0;
    font-family: "MyFont2";
    #html{
        color:#e34c26;
    }
    #css{
        color:#2965f1;
    }
    #js{
        color:#f0db4f;
    }
    #nodejs{
        color:#68a063;
    }
    #react{
        color:#61DBFB;
    }
    .Icon{
        display: block;
        margin: auto;
    }
    .container {
  display: flex;
  flex-wrap: wrap;
  max-width: 1300px;
  justify-content: center;
  margin: auto;
  
}
.last{
  padding-top: 5px;
}
.right{
    float: right;
     @media (max-width: 768px) {
             float: none;
  }
}
span{
    display: block;
}

.primero{
     animation: zoomin 1s ;
    @keyframes zoomin {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
}
.segundo{
    animation: zoomin 2s ;
    @keyframes zoomin {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
}
.tercero{
    animation: zoomin 3s ;
    @keyframes zoomin {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
        
  }
     
}
 @media (max-width: 768px) {
            padding-bottom: 10px;
  }
}
.cuarto{
   animation: zoomin 4s ;
    @keyframes zoomin {
  0% {
    -webkit-transform: scale(0);
            transform: scale(0);
  }
  100% {
    -webkit-transform: scale(1);
            transform: scale(1);
        
  }
     
}
 @media (max-width: 768px) {
            padding-bottom: 10px;
  }
}
.hei{
    height: 300px;
     @media (max-width: 700px) {
            height: 0;
  }
}
    hr{
    height: 0.1px;
    width: 100%;
    background-color: var(--white);
    margin: none;
    }
    .foot{
        padding-bottom: 20px;
    }
    .menu{
        display: none;
         @media (max-width: 768px) {
            display: flex;
  }
    }

    h1{
        font-size: 2rem;
        font-weight: 600;
        color: var(--black);

    }
    h3{
        font-size: 1.1rem;
        font-weight: 600;
    }
    p{
        font-size: 1rem;
        color: var(---white);
    }
}
@keyframes showTopText {
  0% { transform: translate3d(0, 100%, 0); }
  40%, 60% { transform: translate3d(0, 50%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
@keyframes showBottomText {
  0% { transform: translate3d(0, -100%, 0); }
  100% { transform: translate3d(0, 0, 0); }
}
.animated-title {
  color:var(--white);
  height: 90vmin;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 90vmin;
  margin: auto;
  display: block;
}
.animated-title > div {
  height: 50%;
  overflow: hidden;
  position: absolute;
  width: 100%;
}
.animated-title > div div {
  font-size: var(--fontSuperBig);
  padding: 0;
  position: absolute;
  @media (max-width: 768px) {
             font-size: var(--fontBig);
  }
}
.animated-title > div div span {
  display: block;
}
.animated-title > div.text-top {
  border-bottom: 1vmin solid var(--white);
  top: 0;
}
.animated-title > div.text-top div {
  animation: showTopText 1s;
  animation-delay: 0.5s;
  animation-fill-mode: forwards;
  
  bottom: 0;
  transform: translate(0, 100%);
}
.animated-title > div.text-top div span:first-child {
  color: var(--white);
}
.animated-title > div.text-bottom {
  bottom: 0;
}
.animated-title > div.text-bottom div {
  animation: showBottomText 0.5s;
  animation-delay: 1.75s;
  animation-fill-mode: forwards;
  top: 0;
  transform: translate(0, -100%);
}
.demo a {
  position: absolute;
  bottom: 50px;
  left: 50%;
  z-index: 2;
  display: inline-block;
  -webkit-transform: translate(0, -50%);
  transform: translate(0, -50%);
  color: #fff;
  font : normal 400 20px/1 'Josefin Sans', sans-serif;
  letter-spacing: .1em;
  text-decoration: none;
  transition: opacity .3s;
}
.demo a:hover {
  opacity: .5;
  color:var(---yellow);
}
#section05 a {
  padding-top: 70px;
}
#section05 a span {
  position: absolute;
  top: 170px;
  left: 50%;
  width: 24px;
  height: 24px;
  margin-left: -12px;
  border-left: 3px solid #fff;
  border-bottom: 3px solid #fff;
  -webkit-transform: rotate(-45deg);
  transform: rotate(-45deg);
  -webkit-animation: sdb05 1.5s infinite;
  animation: sdb05 1.5s infinite;
  box-sizing: border-box;
  
}
@-webkit-keyframes sdb05 {
  0% {
    -webkit-transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    -webkit-transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
@keyframes sdb05 {
  0% {
    transform: rotate(-45deg) translate(0, 0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: rotate(-45deg) translate(-20px, 20px);
    opacity: 0;
  }
}
.whats{
  color:#25D366;
}
.google{
  color:#DB4437;
}
.pt{
  padding-top: 0px;
  padding-bottom: 50px;
}
.ptp{
  padding-top: 0px;
}
.pin{
  color:#80604D;
}
.ab{
  color: var(--blue);
  @media (max-width: 768px) {
           font-size: 5rem;
  }
  :hover{
    color:var(--yellow);
  }
   
}
.big{
  h1{
font-size: var(--fontSuperBig);
  }
  
}
.ad{
    margin: auto;
    text-align: center;
  color: var(--blue);
  @media (max-width: 768px) {
           font-size: 5rem;
  }
  :hover{
    color:var(--yellow);
  }
}
.db{
  display: none;
  @media (max-width: 768px) {
            display: block;
  }
}
.dp{
  display: unset;
  @media (max-width: 768px) {
            display: none;
  }
}
.hom{
  
}
.user{
margin-right: 10px;
}
.google{
  border: none;
  height: 400px;
  width: 400px;
  text-align:center;
  @media (max-width: 768px) {
           padding: 0;
           height: 300px;
           width: auto;
  }
}
.icon{
  font-size: 1.5rem;
}
`;
