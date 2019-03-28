
let hamburgerMenu = $('.hamburger-icon')
let sideMenu =$('.side-menu')
let hamburger =$('.hamburger-icon')
let close =$('#close')

//sideMenu.css('display', 'none')

hamburgerMenu.on('click', function(){
    hamburger.css('display', 'none')
    sideMenu.css('display', 'flex')
    sideMenu.animate({
        width: 180
    },1000)


})
close.on('click', function(){
    sideMenu.animate({
        width: 0
    },700, function(){
        hamburger.css('display', 'flex')
        sideMenu.css('display', 'none')
    })
     
})    

