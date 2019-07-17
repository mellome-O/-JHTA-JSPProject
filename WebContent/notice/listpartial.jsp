<%@ page language="java" contentType="text/html; charset=EUC-KR"
   pageEncoding="EUC-KR"%>
<%@taglib prefix="c" uri="http://java.sun.com/jsp/jstl/core"%>

<c:forEach var="n" items="${list}" varStatus="s">
   <c:if test="${s.index%2==1}">
      <tr class="even">
   </c:if>
   <c:if test="${s.index%2==0}">
      <tr>
   </c:if>
   <td class="num">${n.id}</td>
   <td class="title"><a href="detail?id=${n.id}">${n.title}</a> <span>${n.commentCount}</span></td>
   <td class="writer">${n.writerId}</td>
   <td class="date">${n.regDate}</td>
   <td class="hit">${n.hit}</td>
   </tr>
</c:forEach>
fghfdghdfgh