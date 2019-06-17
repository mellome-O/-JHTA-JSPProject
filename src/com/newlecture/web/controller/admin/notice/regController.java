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
	   
	   
	   
	   
	 //1. ���ε� ��θ� ���
      //url������ ��θ� �ָ� ������θ� �˷��ִ� ��
	  String urlPath = "/upload";
	  String path = request.getServletContext().getRealPath(urlPath);
	  
	  //System.out.println(path);
	  
	 //2. ���ε�� ���ϸ� ���
	  //JDK ������ ���� ���ε� �� ���ϸ� ������� ��� �ڵ尡 �ٸ�
	  String fileName = filePart.getSubmittedFileName();
	  
	  
	 //3. ��� ������ �ֱ�
	  //���Ͻý��۰�ΰ� �ü������ �ٸ��⋚���� ������� "\\" �̷��� �������� �ص� ������ ���н��� �ٸ� �ü���� �ٸ�
	  //File.separator �̷��� ���� �ٸ� �ü������ �� �� ����
	  String filePath = path + File.separator + fileName; //d:\aa + "bb.jpg" -> d:\aabb.jpg
	  
	  System.out.println(filePath);
	  
	 //4. ��ΰ� ���ٴ� ���� ����
	 //��ΰ� �������� ������ �������ּ���
	  File pathFile = new File(path);
	  if(!pathFile.exists())
		  pathFile.mkdirs();
	  
	  
	 //5. ������ ���ϸ� ��ο� �̹� �����ϴ� ���� : �̸� ��å
	 //aa�� �� �� �߰� �Ѵٸ� aa.jpg -> aa1.jpg �� �ƴ�-> aa(1).jpg �Ұ�ȣ 
	
	  //���̽õ�
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
	   
	   System.out.println("���� �Ϸ�");
	
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
//	File file = new File("���");
//	String suffix = ".jpg";
//	int index = 0;
//	File file null;
	
//	if(file.exists()) {
//		//Ȯ���ڸ� �߶� �̸��� ���  ���ϸ��������� �� (). ���� 
//		//�� �������� �Ұ�ȣ�� �ִ��� Ȯ���ϰ�
//		//������ �� �ڸ��ų� ��ȣ�� �˾Ƴ��� 1������ ���� ��
//		file =new File("���" + fileName + index + suffix);
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
//			  int n = fileName.lastIndexOf(".");         	//fileName=hello.jpg  n=o	  �ڿ������� n�̶�� ���������� .�� ��ġ�� ��Ҵ� 
//			  String name = fileName.substring(0, n);		//�ڸ��°�   0���� n(Ȯ���ڻ� ����������)����				
//			  String suffix = fileName.substring(n);        //n���� Ȯ���ڸ� �и�
//			  		
//		
//			//  n-1 ��ġ�� �ִ��� ������
//					  
//			//if(name.indexOf() == n-1) {	  
//			  int parenS = name.lastIndexOf("(");			// ���� ���ʿ� �ִ� ��ȣ(  .�տ� �ִ� ��ȣ�� ���ǰ˻�  name.endsWith(")")
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
//				  int indexN = Integer.parseInt(indexC);       //������ �� seq Ȥ�� num����   
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

