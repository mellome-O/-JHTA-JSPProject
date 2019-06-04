package com.newlecture.web.controller.notice;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.newlecture.web.dao.NoticeDao;
import com.newlecture.web.dao.NoticeFileDao;
import com.newlecture.web.dao.oracle.OracleNoticeDao;
import com.newlecture.web.dao.oracle.OracleNoticeFileDao;


@WebServlet("/notice/detail")
public class detailController extends HttpServlet{
    @Override
   protected void service(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
    //hello?cnt3 ->3?
    //hello? -> ""
    //hello -> null
   
	Integer id = Integer.parseInt(request.getParameter("id"));
    if(request.getSession().getAttribute("id") == null) {
    response.sendRedirect("../member/login?return-url=/notice/detail?id="+id);
    return;
    }
    	
 
    NoticeDao noticeDao  = new OracleNoticeDao();
    NoticeFileDao noticeFileDao = new OracleNoticeFileDao();
      
  
       try {
		request.setAttribute("notice", noticeDao.get(id));
		request.setAttribute("prev", noticeDao.getPrev(id));
		request.setAttribute("next", noticeDao.getNext(id));
		
		request.setAttribute("noticeFiles", noticeFileDao.getListByNoticeId(id));

	} catch (ClassNotFoundException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	} catch (SQLException e) {
		// TODO Auto-generated catch block
		e.printStackTrace();
	}
       
       request.getRequestDispatcher("../WEB-INF/view/notice/detail.jsp").forward(request, response);

   }
   
   
}