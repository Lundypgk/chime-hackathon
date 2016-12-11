
$(function () {

    "use strict";

  $('.btn-loading').on('click',function(e){
        var button = $(this);
        button.loadingButton();
        setTimeout(function () {
            button.loadingButton({action:'stop'});
        }, 2000);
    });
});

