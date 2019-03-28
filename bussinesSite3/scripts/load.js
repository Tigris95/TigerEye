let trigger = $('.pin, .logo, .side, .name')
let container = $('.main')
container.load('home.html')
$('.side-menu').css('display', 'none')

trigger.on('click', function(){ 
    let $this = $(this)
        target = $this.data('target')
        if(target === 'home'){
            container.load(`${target}.html`)
        }else{
            container.load(`${target}.html #${target}` )
            }
            console.log(target) 
            sideMenu.animate({
                width: 0
            },1000, function(){
                $('.hamburger-icon').css('display', 'flex')
                sideMenu.css('display', 'none')
            })
})
trigger.on('mouseenter',function(){

    let $this = $(this)   
        title = $this.data('title');
        $('.title').html(title)
        $('.title').animate({
            opacity: 1,
        },500)    
})
trigger.on('mouseleave',function(){
    
    $('.title').animate({
        opacity: 0
    },500)   
})