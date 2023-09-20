setTimeout(function (){
    document.querySelector('.loading').style.display="none"
    $('.wrapper').addClass('d-flex')
    $('.wrapper').removeClass('d-none')
},3000)
$('#home').click(()=>{
    $('#ourProject').addClass('d-none')
})
$('#projectBtn').click(()=>{
    $('#homePage').addClass('d-none');
    $('#ourProject').removeClass('d-none')
})