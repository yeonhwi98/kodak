$(document).ready(function(){



   


    $(window).scroll(function(){

    

        var sct = $(window).scrollTop();
        console.log(sct);




      
        if(sct >= 600){
            $('.title').addClass('title_active')
        }if(sct >= 700){
            $('.title_1').addClass('title_active_1')
        }if(sct >= 770){
            $('.img_ani1').addClass('img_ani1_active')
        }
        if(sct >= 1400){
            $('.title_ani2').addClass('title_ani2_active')
        }if(sct >= 1410){
            $('.title_ani2_1').addClass('title_ani2_1_active')
        }if(sct >= 1450){
            $('.title_ani2_3').addClass('title_ani2_3_active')
        }
        if(sct >= 1700){
            $('.img_ani2').addClass('img_ani2_active')
        } if(sct >= 1800){
            $('.img_ani2_2').addClass('img_ani2_2_active')
        }if(sct >= 1900){
            $('.title_ani2_4').addClass('title_ani2_4_active')
        }


        if(sct >= 2900){
            $('.con_4_2img1').addClass('con_4_2img1_active')
        }if(sct >= 3200){
            $('.con_4_2img2').addClass('con_4_2img2_active')
        }if(sct >= 3300){
            $('.img_ani4_3').addClass('img_ani4_3_active')
        }if(sct >= 3500){
            $('.title_ani4').addClass('title_ani4_active')
        }


        if(sct >= 3600){
            $('.cameramore').addClass('cameramore_active')
        }

        if(sct >= 4700){
            $('.title_ani6').addClass('title_ani6_active')
        }if(sct >= 4800){
            $('.title_ani6_1').addClass('title_ani6_1_active')
        }if(sct >= 4900){
            $('.title_ani6_2').addClass('title_ani6_2_active')
        }if(sct >= 5100){
            $('.title_ani6_3').addClass('title_ani6_3_active')
        }if(sct >= 5200){
            $('.img6').addClass('img6_active')
        }if(sct >= 5400){
            $('.more').addClass('more_active')
        }



        



    



    });


   
    mybutton = document.getElementById("myBtn");

    // When the user scrolls down 20px from the top of the document, show the button
    window.onscroll = function() {scrollFunction()};

    function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
    }

    // When the user clicks on the button, scroll to the top of the document
    function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }


    
    // funtion toggleImg() {
    //     document.getElementById("img_wrap_7").src = "./img"
    // }





});






