const sliderHeader = () => {
    var headerBg = document.querySelector("#header");
    var bg = [
        './image/burguerHeader.jpg',
        './image/burguerHeader2.jpg',
        './image/burguerHeader3.jpg'
    ]

    var i = 0;
    setInterval(function(){
        headerBg.style.backgroundImage = `url(${bg[i]})`;
        i++
        if(i === 3){
            i = 0 ;
        }
    },3000)
}
 export default sliderHeader;

