

$('.counter').counterUp({
    delay: 10,
    time: 3000
});

function myFunction(){
    alert("Thank You For Giving Your Valuable Time. We'll Get Back Soon...");
}

function myFunction(e) {
    e.preventDefault();
    // do stuff
}

//Get the Button
mybutton = document.getElementById("myBtn");

//show on scroll down 20px

window.onscroll = function(){
    scrollfunction();
}

function scrollfunction(){
    if(document.body.scrollTop > 500 || document.documentElement.scrollTop > 500){
        mybutton.style.display = "block";
    }else{
        mybutton.style.display = "none";
    }
}

function topFunction(){
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
}

new WOW().init();