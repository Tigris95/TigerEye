
let hamburgerMenu = $('.hamburger-icon')
let sideMenu =$('.side-menu')
let hamburger =$('.hamburger-icon')
let close =$('#close')

hamburgerMenu.on('click', function(){
    sideMenu.css('display', 'flex')
    hamburger.css('display', 'none')
    sideMenu.animate({
        width: 200
    },1000)


})
close.on('click', function(){
    sideMenu.animate({
        width: 0
    },700, function(){
        hamburger.css('display', 'flex')
    })
     
})    

