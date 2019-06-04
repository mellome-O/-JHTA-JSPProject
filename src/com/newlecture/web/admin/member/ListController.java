package com.newlecture.web.admin.member;

import java.io.IOException;
import java.io.PrintWriter;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import javax.servlet.ServletException;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@WebServlet("/admin/member/list")
//http://servler/admin/member/list
public class ListController extends HttpServlet{
	@Override
	protected void service(HttpServletRequest req, HttpServletResponse resp) throws ServletException, IOException {
				
		
		List<Map<String,String>> members = new ArrayList<>();
		Map<String, String> member;

			member = new HashMap<>();
			member.put("id", "dragon");
			member.put("name", "�տ���");
			
			members.add(member);
			
			member = new HashMap<>();
			member.put("id","moon");
			member.put("name","������");
			members.add(member);
			
			//��Ʈ�ѷ��� list.jsp �� �̵���Ű�°�
			//A redirect B ->A �������� B �������� ��ȯ/��ü
			//A forward B -> A ���� B�� �̾��/���� ������ �Ѱ��ش�
			
			//����Ұ�ü=�����������=�����������
			//������ ���� 3������  application, session, request
			//+ ������ �ƴ����� ������� page �� ����
			
			//request : A�� B ������ ���� �� ���̳����� ����
			//session : �� ����ڰ� ������ ��ȯ�� �ص� �� ����ڿ��� ����Ǵ� ������
			//			�α��� �� ȭ��
			//application : ��� ����ڰ� ����� �� �ִ�
			
			//request.setAttribute("members", members);
			//request.getReqDispatcher("list1.jsp").forward(req,resp);
			
			
			req.setAttribute("x", 30);
			req.setAttribute("member", member);
			req.setAttribute("y", new int[]{3,4,5});
			req.setAttribute("members", members);
			req.getRequestDispatcher("list1.jsp").forward(req,resp);
			
			
		
	}
}


