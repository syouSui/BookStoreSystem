/**
 * @Author      : acmaker
 * @Date        : 2019-12-11 16:56:20
 * @LastEditTime: 2020-04-22 02:04:23
 * @FilePath    : \PersonalWebpage\src\com\supreme\dao\imp\BookDaoImp.java
 * @Website     : http://csdn.acmaker.vip
 * @Description : 
 */

package com.syousui.dao.impl;


import com.syousui.dao.BookDao;
import com.syousui.model.Book;
import com.syousui.util.C3P0Utils;
import org.apache.commons.dbutils.QueryRunner;
import org.apache.commons.dbutils.handlers.BeanHandler;
import org.apache.commons.dbutils.handlers.BeanListHandler;

import java.sql.Connection;
import java.sql.SQLException;
import java.util.ArrayList;
import java.util.List;

public class BookDaoImpl extends C3P0Utils implements BookDao {
    private static final String FINDAll = "select * from book;";
    private static final String FINDBy_bookName = "select * from books where bookName like '%'|| ? ||'%';";
    private static final String FINDBy_isbn = "select * from books where isbn=?";

    @Override
    public List<Book> findAll ( ) {
        List<Book> list = new ArrayList<>( );
        Connection conn = super.getConnection();
        Object[] param = new Object[] { };
        try {
            list = new QueryRunner(super.getDataSource()).query(
                    super.getConnection(),
                    FINDAll,
                    new BeanListHandler<>(Book.class),
                    param
            );
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        super.closeConnection( conn );
        return list;
    }
    @Override
    public List<Book> findByBookName ( String bookName ) throws SQLException {
        List<Book> list = new ArrayList<>( );
        Connection conn = super.getConnection();
        Object[] param = new Object[] { };
        try {
            list = new QueryRunner(super.getDataSource()).query(
                    super.getConnection(),
                    FINDBy_bookName,
                    new BeanListHandler<>(Book.class),
                    param
            );
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        super.closeConnection( conn );
        return list;
    }
    @Override
    public Book findByIsbn ( String isbn ) {
        Book book = null;
        Connection conn = super.getConnection();
        Object[] param = new Object[] { };
        try {
            book = new QueryRunner(super.getDataSource()).query(
                    super.getConnection(),
                    FINDBy_isbn,
                    new BeanHandler<>(Book.class),
                    param
            );
        } catch (SQLException throwables) {
            throwables.printStackTrace();
        }
        super.closeConnection( conn );
        return book;
    }
}
