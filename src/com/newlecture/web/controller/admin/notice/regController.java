package com.newlecture.web.controller.admin.notice;

import java.io.File;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.sql.SQLException;

import javax.servlet.ServletException;
import javax.servlet.annotation.MultipartConfig;
import javax.servlet.annotation.WebServlet;
import javax.servlet.http.HttpServlet;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.Part;



import com.newlecture.web.dao.NoticeDao;
import com.newlecture.web.dao.NoticeFileDao;
import com.newlecture.web.dao.oracle.OracleNoticeDao;
import com.newlecture.web.dao.oracle.OracleNoticeFileDao;
import com.newlecture.web.entity.Notice;
import com.newlecture.web.entity.NoticeFile;

@WebServlet("/admin/notice/reg")

@MultipartConfig(
		location="C:\\downloads",
	    fileSizeThreshold = 1024 * 1024,
	    maxFileSize = 1024 * 1024 * 5,
	    maxRequestSize = 1024 * 1024 * 5 * 5
	)
public class regController extends HttpServlet {

   @Override
   protected void doPost(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      
     String title = request.getParameter("title");
     String content = request.getParameter("content");
     Part filePart = request.getPart("file");
	   
	   
	   
	   
	 //1. 업로드 경로를 얻기
      //url형태의 경로를 주면 원래경로를 알려주는 것
	  String urlPath = "/upload";
	  String path = request.getServletContext().getRealPath(urlPath);
	  
	  //System.out.println(path);
	  
	 //2. 업로드된 파일명 얻기
	  //JDK 버전에 따라 업로드 한 파일명 얻기위한 방법 코드가 다름
	  String fileName = filePart.getSubmittedFileName();
	  
	  
	 //3. 경로 구분자 넣기
	  //파일시스템경로가 운영체제마다 다르기떄문에 윈도우는 "\\" 이렇게 역슬래시 해도 되지만 유닉스나 다른 운영체제는 다름
	  //File.separator 이렇게 쓰면 다른 운영체제에도 쓸 수 있음
	  String filePath = path + File.separator + fileName; //d:\aa + "bb.jpg" -> d:\aabb.jpg
	  
	  System.out.println(filePath);
	  
	 //4. 경로가 없다는 오류 문제
	 //경로가 존재하지 않으면 생성해주세요
	  File pathFile = new File(path);
	  if(!pathFile.exists())
		  pathFile.mkdirs();
	  
	  
	 //5. 동일한 파일명에 경로에 이미 존재하는 문제 : 이름 정책
	 //aa를 두 번 추가 한다면 aa.jpg -> aa1.jpg 이 아닌-> aa(1).jpg 소괄호 
	
	  //성미시도
	  File samefile = new File(fileName);
	
	  if(samefile.exists()) {
		  int n = fileName.lastIndexOf(".");
		  String name = fileName.substring(0,n);
		  String suffix = fileName.substring(n); // .jpg
	         
	         int parenS = fileName.lastIndexOf("("); 
	         int parenE = fileName.lastIndexOf(")");
	         
	         String indexC = name.substring(parenS+1, parenE); //

	         int indexN = Integer.parseInt(indexC);
	                  
	         if (parenS == -1) {
	            fileName = name +"("+ 1 +")"+ suffix;

	         }
	         else {
	            indexN++;
	            fileName = name +"("+ indexN +")"+ suffix;
	         }
	      }

	 
   

	   InputStream fis = filePart.getInputStream();
	   OutputStream fos = new FileOutputStream(filePath);
	   
	   byte[] buf = new byte[1024];
	
	   int size = 0;
	
	   while ((size = fis.read(buf)) != -1) {
	      fos.write(buf, 0, size);
	   }
	   
	   fis.close();
	   fos.close();
	   
	   System.out.println("복사 완료");
	
	   System.out.println(title);
	
	   Notice notice = new Notice();
	   notice.setTitle(title);
	   notice.setContent(content);
	
	   NoticeDao noticeDao = new OracleNoticeDao();
	   NoticeFileDao noticeFileDao = new OracleNoticeFileDao();
	   
	   int result = 0;
	
	   try {
	      result = noticeDao.insert(notice);
	      int noticeId = noticeDao.getLastId();
	      
	      NoticeFile noticeFile = new NoticeFile();
	      //noticeFile.setId(?);
	      noticeFile.setName(fileName);
	      noticeFile.setNoticeId(noticeId);
	      
	      noticeFileDao.insert(noticeFile);
	   } catch (ClassNotFoundException e) {
	      // TODO Auto-generated catch block
	      e.printStackTrace();
	   } catch (SQLException e) {
	      // TODO Auto-generated catch block
	      e.printStackTrace();
	   }
	
	
	     if(result != 1)
	    	 response.sendRedirect("error"); 
	     else
	    	 response.sendRedirect("list");
	   
	}
	
//		  int pos = fileName.lastIndexOf(".");
//		  String ext = fileName.substring(0,pos);
//	  }
//	File file = new File("경로");
//	String suffix = ".jpg";
//	int index = 0;
//	File file null;
	
//	if(file.exists()) {
//		//확장자를 잘라낸 이름을 얻고  파일명마지막문자 과 (). 사이 
//		//그 마지막에 소괄호가 있는지 확인하고
//		//있으면 또 자르거나 번호를 알아내고 1증가된 값을 얻어서
//		file =new File("경로" + fileName + index + suffix);
//	}
       
	  
	  
//	InputStream fis = filePart.getInputStream();
//    OutputStream fos = new FileOutputStream(filePath);
//	  
//	  byte[] buf = new byte[1024];
//	  int size = 0;
//	  
//	  while((size=fis.read(buf)) != -1) {
//		  
//		  File sameFile = new File(filePath);
//		  
//		  if(sameFile.exists()) {
//			  int n = fileName.lastIndexOf(".");         	//fileName=hello.jpg  n=o	  뒤에서부터 n이라는 정수변수에 .의 위치를 담았다 
//			  String name = fileName.substring(0, n);		//자르는거   0부터 n(확장자뺀 마지막글자)까지				
//			  String suffix = fileName.substring(n);        //n부터 확장자명 분리
//			  		
//		
//			//  n-1 위치에 있는지 없는지
//					  
//			//if(name.indexOf() == n-1) {	  
//			  int parenS = name.lastIndexOf("(");			// 제일 뒤쪽에 있는 괄호(  .앞에 있는 괄호만 조건검사  name.endsWith(")")
//			  int parenE = name.lastIndexOf(")");			// )
//			
//			  
//			  System.out.println(suffix);
//			  System.out.println(parenS);
//			  if (parenE == -1) {
//				  fileName = name +"(1)"+ suffix;
//				  return;
//			  }else {
//				  String indexC = name.substring(parenS+1, parenE);	
//				  
//				  int indexN = Integer.parseInt(indexC);       //증가할 값 seq 혹은 num으로   
//				  indexN++;
//				  fileName = name + "(" + indexN + ")" + suffix;
//			  }
//		  }         
//		  fos.write(buf,0,size);
//	  }
//	  
//	  
//	  fis.close();
//	  fos.close();  
	  
	  
	  
//      String title = request.getParameter("title");
//      String content = request.getParameter("content");
//      Part filePart = request.getPart("file");
//      InputStream fis = filePart.getInputStream();
//      OutputStream fos = new FileOutputStream("C:\\downloads\\a.jpg");
//      
//      
//      byte[] buf = new byte[1024];
//      int size = 0;
//      
//      while((size=fis.read(buf)) != -1) {
//    	  fos.write(buf,0,size);
//      }
//      
//      //"D:\\html5-1902\\a.png";
//      
//      fis.close();
//      fos.close();
//      
//      System.out.println(title);
//      
//      NoticeDao noticeDao = new OracleNoticeDao();
//      Notice notice = new Notice();
//      notice.setTitle(title);
//      notice.setContent(content);
//
//      
//      
//      
//      int result = 0;
//      
//      try {
//         result = noticeDao.insert(notice);
//      } catch (ClassNotFoundException e) {
//         // TODO Auto-generated catch block
//         e.printStackTrace();
//      } catch (SQLException e) {
//         // TODO Auto-generated catch block
//         e.printStackTrace();
//      }
//      
////      if(result != 1)
////         response.sendRedirect("../notice/error");
////      else
//         response.sendRedirect("../notice/list");
//       
      
//	  Notice notice = new Notice();
//	  notice.setTitle(title);
//	  notice.setContent(content);
//	  
//	  NoticeDao noticeDao = new OracleNoticeDao();
//	  NoticeFileDao noticeFileDao = new OracleNoticeFileDao();
//	  
//	  int result = 0;
//	  
//	  try {
//        result = noticeDao.insert(notice);
//        int noticeid = noticeDao.getLastID();
//        
//        NoticeFile noticeFile = new NoticeFile();
//        
//        noticeFile.setName(fileName);
//        noticeFile.setNoticeId(noticeId);
//        
//        noticeFileDao.insert(noticeFile);
//        
//     } catch (ClassNotFoundException e) {
//        e.printStackTrace();
//     } catch (SQLException e) {
//        e.printStackTrace();
//     }
//	  
//	  
//	  
//	  
//	  
//   }
   @Override
   protected void doGet(HttpServletRequest request, HttpServletResponse response) throws ServletException, IOException {
      request.getRequestDispatcher("/WEB-INF/view/admin/notice/reg.jsp").forward(request, response);
   }
   
}

