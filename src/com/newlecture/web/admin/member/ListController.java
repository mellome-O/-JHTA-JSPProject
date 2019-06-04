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
			member.put("name", "손오공");
			
			members.add(member);
			
			member = new HashMap<>();
			member.put("id","moon");
			member.put("name","문재인");
			members.add(member);
			
			//컨트롤러가 list.jsp 로 이동시키는것
			//A redirect B ->A 서블릿에서 B 서블릿으로 전환/대체
			//A forward B -> A 에서 B로 이어가는/일의 진행을 넘겨준다
			
			//저장소객체=공유저장공간=상태저장공간
			//범위에 따라 3가지로  application, session, request
			//+ 공유는 아니지만 저장소인 page 도 있음
			
			//request : A와 B 포워드 관계 둘 사이끼리만 공유
			//session : 한 사용자가 페이지 전환을 해도 한 사용자에게 허락되는 데이터
			//			로그인 후 화면
			//application : 모든 사용자가 사용할 수 있는
			
			//request.setAttribute("members", members);
			//request.getReqDispatcher("list1.jsp").forward(req,resp);
			
			
			req.setAttribute("x", 30);
			req.setAttribute("member", member);
			req.setAttribute("y", new int[]{3,4,5});
			req.setAttribute("members", members);
			req.getRequestDispatcher("list1.jsp").forward(req,resp);
			
			
		
	}
}


