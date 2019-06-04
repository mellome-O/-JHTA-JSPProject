package com.newlecture.web.dao.file;

import java.io.FileInputStream;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

import com.newlecture.web.dao.NoticeDao;
import com.newlecture.web.entity.Notice;

public class FileNoticeDao implements NoticeDao {


	
	@Override
	public List<Notice> getList()  {
		List<Notice> notices = new ArrayList<>();
		
		try {
			FileInputStream fis = new FileInputStream("C:\\java\\worlkspace\\JSPProject\\WebContent\\WEB-INF\\data\\notice-file.df");
		
		   Scanner fscan = new Scanner(fis);
		   String line = "";
		 
		   
		   while(fscan.hasNextLine()){
				line = fscan.nextLine();
				Notice notice = new Notice(line.split(","));
				notices.add(notice);	
			}
			fscan.close();
			fis.close();
			
		}catch (IOException e) {
				e.printStackTrace();
		}
		return notices;
	}
	@Override
	public Notice get(int id) {
		   Notice notice = new Notice();
		   FileInputStream fis;
		try {
			fis = new FileInputStream("C:\\java\\worlkspace\\JSPProject\\WebContent\\WEB-INF\\data\\notice-file.df");
			Scanner fscan = new Scanner(fis);
		
			
			String line = "";
			
			  while(fscan.hasNextLine()){
					line = fscan.nextLine();
					 notice = new Notice(line.split(","));
				}
			fscan.close();
			fis.close();
			
		} catch (Exception e) {
			e.printStackTrace();
		}
		
		   
		
		
		return notice;
	}

}
