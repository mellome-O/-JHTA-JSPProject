package com.newlecture.web.controller.notice;

import java.io.IOException;
import java.io.PrintWriter;
import java.sql.SQLException;
import java.util.Date;
import java.util.List;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;

import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.newlecture.web.dao.NoticeDao;
import com.newlecture.web.dao.oracle.NoticeView;
import com.newlecture.web.dao.oracle.OracleNoticeDao;
import com.newlecture.web.entity.Notice;


@WebServlet("/notice/del-ajax")
public class DelAjaxController extends HttpServlet {
	@Override
	protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	   //기본값 사용 x
		Integer id = Integer.parseInt(req.getParameter("id"));

		NoticeDao noticeDao = new OracleNoticeDao();
	
		int result = 0;
		   
		   try {
		      result=noticeDao.delete(id);
		   } catch (ClassNotFoundException e) {
		      e.printStackTrace();
		   } catch (SQLException e) {
		      e.printStackTrace();
		   }
		   
		   resp.setCharacterEncoding("UTF-8"); //출력할 때 인코딩 방식
		   resp.setContentType("text/txt:charset=utf-8");//MIME json content type //클라이언트가 그 인코딩방식 이해하는 것
		   //setcontenttype 검색해서 레퍼런스 찾아서 mime 
		   PrintWriter out = resp.getWriter();
		   

		 out.write("ok");
	}
}