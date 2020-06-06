/*
 * @Author      : acmaker
 * @Date        : 2020-05-31 14:49:27
 * @LastEditTime: 2020-06-06 20:57:20
 * @FilePath    : \webapp\js\MY.js
 * @Website     : http://csdn.acmaker.vip
 * @Description : 
 */


// 1.0.0

var MY = {
    URL: "",
    ajax: function (url, parameter, func_success, func_error) {
        $.ajax({
            url: MY.URL + url,
            type: "POST",
            dataType: "json",
            async: true,
            data: parameter,
            success: function (response, status, xhr) {
                func_success(response, status, xhr);
            },
            error: function () {
                func_error();
            },
            crossDomain: true,
            xhrFields: {
                withCredentials: true
            }
        });
    },
}