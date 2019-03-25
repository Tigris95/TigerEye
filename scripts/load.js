let trigger = $('.pin, .logo, .side, .name')
let container = $('.main')
container.load('home.html')

trigger.on('click', function(){ 
    let $this = $(this)
        target = $this.data('target')
        if(target === 'home'){
            container.load(`${target}.html`)
        }else{
            container.load(`${target}.html #${target}` )
            }
            console.log(target) 
            $('.side-menu').animate({
                width: 0
            },1000, function(){
                $('.hamburger-icon').css('display', 'flex')
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