$(function () {

    $(document).on('click', '#auth', function () {
        let username = $("#username").val();
        let password = $("#password").val();
        let url = $("#auth_url").val();
        let user = {
            "username": username,
            "password": password
        }
        $.ajax({
            url: url,
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(user),
        }).always(function (data) {
            console.log(data);
            $("auth_key").val(data.authToken);
            $("#text").val(data);
        });
    });

    $(document).on('click', '#get', function () {
        let get_url = $("#get_url").val();
        $.get(get_url, function (data) {
            console.log(data);
            $("#text").val(data);
        });
    });

    $(document).on('click', '#post', function () {
        let post_url = $("#post_url").val();
        let obj = JSON.parse($("#post_body").val());
        $.ajax({
            url: post_url,
            type: 'post',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(obj),
        }).always(function (data) {
            console.log(data);
            $("#text").val(data);
        });
    });

    $(document).on('click', '#put', function () {
        let put_url = $("#put_url").val();
        let obj = JSON.parse($("#put_body").val());
        $.ajax({
            url: put_url,
            type: 'put',
            dataType: 'json',
            contentType: 'application/json',
            data: JSON.stringify(obj),
        }).always(function (data) {
            console.log(data);
            $("#text").val(data);
        });
    });

    $(document).on('click', '#delete', function () {
        let delete_url = $("#delete_url").val();
        $.ajax({
            url: delete_url,
            type: 'delete',
            dataType: 'json',
            contentType: 'application/json'
        }).always(function (data) {
            console.log(data);
            $("#text").val(data);
        });
    });
});