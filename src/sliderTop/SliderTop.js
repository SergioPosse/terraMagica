import React, { useEffect, useRef } from 'react';
import './SliderTop.css';

const SliderTop = () => {

    const slideImg = useRef(["https://cdn.pixabay.com/photo/2016/08/15/14/35/lavender-1595581_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/09/09/17/38/basil-932079_1280.jpg",
        "https://cdn.pixabay.com/photo/2016/11/08/05/35/agriculture-1807549_1280.jpg",
        "https://cdn.pixabay.com/photo/2015/03/07/13/55/tomato-663097_1280.jpg",
        "https://cdn.pixabay.com/photo/2020/06/21/16/57/tomatoes-5325850_1280.jpg"]);

    const sliderTop = useRef();

    const setSlide = (container,arrImg)=>{
            let count =0;
            

           for(let i=0;i<arrImg.length;i++){
                count=count+1
                console.log("len before: ",container.childNodes.length);

                while(container.childNodes.length>1){
                    container.removeChild(container.firstChild);
    
                }
                console.log("len after: ",container.childNodes.length);
                setTimeout(()=>{
                    let sec = document.createElement("section");
                    let ima = document.createElement("img");
                    ima.src=arrImg[arrImg.length-i-1];
                    sec.appendChild(ima);
                    container.appendChild(sec);
                },2000*count)
            };
    }

    useEffect(()=>{
            let firstImg = document.createElement("div");
            let ima = document.createElement("img");
            ima.src=slideImg.current[0];
            firstImg.appendChild(ima);
            sliderTop.current.appendChild(firstImg);

        setSlide(sliderTop.current, slideImg.current);

    //    setInterval(()=>{
    //     setSlide(sliderTop.current, slideImg.current);
    //    },2000*slideImg.current.length);
    },[])


    

    return (
        <div ref={ sliderTop } className="sliderTop-container">
        </div>
    );
};

export default SliderTop;