/*
 * @Author      : acmaker
 * @Date        : 2020-05-30 20:56:08
 * @LastEditTime: 2020-06-07 04:25:38
 * @FilePath    : \webapp\js\index.js
 * @Website     : http://csdn.acmaker.vip
 * @Description : 
 */


var cnt_a = 0;
var selector_isbn = null;

$('input[name="findAll"').click(function () {
    MY.ajax(
        "BookController", {
            "method": "findAll"
        },
        function (response) {
            $('#box').html("");
            $('#box').append(
                '<div id="info" class="bg-info text-left lead" style="margin-top:1vh">全部图书查询结果如下: </div><br/>'
            );
            $('#box').append(
                '<div id="show_box" class="row">' +
                '</div>'
            );
            let data = JSON.parse(response.data);
            cnt_a = data.length;
            $.each(data, function (i, v) {
                $('#show_box').append(
                    '<div id="item' + i + '"class="col-lg-3 item_handle">' +
                    '<span id="isbn_' + i + '" style="display:none">' + v.isbn + '</span>' +
                    '<a id="a_' + i + '" href="javascript:void(0)">' +
                    '<div>' + '<img class="img-rounded img-responsive center-block" src="' + v.pic + '" "/>' + '</div>' +
                    '<p class="bg-primary text-center lead">' + v.bookName + '</p>' +
                    '<p class="bg-warning text-center lead ">' + v.description + '</p>' +
                    '</a>' +
                    '</div>'
                );
            });
            for (let i = 0; i < cnt_a; ++i) {
                let selector = '#a_' + i;
                $(selector).bind("click", function () {
                    selector_isbn = '#isbn_' + i;
                    console.log($(selector_isbn).text());
                    MY.ajax(
                        "BookController", {
                            "method": "findByIsbn",
                            "isbn": $(selector_isbn).text()
                        },
                        function (response) {
                            $('#box').html("");
                            $('box').append(
                                '<div>与书号 "' + $(selector_isbn).text() + ' "查询结果如下：</div>'
                            );
                            $('#box').append(
                                '<div id="show_box" class="row">' +
                                '</div>'
                            );
                            let i = 0;
                            let v = JSON.parse(response.data);
                            $('#show_box').append(
                                '<div id="item' + i + ' class="row" style="font-size:200%;">' +
                                '<div id="item' + i + '_pic">' +
                                '<div>' + '<img class="img-rounded img-responsive center-block" src="' + v.pic + '" style="margin-bottom:5vh;"/>' + '</div>' + '</div>' +
                                '<div id="item' + i + '_bookName" class="col-md-4 text-primary">' +
                                '书名: ' + v.bookName + '</div>' +
                                '<div id="item' + i + '_price" class="col-md-4 text-danger">' +
                                "价格: " + v.price + '</div> ' +
                                '<div id="item' + i + '_isbn" class="col-md-4" style="margin-bottom:2vh;">' +
                                "书号: " + v.isbn + '</div>' +
                                '<div id="item' + i + '_description" class="col-md-4 text-muted">' +
                                "简介: " + v.description + '</div>' +
                                '<div id="item' + i + '_publisherId"  class="col-md-4">' +
                                '出版社编号: ' + v.publisherID + '</div>' +
                                '<div id="item' + i + '_count" class="col-md-4 text-success">' +
                                "数量: " + v.count + "</div>" +
                                '<button id="add_cart" class="btn btn-warning btn-lg active col-md-2 col-md-offset-9" name="add_cart" style="margin-top:3vh;" > 加入购物车</button>' +
                                '</div>'
                            )
                            $('#add_cart').on({
                                click: function (e) {
                                    $('#shopping_cart_items').append(
                                        '<li>' +
                                        '<div style="display:inline-block;overflow:hidden;">' + '<img class="img-rounded " src="' + v.pic + '" style="width:100px;height:100px;"/>' + '</div>' + '</div>' +
                                        +'&emsp;&emsp;' + v.bookName + '</div>' +
                                        '</li>'
                                    );
                                }
                            })
                        },
                        function () {
                            $('#box').append(" Error ");
                        }
                    )
                });
            }
        },
        function () {
            $('#box').append(" Error ");
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
            $('#box').html("");
            $('#box').append(
                '<div id="info" class="bg-info text-left lead" style="margin-top:1vh" >与书名 "' + $('input[name="text_bookName"]').val() + ' "有关的查询结果如下： </div><br/>'
            );
            $('#box').append(
                '<div id="show_box" class="row">' +
                '</div>'
            );
            let data = JSON.parse(response.data);
            cnt_a = data.length;
            $.each(data, function (i, v) {
                $('#show_box').append(
                    '<div id="item' + i + '"class="col-lg-3 item_handle">' +
                    '<span id="isbn_' + i + '" style="display:none">' + v.isbn + '</span>' +
                    '<a id="a_' + i + '" href="javascript:void(0)">' +
                    '<div>' + '<img class="img-rounded img-responsive center-block" src="' + v.pic + '"/>' + '</div>' +
                    '<p class="bg-primary text-center lead">' + v.bookName + '</p>' +
                    '<p class="bg-warning text-center lead ">' + v.description + '</p>' +
                    '</a>' +
                    '</div>'
                );
            });
            for (let i = 0; i < cnt_a; ++i) {
                let selector = '#a_' + i;
                $(selector).bind("click", function () {
                    selector_isbn = '#isbn_' + i;
                    console.log($(selector_isbn).text());
                    MY.ajax(
                        "BookController", {
                            "method": "findByIsbn",
                            "isbn": $(selector_isbn).text()
                        },
                        function (response) {
                            $('#box').html("");
                            $('box').append(
                                '<div>与书号 "' + $(selector_isbn).text() + ' "查询结果如下：</div>'
                            );
                            $('#box').append(
                                '<div id="show_box" class="row">' +
                                '</div>'
                            );
                            let i = 0;
                            let v = JSON.parse(response.data);
                            $('#show_box').append(
                                '<div id="item' + i + ' class="row" style="font-size:200%;">' +
                                '<div id="item' + i + '_pic">' +
                                '<div>' + '<img class="img-rounded img-responsive center-block" src="' + v.pic + '" style="margin-bottom:5vh;"/>' + '</div>' + '</div>' +
                                '<div id="item' + i + '_bookName" class="col-md-4 text-primary">' +
                                '书名: ' + v.bookName + '</div>' +
                                '<div id="item' + i + '_price" class="col-md-4 text-danger">' +
                                "价格: " + v.price + '</div> ' +
                                '<div id="item' + i + '_isbn" class="col-md-4" style="margin-bottom:2vh;">' +
                                "书号: " + v.isbn + '</div>' +
                                '<div id="item' + i + '_description" class="col-md-4 text-muted">' +
                                "简介: " + v.description + '</div>' +
                                '<div id="item' + i + '_publisherId"  class="col-md-4">' +
                                '出版社编号: ' + v.publisherID + '</div>' +
                                '<div id="item' + i + '_count" class="col-md-4 text-success">' +
                                "数量: " + v.count + "</div>" +
                                '<button id="add_cart" class="btn btn-warning btn-lg active col-md-2 col-md-offset-9" name="add_cart" style="margin-top:3vh;" > 加入购物车</button>' +
                                '</div>'
                            )
                            $('#add_cart').on({
                                click: function (e) {
                                    $('#shopping_cart_items').append(
                                        '<li>' +
                                        '<div style="display:inline-block;overflow:hidden;">' + '<img class="img-rounded " src="' + v.pic + '" style="width:100px;height:100px;"/>' + '</div>' + '</div>' +
                                        +'&emsp;&emsp;' + v.bookName + '</div>' +
                                        '</li>'
                                    );
                                }
                            })
                        },
                        function () {
                            $('#box').append(" Error ");
                        }
                    )
                });
            }
        },
        function () {
            $('#box').append(" Error ");
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
            $('#box').html("");
            $('box').append(
                '<div>与书号 "' + $('input[name="text_isbn"]').val() + ' "查询结果如下：</div>'
            );
            $('#box').append(
                '<div id="show_box" class="row">' +
                '</div>'
            );
            let i = 0;
            let v = JSON.parse(response.data);
            $('#show_box').append(
                '<div id="item' + i + ' class="row" style="font-size:200%;">' +
                '<div id="item' + i + '_pic">' +
                '<div>' + '<img class="img-rounded img-responsive center-block" src="' + v.pic + '" style="margin-bottom:2vh;"/>' + '</div>' + '</div>' +
                '<div id="item' + i + '_bookName" class="col-md-4 text-primary">' +
                '书名: ' + v.bookName + '</div>' +
                '<div id="item' + i + '_price" class="col-md-4 text-danger">' +
                "价格: " + v.price + '</div> ' +
                '<div id="item' + i + '_isbn" class="col-md-4" style="margin-bottom:2vh;">' +
                "书号: " + v.isbn + '</div>' +
                '<div id="item' + i + '_description" class="col-md-4 text-muted">' +
                "简介: " + v.description + '</div>' +
                '<div id="item' + i + '_publisherId"  class="col-md-4">' +
                '出版社编号: ' + v.publisherID + '</div>' +
                '<div id="item' + i + '_count" class="col-md-4 text-success">' +
                "数量: " + v.count + "</div>" +
                '<button id="add_cart" class="btn btn-warning btn-lg active col-md-2 col-md-offset-9" name="add_cart" style="margin-top:3vh;" > 加入购物车</button>' +
                '</div>'
            );
            $('#add_cart').on({
                click: function (e) {
                    $('#shopping_cart_items').append(
                        '<li>' +
                        '<div style="display:inline-block;overflow:hidden;">' + '<img class="img-rounded " src="' + v.pic + '" style="width:100px;height:100px;"/>' + '</div>' + '</div>' +
                        +'&emsp;&emsp;' + v.bookName + '</div>' +
                        '</li>'
                    );
                }
            })
        },
        function () {
            $('#box').append(" Error ");
        }
    )

});

$('input[name="text_bookName').on('keypress', function (e) {
    $('input[name="find_bookName"').click();
});

$('input[name="text_isbn').on('keypress', function (e) {
    $('input[name="find_isbn"').click();
});

// 

$('#shopping_cart_btn').on({
    mouseover: function (e) {
        $('#shopping_cart_btn').dropdown('toggle')
    },
});

$('#shopping_cart').on({
    mouseout: function (e) {
        $('#shopping_cart_btn').dropdown('toggle')
    }
})