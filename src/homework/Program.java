package homework;

import java.util.List;

public class Program {
	public static void main(String[] args) {
		/*1) Oracle �����ͺ��̽����� MEMBER ���̺��� ���ڵ带 ���� �� �ִ� Member Ŭ������ �����Ͻÿ�.*/

		
		/*2) ���� �޼ҵ带 ������ ���̶�� ������� com.newlecture.dao.MemberDao�� �����Ͻÿ�.*/

	   /*Member get(String id);
			   List<Member> getList();
			   List<Member> getList(String query); // �̸��� query ���ڰ� ���Ե� ȸ���� �˻�
		*/
	   

		/* 3) MemberDao �������̽��� �����ϴ� JdbcMemberDao Ŭ���� �ڵ带 �ۼ��Ͻÿ�. */
	   
	  JdbcMemberDao jmd = new JdbcMemberDao();
	  System.out.println(jmd.get("newlec").getId());
	  
	 List<Member> a = jmd.getList();
	 
	 for(Member e: a)
		 System.out.println(e);
		  
	 

	}

}

