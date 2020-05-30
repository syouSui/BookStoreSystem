/**
 * @Author      : acmaker
 * @Date        : 2019-12-11 16:56:20
 * @LastEditTime: 2020-04-22 02:05:42
 * @FilePath    : \PersonalWebpage\src\com\supreme\entity\Book.java
 * @Website     : http://csdn.acmaker.vip
 * @Description : 
 */

package com.syousui.model;

import java.io.Serializable;

public class Book implements Serializable {
    /**
     *
     */
    private static final long serialVersionUID = 2980837053046380731L;
    private String isbn;
    private String bookName;
    private int publisherID;
    private double price;
    private int count;
    private String description;
    private String pic;

    public static void showInfoTable() {
        System.out.printf("\t %-10s\t %-20s %-10s %-10s %-10s %-20s %-20s\n\n", "isbn", "bookName", "publisherID",
                "price", "count", "description", "pic");
    }

    public void showInfo() {
        System.out.printf("\t %-10s\t %-20s %-10d %-10f %-10d %-20s %-20s\n", // 坑点, java 没有 %lf, 只有 %f
                this.isbn, this.bookName, this.publisherID, this.price, this.count, this.description, this.pic);
    }

    public Book() {
        super();
    }

    public Book(String isbn, String bookName, int publisherID, double price, int count, String description,
            String pic) {
        super();
        this.isbn = isbn;
        this.bookName = bookName;
        this.publisherID = publisherID;
        this.price = price;
        this.count = count;
        this.description = description;
        this.pic = pic;
    }

    public String getIsbn() {
        return isbn;
    }

    public void setIsbn(String isbn) {
        this.isbn = isbn;
    }

    public String getBookName() {
        return bookName;
    }

    public void setBookName(String bookName) {
        this.bookName = bookName;
    }

    public int getPublisherID() {
        return publisherID;
    }

    public void setPublisherID(int publisherID) {
        this.publisherID = publisherID;
    }

    public double getPrice() {
        return price;
    }

    public void setPrice(double price) {
        this.price = price;
    }

    public int getCount() {
        return count;
    }

    public void setCount(int count) {
        this.count = count;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public String getPic() {
        return pic;
    }

    public void setPic(String pic) {
        this.pic = pic;
    }

}
