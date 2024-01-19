// Video Variables
const video1 = document.getElementById('video1');
const video2 = document.getElementById('video2');
const video3 = document.getElementById('video3');
const video4 = document.getElementById('video4');
const videos = [video1, video2, video3, video4];
let videoIndex = 0;
let pausedAt = 0;

// Mobile Nav
function mobiletab() {
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }


//   Video Slideshow
video1.onended = function () {
    videoIndex=1;
    video2.play();
    video1.style.opacity=0;
    video2.style.opacity=1;
}

video2.onended = function () {
    videoIndex=2;
    video3.play();
    video2.style.opacity=0;
    video3.style.opacity=1;
}

video3.onended = function () {
    videoIndex=3;
    video4.play();
    video3.style.opacity=0;
    video4.style.opacity=1;
}

video4.onended = function () {
    videoIndex=0;
    video1.play();
    video4.style.opacity=0;
    video1.style.opacity=1;
}

changeVideo = () => {
    switch (videoIndex) {
        case 0:
            video1.currentTime = 0;
            video1.pause();
            videoIndex++;
            video2.play();
            video1.style.opacity=0;
            video2.style.opacity=1;
            break;
        case 1:
            video2.currentTime = 0;
            video2.pause();
            video3.play();
            video2.style.opacity=0;
            video3.style.opacity=1;
            videoIndex++;
            break;
        case 2:
            video3.currentTime = 0;
            video3.pause();
            video4.play();
            videoIndex++;
            video3.style.opacity=0;
            video4.style.opacity=1;
            break;
        case 3:
            video4.currentTime = 0;
            video4.pause();
            video1.play();
            videoIndex=0;
            video4.style.opacity=0;
            video1.style.opacity=1;
            break;
    }
}

changeVideoBack = () => {
    switch (videoIndex) {
        case 0:
            video1.currentTime = 0;
            video1.pause();
            videoIndex=3;
            video4.play();
            video1.style.opacity=0;
            video4.style.opacity=1;
            break;
        case 1:
            video2.currentTime = 0;
            video2.pause();
            video1.play();
            video2.style.opacity=0;
            video1.style.opacity=1;
            videoIndex--;
            break;
        case 2:
            video3.currentTime = 0;
            video3.pause();
            video2.play();
            videoIndex--;
            video3.style.opacity=0;
            video2.style.opacity=1;
            break;
        case 3:
            video4.currentTime = 0;
            video4.pause();
            video3.play();
            videoIndex--;
            video4.style.opacity=0;
            video3.style.opacity=1;
            break;
    }
}

pauseOrPlay = () => {
    if (videos[videoIndex].currentTime === pausedAt) {
        videos[videoIndex].play();
        pausedAt = null;
    }
    else {
        videos[videoIndex].pause();
        pausedAt = videos[videoIndex].currentTime;
    }
}

// End Video Slideshow

// Car cards
newJDM = () => {
    document.getElementById('firstCar').src = "images/nsx.jpg";
    document.getElementById('car_text_1').innerHTML = '2023 | Hybrid Available';
    document.getElementById('head_text_1').innerHTML = 'Acura NSX';
    document.getElementById('tagline_1').innerHTML = 'Drive Fast, Save Fast.';
    document.getElementById('price_1').innerHTML = '$169,000';
    document.getElementById('mpg_1').innerHTML = '22/21';
    document.getElementById('secondCar').src = "images/supra.jpg";
    document.getElementById('car_text_2').innerHTML = '2023 | Hybrid Available';
    document.getElementById('head_text_2').innerHTML = 'GR Supra';
    document.getElementById('tagline_2').innerHTML = 'Make your mark with a motorsport masterpiece.';
    document.getElementById('price_2').innerHTML = '$44,640';
    document.getElementById('mpg_2').innerHTML = '25/31';
    document.getElementById('thirdCar').src = "images/miata.jpg";
    document.getElementById('car_text_3').innerHTML = '2023 | Hybrid Available';
    document.getElementById('head_text_3').innerHTML = 'Mazda MX-5';
    document.getElementById('tagline_3').innerHTML = 'Fun at first sight.';
    document.getElementById('price_3').innerHTML = '$28,050';
    document.getElementById('mpg_3').innerHTML = '26/34';

}

