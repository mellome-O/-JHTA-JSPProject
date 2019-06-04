package com.newlecture.web;

import java.io.IOException;
import java.io.PrintWriter;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/add")
public class AddServlet extends HttpServlet {
/*
	@Override
protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	// TODO Auto-generated method stub
	//super.doPost(req, resp);
	int result;
	
		String sx = req.getParameter("x");
		String sy = req.getParameter("y");

		Integer y = 0;
		Integer x = 0;

		if (sx != null)
			x = Integer.parseInt(sx);
		if (sy != null)
			y = Integer.parseInt(sy);
		result = x + y;
		resp.sendRedirect("add?result="+result);	
}

	
	@Override
protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	// TODO Auto-generated method stub
	//super.doGet(req, resp);
	int result = 0;
	resp.setCharacterEncoding("UTF-8");
	resp.setContentType("text/html; charset = UTF-8");
	
	String result_ = req.getParameter("result");
	if(result_!=null)
		result = Integer.parseInt(result_);
	
	PrintWriter out = resp.getWriter();
	
	out.write("<!DOCTYPE html>");
	out.write("<html>");
	out.write("<head>");
	out.write("<meta charset=\"UTF-8\">");
	out.write("<title>Insert title here</title>");
	out.write("</head>");
	out.write("<body>");
	out.write("<form action=\"add\" method=\"post\">");
	out.write("<div>");
	out.write("<label>x : </label>");
	out.write("<input type=\"text\" name=\"x\" />");
	out.write("</div>");

	out.write("<div>");
	out.write(" <label>y : </label>");
	out.write(" <input type=\"text\" name=\"y\" />");
	out.write("</div>");

	out.write("<div>  ");
	out.write("<input type=\"submit\" value=\"µ¡¼À\" />");
	out.write("</div>");
	out.write("<div>  ");
	out.write("°á°ú : ");
	out.printf("%d", result);
	out.write("</div>");
	out.write("</form>");
	out.write("</body>");
	out.write("</html>");
}	
	
*/	

	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
		
		resp.setCharacterEncoding("UTF-8");
		resp.setContentType("text/html; charset = UTF-8");
		
		
		int result = 0;

		if (req.getMethod().equals("POST")) {

			String sx = req.getParameter("x");
			String sy = req.getParameter("y");

			Integer y = 0;
			Integer x = 0;

			if (sx != null)
				x = Integer.parseInt(sx);
			if (sy != null)
				y = Integer.parseInt(sy);

			result = x + y;

		}
		PrintWriter out = resp.getWriter();

		out.write("<!DOCTYPE html>");
		out.write("<html>");
		out.write("<head>");
		out.write("<meta charset=\"UTF-8\">");
		out.write("<title>Insert title here</title>");
		out.write("</head>");
		out.write("<body>");
		out.write("<form action=\"add\" method=\"post\">");
		out.write("<div>");
		out.write("<label>x : </label>");
		out.write("<input type=\"text\" name=\"x\" />");
		out.write("</div>");

		out.write("<div>");
		out.write(" <label>y : </label>");
		out.write(" <input type=\"text\" name=\"y\" />");
		out.write("</div>");

		out.write("<div>  ");
		out.write("<input type=\"submit\" value=\"µ¡¼À\" />");
		out.write("</div>");
		out.write("<div>  ");
		out.write("°á°ú : ");
		out.printf("%d", result);
		out.write("</div>");
		out.write("</form>");
		out.write("</body>");
		out.write("</html>");
	}

}