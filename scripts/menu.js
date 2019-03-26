
let hamburgerMenu = $('.hamburger-icon')
let sideMenu =$('.side-menu')
let hamburger =$('.hamburger-icon')
let close =$('#close')

sideMenu.css('display', 'none')

hamburgerMenu.on('click', function(){
    sideMenu.css('display', 'flex')
    hamburger.css('display', 'none')
    sideMenu.animate({
        width: 180
    },1000,function(){
        hamburger.css('display', 'flex')
        sideMenu.css('display', 'none')
    })


})
close.on('click', function(){
    sideMenu.animate({
        width: 0
    },700, function(){
        hamburger.css('display', 'flex')
        sideMenu.css('display', 'none')
    })
     
})    

