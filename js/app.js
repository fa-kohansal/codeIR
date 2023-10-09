// import Swiper from "../node_modules/swiper/swiper-bundle.min";

setTimeout(function (){
    document.querySelector('.loading').style.display="none"
    $('.wrapper').addClass('d-flex')
    $('.wrapper').removeClass('d-none')
},3000)
setTimeout(function (){
    $('.sidebar').fadeIn(800).addClass('animate__animated animate__fadeInLeft')
    $('.content').fadeIn(800).addClass('animate__animated animate__fadeInRight')
},3000)
$('#home').click(()=>{
    $('#ourProject').addClass('d-none')
})
$('#projectBtn').click(()=>{
    $('#homePage').addClass('d-none');
    $('#ourProject').removeClass('d-none')
})
