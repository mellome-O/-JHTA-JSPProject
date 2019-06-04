<%@page import="com.newlecture.web.dao.file.FileNoticeDao"%>
<%@page import="com.newlecture.web.dao.NoticeDao"%>
<%@page import="org.apache.jasper.tagplugins.jstl.core.ForEach"%>
<%@page import="java.util.Scanner"%>
<%@page import="java.io.FileInputStream"%>
<%@page import="com.newlecture.web.entity.Notice"%>
<%@page import="java.util.List"%>
<%@page import="java.util.ArrayList"%>
<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>

<%
   String a = request.getParameter("id");
   Integer d = Integer.parseInt(a); 
   Notice n = new Notice();
   NoticeDao da = new FileNoticeDao();
	
	n = da.get(d);
	//Notice n =?.getNotice(3);
	/*List<Notice> notices = new ArrayList<>();
   FileInputStream fis = new FileInputStream("C:\\java\\worlkspace\\JSPProject\\WebContent\\WEB-INF\\data\\notice-file.df");
   Scanner fscan = new Scanner(fis);
   String line = "";
   
   while(fscan.hasNextLine()){
		line = fscan.nextLine();
		Notice nt = new Notice(line.split(","));
		notices.add(nt);	
	}
	for (int i = 0; i < notices.size(); i++) {
		if (notices.get(i).getId() == d)
	}
	fscan.close();
	fis.close();*/
%>

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">    
    <title>Document</title>
</head>
<body>
    <h1>공지사항</h1>
    <table>
       <tr>
          <td>제목:</td>
          <td><%=n.getTitle()%></td>
       </tr>
       <tr>
          <td>작성자:</td>

          <td><%=n.getWriterId() %></td>                    
       </tr>
       <tr>
          <td>작성일</td>
          <td><%=n.getRegDate() %></td>                    
       </tr>       
    </table>
</body>
</html>
