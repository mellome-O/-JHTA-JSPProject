

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
         request.open("GET","/notice/list-ajax?p="+page,false);
         request.send();
         var json = JSON.parse(request.responseText);
        


        //첫번째tr얻기
        //tbody.children()[0]
        //tbody.firstElementChild
        //tbody.querySelector("tr : first-child")
        var tr = tbody.firstElementChild; 

        tbody.innerHTML = ""; //다 지우기

        for(var i=0; i<json.length; i++){
        var cloneTr = tr.cloneNode(true);  //cloneNode 복제

        var idE1 = cloneTr.querySelector(".num");
        var titleE1 = cloneTr.querySelector(".title a");
        var writerE1 = cloneTr.querySelector(".writer");
        var dateE1 = cloneTr.querySelector(".date");
        var hitE1 = cloneTr.querySelector(".hit");

        idE1.innerText = json[i].id;
        titleE1.innerText = json[i].title;
        writerE1.innerText = json[i].writer;
        dateE1.innerText = json[i].date;
        hitE1.innerText = json[i].hit;

        tbody.appendChild(cloneTr);
        }

        
        // console.log(json[0].title);
        // notices = notices.concat(json);

    }
    });