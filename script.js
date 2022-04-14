function pageLoad(){
$(function() {
     $('.tek-cont', 'body').click(function() {
         $('.tek-cont').toggleClass('tek-animate');
         $('body').toggleClass('meme');
        });
    });
}
$(document).ready(pageLoad);