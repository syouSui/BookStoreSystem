package com.syousui.service;

import com.syousui.dao.BookDao;
import com.syousui.dao.impl.BookDaoImpl;
import com.syousui.model.Book;
import com.syousui.util.ResultVo;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;
import java.util.List;

/**
 * @author acmaker
 * @version 1.0.0
 * @ClassName BookService.java
 * @PackageLoaction com.syousui.service
 * @createTime 2020-05-31 10:00:00 星期日
 * @Description TODO
 */
public class BookService {
    static BookDao bookDao = new BookDaoImpl( );

    public void test ( ) {
        System.out.println( "yes" );
    }

    public void findAll ( HttpServletRequest request, HttpServletResponse response ) throws IOException {
        response.getWriter( ).println(
                new ResultVo(
                        1,
                        "successful",
                        bookDao.findAll( )
                ).toJSON( )
        );
        System.out.println( "yes" );
    }

    public void findByIsbn ( HttpServletRequest request, HttpServletResponse response ) throws IOException {
        response.getWriter( ).println(
                new ResultVo(
                        1,
                        "successful",
                        bookDao.findByIsbn( request.getParameter( "isbn" ) )
                ).toJSON( )
        );
        System.out.println( "yes" );
    }

    public void findByBookName ( HttpServletRequest request, HttpServletResponse response ) throws IOException {
        List<Book> list = bookDao.findByBookName( request.getParameter( "bookName" ) );
        response.getWriter( ).println(
                new ResultVo(
                        1,
                        "successful",
                        bookDao.findByBookName( request.getParameter( "bookName" ) )
                ).toJSON( )
        );
        System.out.println( "yes" );
    }
}
