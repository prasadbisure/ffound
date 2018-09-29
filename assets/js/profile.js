/**
 * Created by prsd on 08-04-2018.
 */
$(document).on("change",".logo_upload",function () {

    var form = $('.form-horizontal')[0];
    var data = new FormData(form);
    var url = "site/profileLogoUpdate";
    
    //console.log(url);
    $.ajax({
        url: url,
        type: 'POST',
        data: data,
        cache: false,
        contentType: false,
        enctype: 'multipart/form-data',
        processData: false,
        success: function (response) {
            console.log(response);
            $('.logo-img').attr('src',response);
        }
    });


});