imported = () => {
    document.getElementById('firstCar').src = "images/wrx.jpg"; //Type R STI 2001
    document.getElementById('car_text_1').innerHTML = '2001';
    document.getElementById('head_text_1').innerHTML = 'Subaru WRX';
    document.getElementById('tagline_1').innerHTML = "It's Not Just for Vermonters any More.";
    document.getElementById('price_1').innerHTML = '$3,000';
    document.getElementById('mpg_1').innerHTML = '27/20';
    document.getElementById('secondCar').src = "images/silvia.jpg"; //1998 s15 Silvia
    document.getElementById('car_text_2').innerHTML = '1998';
    document.getElementById('head_text_2').innerHTML = 'Nissan Silvia';
    document.getElementById('tagline_2').innerHTML = 'Efficiency and performance, together in perfect harmony.';
    document.getElementById('price_2').innerHTML = '$15,560';
    document.getElementById('mpg_2').innerHTML = '30/25';
    document.getElementById('thirdCar').src = "images/datsun.jpg"; //Datsun 280z 1971
    document.getElementById('car_text_3').innerHTML = '1976';
    document.getElementById('head_text_3').innerHTML = 'Datsun 280z';
    document.getElementById('tagline_3').innerHTML = 'More style for every mile';
    document.getElementById('price_3').innerHTML = '$29,700';
    document.getElementById('mpg_3').innerHTML = '17/13';
}

oldJDM = () => {
    document.getElementById('firstCar').src = "images/rx7.avif"; //1993
    document.getElementById('car_text_1').innerHTML = '1993';
    document.getElementById('head_text_1').innerHTML = 'Mazda RX7';
    document.getElementById('tagline_1').innerHTML = 'Enjoy your daily dose of fun in style.';
    document.getElementById('price_1').innerHTML = '$43,550';
    document.getElementById('mpg_1').innerHTML = '23/15';
    document.getElementById('secondCar').src = "images/skyline.jpg"; //1999
    document.getElementById('car_text_2').innerHTML = '1999';
    document.getElementById('head_text_2').innerHTML = 'GTR Skyline';
    document.getElementById('tagline_2').innerHTML = 'All eyes on you.';
    document.getElementById('price_2').innerHTML = '$316,670';
    document.getElementById('mpg_2').innerHTML = '16.3';
    document.getElementById('thirdCar').src = "images/eclipse.jpg"; //1998
    document.getElementById('car_text_3').innerHTML = '1998';
    document.getElementById('head_text_3').innerHTML = 'Eclipse';
    document.getElementById('tagline_3').innerHTML = 'Become one with speed';
    document.getElementById('price_3').innerHTML = '$2,500';
    document.getElementById('mpg_3').innerHTML = '29/20';
}

earlyJDM = () => {
    document.getElementById('firstCar').src = "images/lancer.png"; // 2008
    document.getElementById('car_text_1').innerHTML = '2008';
    document.getElementById('head_text_1').innerHTML = 'Lancer EVO';
    document.getElementById('tagline_1').innerHTML = 'Drive your ambition.';
    document.getElementById('price_1').innerHTML = '$22,150';
    document.getElementById('mpg_1').innerHTML = '22/17';
    document.getElementById('secondCar').src = "images/s2000.jpg"; //2009
    document.getElementById('car_text_2').innerHTML = '2009';
    document.getElementById('head_text_2').innerHTML = 'Honda s2000';
    document.getElementById('tagline_2').innerHTML = "A style they just can't beat";
    document.getElementById('price_2').innerHTML = '$30,000';
    document.getElementById('mpg_2').innerHTML = '26/20';
    document.getElementById('thirdCar').src = "images/GTR.jpg"; //2017
    document.getElementById('car_text_3').innerHTML = '2017';
    document.getElementById('head_text_3').innerHTML = 'Nissan GTR';
    document.getElementById('tagline_3').innerHTML = 'Elegant design, redefined.';
    document.getElementById('price_3').innerHTML = '$90,098';
    document.getElementById('mpg_3').innerHTML = '22/16';
}

changeFunc = () => {
    var selectbox = document.getElementById("selectBox");
    var selectedValue = selectBox.options[selectBox.selectedIndex].value;
    switch (selectedValue) {
        case '1':
            newJDM()
            break;
        case '2':
            imported();
            break;
        case '3':
            oldJDM();
            break;
        case '4':
            earlyJDM();
            break;

    }
}


// Window Redirects
chat = () => {
    window.location.replace("contact.html");
}

inv = () => {
    window.location.replace("inventory.html");
}