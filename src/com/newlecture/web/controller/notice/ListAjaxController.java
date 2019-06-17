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


@WebServlet("/notice/list-ajax")
public class ListAjaxController extends HttpServlet {
@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
   
   int page = 1;
   String p_ = req.getParameter("p");
   if(p_!=null && !p_.equals(""))
      page = Integer.parseInt(p_);
   
   
   NoticeDao nd = new OracleNoticeDao();
   List<NoticeView> list = null;
   
   try {
      list=nd.getList(page);
   } catch (ClassNotFoundException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
   } catch (SQLException e) {
      // TODO Auto-generated catch block
      e.printStackTrace();
   }
   
   resp.setCharacterEncoding("UTF-8"); //출력할 때 인코딩 방식
   resp.setContentType("text/txt:charset=utf-8");//MIME json content type //클라이언트가 그 인코딩방식 이해하는 것
   //setcontenttype 검색해서 레퍼런스 찾아서 mime 
   
   PrintWriter out = resp.getWriter();
   
   
  
   StringBuilder json = new StringBuilder();
   json.append("[");
  
   for(int i=0; i<list.size(); i++) {
	   Notice n = list.get(i);
	   
	   json.append("{");
	   json.append(String.format("\"id\" : %d,", n.getId()));
	   json.append(String.format(" \"title\" : \"%s\",", n.getTitle()));
	   json.append(String.format(" \"writerId\" : \"%s\",", n.getWriterId()));
	   json.append(String.format(" \"regDate\" :\"%s\",", n.getRegDate()));
	   json.append(String.format(" \"Hit\" : %d", n.getHit()));
	   json.append("}");
	   
//       json.append("{");
//       json.append(String.format("\"id\" : %d," ,n.getId()));
//       json.append(String.format("\"title\" : \"%s\"," ,n.getTitle()));
//       json.append(String.format("\"content\" : \"%s\"," ,n.getContent()));
//       json.append(String.format("\"writerId\" : \"%s\","  ,n.getWriterId()));
//       json.append(String.format("\"regDate\" : \"%s\"," ,n.getRegDate()));
//       json.append(String.format("\"hit\" : %d",n.getHit()));
//       json.append("}");
	   
	   if(i != (list.size()) - 1)
	   json.append(",");
	   
   }
   json.append("]");
   
   
   //int id, String title, String content, String writerId, Date regDate, int hit,int commentCount
//   	for(NoticeView a : list) {
//   		
//   		String col = "{" +
//   					"\"id\" : " + a.getId() + "," +
//   					"\"title\" : " + a.getTitle() + "," +
//   					"\"content\" : " + a.getContent() + "," +
//   					"\"writerId\" : " + a.getWriterId()+ "," +
//   					"\"regDate\" : " + a.getRegDate() + "," +
//   					"\"Hit\" : " + a.getHit() + "," +
//   					"\"commentCount\" : " + a.getCommentCount() + 
//   					"}";
//   	json += col;
//   	}
//   	
//   	json += "]";
//   
   out.write(json.toString());
}

}