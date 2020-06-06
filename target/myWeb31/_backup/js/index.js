/*
 * @Author      : acmaker
 * @Date        : 2020-05-30 20:56:08
 * @LastEditTime: 2020-06-02 22:55:04
 * @FilePath    : \webapp\js\index.js
 * @Website     : http://csdn.acmaker.vip
 * @Description : 
 */


$('input[name="findAll"').click(function () {
    MY.ajax(
        "BookController", {
            "method": "findAll"
        },
        function (response) {
            $('#showAll_box').html("");
            $('#showAll_box').append(
                '<div>全部图书查询结果如下: </div>'
            );
            $.each(JSON.parse(response.data), function (i, v) {
                $('#showAll_box').append(
                    '<div id="all' + i + '">' +
                    '<span id="all' + i + '_isbn">' +
                    v.isbn + "</span>" +
                    '<span id="all' + i + '_bookName">' +
                    v.bookName + "</span>" +
                    '<span id="all' + i + '_publisherId">' +
                    v.publisherID + "</span>" +
                    '<span id="all' + i + '_price">' +
                    v.price + "</span> " +
                    '<span id="all' + i + '_count">' +
                    v.count + "</span>" +
                    '<span id="all' + i + '_description">' +
                    v.description + "</span>" +
                    '<span id="all' + i + '_pic">' +
                    v.pic + "</span>" +
                    '</div'
                );
            })
        },
        function () {
            $('#showAll_box').append(" Error ");
        }
    )
});

$('input[name="find_bookName"').click(function () {
    MY.ajax(
        "BookController", {
            "method": "findByBookName",
            "bookName": $('input[name="text_bookName"]').val()
        },
        function (response) {
            $('#showItem_box').html("");
            $('#showItem_box').append(
                '<div>与书名 "' + $('input[name="text_bookName"]').val() + ' "有关的查询结果如下：</div>'
            )
            $.each(JSON.parse(response.data), function (i, v) {
                $('#showItem_box').append(
                    '<div id="item' + i + '">' +
                    '<span id="item' + i + '_isbn">' +
                    v.isbn + "</span>" +
                    '<span id="item' + i + '_bookName">' +
                    v.bookName + "</span>" +
                    '<span id="item' + i + '_publisherId">' +
                    v.publisherID + "</span>" +
                    '<span id="item' + i + '_price">' +
                    v.price + "</span> " +
                    '<span id="item' + i + '_count">' +
                    v.count + "</span>" +
                    '<span id="item' + i + '_description">' +
                    v.description + "</span>" +
                    '<span id="item' + i + '_pic">' +
                    v.pic + "</span>" +
                    '</div'
                );
            })
        },
        function () {
            $('#showItem').append(" Error ");
        }
    )
});

$('input[name="find_isbn"').click(function () {
    MY.ajax(
        "BookController", {
            "method": "findByIsbn",
            "isbn": $('input[name="text_isbn"]').val()
        },
        function (response) {
            $('#showItem_box').html("");
            $('#showItem_box').append(
                '<div>与书号 "' + $('input[name="text_isbn"]').val() + ' "查询结果如下：</div>'
            );
            let i = 0;
            let v = JSON.parse(response.data);
            $('#showItem_box').append(
                '<div id="item' + i + '">' +
                '<span id="item' + i + '_isbn">' +
                v.isbn + "</span>" +
                '<span id="item' + i + '_bookName">' +
                v.bookName + "</span>" +
                '<span id="item' + i + '_publisherId">' +
                v.publisherID + "</span>" +
                '<span id="item' + i + '_price">' +
                v.price + "</span> " +
                '<span id="item' + i + '_count">' +
                v.count + "</span>" +
                '<span id="item' + i + '_description">' +
                v.description + "</span>" +
                '<span id="item' + i + '_pic">' +
                v.pic + "</span>" +
                '</div'
            )
        },
        function () {
            $('#showItem_box').append(" Error ");
        }
    )
});

$('input[name="text_bookName').bind('keypress', function (e) {
    $('input[name="find_bookName"').click();
});

$('input[name="text_isbn').bind('keypress', function (e) {
    $('input[name="find_isbn"').click();
});