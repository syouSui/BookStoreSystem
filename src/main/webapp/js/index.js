/*
 * @Author      : acmaker
 * @Date        : 2020-05-30 20:56:08
 * @LastEditTime: 2020-05-30 22:37:22
 * @FilePath    : \BookStoreSystem\src\main\webapp\js\index.js
 * @Website     : http://csdn.acmaker.vip
 * @Description : 
 */


$('input[name="findAll"').click(function () {
    $.ajax({
        // url: "/BookController",
        // url: "../test/test.json",
        url: "http://127.0.0.1:5500/src/main/webapp/test/test.json",
        async: false,
        // data: {
        //     "method":"findAll",
        //     "parameter":[
        //     ]
        // },
        // type: "POST",
        dataType: "json",
        success: function (receive) {
            // $('#showAll_box').append( " Ok ");
            // $('#showAll_box').append( receive.code );
            // $('#showAll_box').append( receive.message );
            $('#showAll_box').append( '<div id="item">' );
            $('#showAll_box').append( receive.data.isbn );
            $('#showAll_box').append( receive.data.bookName );
            $('#showAll_box').append( receive.data.publisherId );
            $('#showAll_box').append( receive.data.price );
            $('#showAll_box').append( receive.data.count );
            $('#showAll_box').append( receive.data.description );
            $('#showAll_box').append( receive.data.pic );
            $('#showAll_box').append( '</div>' );
        },
        error: function () {
            $('#showAll_box').append( " Error ");
        }
    });
});