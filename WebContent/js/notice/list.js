window.addEventListener("load", function(){
    var notice = document.querySelector("#notice");
    var testRemove = document.querySelector("#text-remove");
    var txt1 = testRemove.querySelector("input[type=text]");
    var btn1 = testRemove.querySelector("input[type=button]");
    var tbody = notice.querySelector("tbody");

    btn1.onclick = function(e){
    	alert(e.clientX);
        var id = txt1.value;
        //서버 디비 삭제하고 화면갱신
        //서버
        var request = new XMLHttpRequest();
        request.open("GET","/notice/del-ajax?id="+id,false);
        request.send();

     

        if(request.responseText == "ok"){
        //화면에서도 해당 게시글을 지운다
        alert("삭제되었습니다.")
        var page = 1;
        if(txt1.value !=null && txt1.value !="")
        page = txt1.value; //사용자가 입력안했을 때 기본값
        //데이터 요청하기
         var request = new XMLHttpRequest();
         request.open("GET","/notice/list-ajax?p=1",false);
         request.send();
         var notices = JSON.parse(request.responseText);
        
        
        //복제방법 2 : 템플릿을 이용한 복제
       
        var template = notice.querySelector(".notice-template");
        
        tbody.innerHTML = ""; //다 지우기
        for(var i=0; i<notices.length; i++){
        
        var cloneTr = document.importNode(template.content, true);
        var idEl = cloneTr.querySelector(".num");
        var titleEl = cloneTr.querySelector(".title a");
        var writerEl = cloneTr.querySelector(".writer");
        var dateEl = cloneTr.querySelector(".date");
        var hitEl = cloneTr.querySelector(".hit");

        idEl.innerText = notices[i].id;
        titleEl.innerText = notices[i].title;
        writerEl.innerText = notices[i].writerId;
        dateEl.innerText = notices[i].regDate;
        hitEl.innerText = notices[i].hit;
        console.log(notices[i].id);
        tbody.append(cloneTr);

         }
        }
    }
});




window.addEventListener("load", function(){
	   var notice = document.querySelector("#notice");
       var pager = document.querySelector("#pager");
       var tbody = notice.querySelector("tbody");
	   var ul = pager.querySelector("ul");
	   //a태그가 가지고있던 기본속성은 지워지고 (페이지 요청 멈추고) 
	   var nums =pager.querySelectorAll("ul a");  //(a태그 엘리먼트 객체배열)
       
       nums[2].onclick = function(e){
           e.preventDefault(); //태그가 가진 기본 행위 막는 것
           e.stopPropagation(); //자식꺼만 적용되고 부모꺼는 적용안되게 하는 것
           e.target.style.border = "1px solid gray";
           e.target.style.background = "blue";
        }
       

       //자식을 모두 포함하고있는 큰 부모에게 온클릭을 걸어준다!
       //이벤트버블링
	   //for(var i=0; i<nums.length; i++)
		    //nums[i].onclick = function(e){
            ul.addEventListener("click", function(e){
                e.preventDefault(); //이벤트 기본행위 막는 것
            
            alert("이건 노드" + e.target.nodeName); //엘리먼트 포함한 모든노드
            alert("이건 태그" + e.target.tagName); //태그네임만...
            
            //if(e.target.tagName != "A")
            //    return;


           //애들이랑 연습해보기 
           // for(var j=0; j<nums.length; j++)
           //     nums[j].style.background = "white";
            var page = e.target.innerText;
            e.target.style.background = "pink";

        //데이터 요청하기
        var request = new XMLHttpRequest();
        request.open("GET","/notice/list-ajax?p="+page,false);
        request.send();
        var notices = JSON.parse(request.responseText);
       

       
       //복제방법 2 : 템플릿을 이용한 복제
       var template = notice.querySelector(".notice-template");
       tbody.innerHTML="";
       for(var i=0; i<notices.length; i++){
    	   var cloneTr = document.importNode(template.content, true);
    	   var idEl = cloneTr.querySelector(".num");
           var titleEl = cloneTr.querySelector(".title a");
           var writerEl = cloneTr.querySelector(".writer");
           var dateEl = cloneTr.querySelector(".date");
           var hitEl = cloneTr.querySelector(".hit");

           idEl.innerText = notices[i].id;
           titleEl.innerText = notices[i].title;
           writerEl.innerText = notices[i].writerId;
           dateEl.innerText = notices[i].regDate;
           hitEl.innerText = notices[i].hit;
	       tbody.append(cloneTr);
       }
       }


    ,true);
	   
});






//페이저코드
window.addEventListener("load", function(){
   var notice = document.querySelector("#notice");
   var textPager = document.querySelector("#text-pager");
   var txt1 = textPager.querySelector("input[type=text]");
   var btn1 = textPager.querySelector("input[type=button]");
   var tbody = notice.querySelector("tbody");
   
   btn1.onclick = function(){
       var page = 1;
       if(txt1.value !=null && txt1.value !="")
           page = txt1.value; //사용자가 입력안했을 때 기본값
           
       //데이터 요청하기
        var request = new XMLHttpRequest();
        request.open("GET","/notice/list-ajax?p=1",false);
        request.send();
        var notices = JSON.parse(request.responseText);
       

       
       //복제방법 2 : 템플릿을 이용한 복제
       var template = notice.querySelector(".notice-template");
       tbody.innerHTML="";
       for(var i=0; i<notices.length; i++){
    	   var cloneTr = document.importNode(template.content, true);
    	   var idEl = cloneTr.querySelector(".num");
           var titleEl = cloneTr.querySelector(".title a");
           var writerEl = cloneTr.querySelector(".writer");
           var dateEl = cloneTr.querySelector(".date");
           var hitEl = cloneTr.querySelector(".hit");

           idEl.innerText = notices[i].id;
           titleEl.innerText = notices[i].title;
           writerEl.innerText = notices[i].writerId;
           dateEl.innerText = notices[i].regDate;
           hitEl.innerText = notices[i].hit;
	       tbody.append(cloneTr);
       }
       }




        //복제방법 1 : 기존 노드를 복제하기
        //첫번째tr얻기 첫번쨰엘리먼트 노드 가져와서 복제
        //tbody.children()[0]
        //tbody.firstElementChild
        //tbody.querySelector("tr : first-child")
        // var tr = body.firstElementChild; 

        // tbody.innerHTML = ""; //다 지우기

        // for(var i=0; i<json.length; i++){
        // var cloneTr = tr.cloneNode(true);  //cloneNode 복제

        // var idE1 = cloneTr.querySelector(".num");
        // var contentE1 = cloneTr.querySelector(".content");
        // var fileE1 = cloneTr.querySelector(".file");

        // idE1.innerText = json[i].id;
        // contentE1.innerText = json[i].content;
        // fileE1.innerText = json[i].file;
    
        // tbody.appendChild(cloneTr);
        // }

        
        // console.log(json[0].title);
        // notices = notices.concat(json);

//    
   });