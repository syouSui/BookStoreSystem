package com.syousui.controller;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;

/**
 * @author acmaker
 * @version 1.0.0
 * @ClassName ${NAME}.java
 * @PackageLoaction ${PACKAGE_NAME}
 * @createTime 2020-05-30 21:12:00 星期六
 * @Description TODO
 */
@WebServlet ( "/BookController" )
public class BookController extends HttpServlet {
    protected void doPost ( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException {
//        request.getParameter( "")
    }

    protected void doGet ( HttpServletRequest request, HttpServletResponse response ) throws ServletException, IOException {

    }
}
