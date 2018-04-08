/**
 * Created by prsd on 08-04-2018.
 */
$(document).on("change","#profile_pic",function () {

    var form = $('#form_uplocad_profile_pic')[0];
    var data = new FormData(form);
    var url = $("#form_uplocad_profile_pic").attr("action");

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
            $('#profile_img').attr('src',response);
        }
    });


});