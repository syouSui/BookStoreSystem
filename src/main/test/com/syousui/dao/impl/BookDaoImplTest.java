package com.syousui.dao.impl; 

import com.syousui.model.Book;
import org.junit.Test;
import org.junit.Before; 
import org.junit.After;

import java.util.ArrayList;
import java.util.List;

/** 
* BookDaoImpl Tester. 
* 
* @author <Authors name> 
* @since <pre>5�� 31, 2020</pre> 
* @version 1.0 
*/ 
public class BookDaoImplTest { 

@Before
public void before() throws Exception { 
} 

@After
public void after() throws Exception { 
} 

/** 
* 
* Method: findAll() 
* 
*/ 
@Test
public void testFindAll() throws Exception { 
//TODO: Test goes here... 
} 

/** 
* 
* Method: findByBookName(String bookName) 
* 
*/ 
@Test
public void testFindByBookName() throws Exception {
    BookDaoImpl bookDao = new BookDaoImpl( );
    List<Book> arrayList = bookDao.findByBookName( "C++" );
}

/** 
* 
* Method: findByIsbn(String isbn) 
* 
*/ 
@Test
public void testFindByIsbn() throws Exception { 
//TODO: Test goes here... 
} 


} 
