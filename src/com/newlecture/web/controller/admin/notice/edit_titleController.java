package com.newlecture.web.controller.admin.notice;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.newlecture.web.dao.NoticeDao;
import com.newlecture.web.dao.oracle.OracleNoticeDao;
import com.newlecture.web.entity.Notice;

//메소드가없으면 405?
@WebServlet("/admin/notice/edit_title")
public class edit_titleController extends HttpServlet{
	
	@Override
	protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
		request.setCharacterEncoding("UTF-8");
		String title = request.getParameter("title");
		Integer id = Integer.parseInt(request.getParameter("id"));
	

NoticeDao noticeDao  = new OracleNoticeDao();
		
Notice notice = new Notice();
notice.setId(id);
notice.setTitle(title);

int result=0;
try {
	result = noticeDao.update(notice);
} catch (ClassNotFoundException e) {
	// TODO Auto-generated catch block
	e.printStackTrace();
} catch (SQLException e) {
	// TODO Auto-generated catch block
	e.printStackTrace();
}
System.out.println("wkrna"+result);
if(result !=1)
	response.sendRedirect("error");
else
	response.sendRedirect("detail?id="+id);
		
	}		
		
	
    @Override
   protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {

      NoticeDao noticeDao  = new OracleNoticeDao();
      
      Integer id = Integer.parseInt(request.getParameter("id"));
  
       try {
		request.setAttribute("notice",  noticeDao.get(id));
	} catch (ClassNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
       
       request.getRequestDispatcher("../WEB-INF/view/notice/list.jsp").forward(request, response);

   }
   
   
}