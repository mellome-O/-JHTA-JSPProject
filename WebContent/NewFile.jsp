<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<%	
int result = 0;

if (request.getMethod().equals("POST")) {

	String sx = request.getParameter("x");
	String sy = request.getParameter("y");

	Integer y = 0;
	Integer x = 0;

	if (sx != null)
		x = Integer.parseInt(sx);
	if (sy != null)
		y = Integer.parseInt(sy);

	result = x + y;

}
%>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="NewFile.jsp" method="post">
    <div>
        <label>x : </label>
        <input type="text" name="x" />
    </div>
    <div>
        <label>y : </label>
        <input type="text" name="y" />
    </div>
    <div>  
    결과 : <%=result %>        
        <input type="submit" value="덧셈" />
    </div>
    </form>
</body>
</html>