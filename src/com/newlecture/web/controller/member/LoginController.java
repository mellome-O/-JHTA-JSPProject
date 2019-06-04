package com.newlecture.web.controller.member;

import java.io.IOException;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;
import javax.websocket.Session;

import com.newlecture.web.dao.MemberDao;
import com.newlecture.web.dao.oracle.OracleMemberDao;
import com.newlecture.web.entity.Member;




@WebServlet("/member/login")
public class LoginController extends HttpServlet{

  @Override
  protected void doGet(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {

	  req.getRequestDispatcher("/WEB-INF/view/member/login.jsp")
	  .forward(req, resp);
  }
  
  @Override
	protected void doPost(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
	
		String pwd = req.getParameter("pwd");
		String id = req.getParameter("id");
		System.out.println(id);
		System.out.println(pwd);
		
		Member member= null;
		//�����̶�� ���� �ؾ��Ѵ� -> ȸ�����̺� �Ѱܹ��� ������ �ִٸ� ������ ����
		//id,pwd ��ġ
		//1. DB���� id�� �ش��ϴ� ȸ�� �����͸� �����´�(Dao)
		MemberDao memberDao = new OracleMemberDao();
		try {
		member = memberDao.get(id);
			
		} catch (ClassNotFoundException e) {
			e.printStackTrace();
		} catch (SQLException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}

		//2. ȸ���� �������� �ʴ´ٸ�
		//�α����������� �ٽ� ����..��� ���� �˸�
		if(member == null) 
			resp.sendRedirect("login?error=1");
		
		//3. ȸ���� �����ϸ鼭 ����� ��ġ���� �ʴ´ٸ�
		//�α����������� �ٽ� ����..��� ���� �˸�
		
		else if(!member.getPwd().equals(pwd))
			resp.sendRedirect("login?error=1");
		else {
			HttpSession session = req.getSession();
			session.setAttribute("id", id);
			
			String returnURL = req.getParameter("return-url");
			
			if(returnURL != null) 
				resp.sendRedirect(returnURL);
			else
				resp.sendRedirect("index");
		
		
		}
	}
   
}