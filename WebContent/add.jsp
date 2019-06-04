<%@page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
    
    
<% int x = 5; int y = 4; %>
<%! public int mul (int x, int y){
		return x*y;
}
%>
    

<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Insert title here</title>
</head>
<body>
<form action="add" method="post">
    <div>
        <label>x : </label>
        <input type="text" name="x" />
    </div>
    <div>
        <label>y : </label>
        <input type="text" name="y" />
    </div>
    <div>  
    결과 : 0          
        <input type="submit" value="덧셈" />
    </div>
</form>
</body>
</html>