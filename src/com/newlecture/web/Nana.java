package com.newlecture.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/hello")
public class Nana extends HttpServlet{
@Override
protected void service(HttpServletRequest req, HttpServletResponse resp) 
		throws ServletException, IOException {
	resp.setCharacterEncoding("UTF-8");
	resp.setContentType("text/html;charset=UTF-8");
	
	String cnt_ = req.getParameter("cnt");
	String sec_ = req.getParameter("sec");
	Integer sec = 0;
	Integer cnt = 0; 
	
	if(cnt_!=null)
		cnt = Integer.parseInt(cnt_);
		
	
	PrintWriter out = resp.getWriter();
	for(int i=0; i<cnt; i++)
	out.println("나는 나나다<br>");
	

}
}
