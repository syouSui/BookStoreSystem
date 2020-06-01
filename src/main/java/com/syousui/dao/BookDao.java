/**
 * @Author : acmaker
 * @Date : 2019-12-11 16:56:20
 * @LastEditTime: 2020-04-22 01:48:27
 * @FilePath : \PersonalWebpage\src\com\supreme\dao\BookDao.java
 * @Website : http://csdn.acmaker.vip
 * @Description :
 */

package com.syousui.dao;

import com.syousui.model.Book;

import java.sql.SQLException;
import java.util.List;

public interface BookDao {

    public List<Book> findAll ( );

    public List<Book> findByBookName ( String bookName );

    public Book findByIsbn ( String isbn );

}
