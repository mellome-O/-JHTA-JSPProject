
var html = "안녕하세요 멜로미의 홈페이지입니다.";
//h1.innerText = html;
//자바스크립트 
//1.언어
//2.도구 : DOM, CSSOM 
//3.이벤트 객체
//4.애니메이션 (only script, css animation)
//--클라이언트 화면 어느정도 끝난거 --
//5.Ajax
//6.HTML5 API, 프로젝트 예제 경험...


//ex14
// window.addEventListener("load", function(){
//     var section = document.querySelector("#ex14");
//     var tabmenuList = section.querySelector(".tab-menu-list");
//     var tabs = section.querySelectorAll(".tab-menu-list li");
//     var contentList = section.querySelector(".content-list");
//     //var contents = contentList.children;
//     var contents = section.querySelectorAll(".content-list div");

//     tabmenuList.onclick = function(e){
//         if(e.target.tagName != "A")
//             return;
        
//         e.preventDefault();

//     var contentId = e.target.href.split("#");
//     alert("현재 contentId는 " + contentId[1] +"입니다.");

    //항목이 많을 때는 분기문으로 있냐없냐 알아봐서 지우는 게 성능에 좋고
    //항목이 별로 없을 때는 분기문 쓰지말고 아래처럼 하는 것이 좋다
//     for(var i=0; i<contents.length; i++)
//         contents[i].classList.remove("current");

    
//     var contentDiv = contentList.querySelector("#"+contentId);
//     contentDiv.classList.add("current");
//     }
// });

//hw1
// window.addEventListener("load", function(){
//     var section = this.document.querySelector("#hw1");
//     var prevButton = section.querySelector(".prev-button");
//     var nextButton = section.querySelector(".next-button");

//     var imgList = section.querySelector(".img-list");
//     var lis = imgList.children;

// nextButton.onclick = function(){
//     var frontLi = imgList.querySelector(".front");
//     var rightLi = imgList.querySelector(".right");
//     var backLi = imgList.querySelector(".back");
//     var leftLi = imgList.querySelector(".left");

//     frontLi.classList.remove("front");
//     frontLi.classList.add("right");
//     rightLi.classList.remove("right");
//     rightLi.classList.add("back");
//     backLi.classList.remove("back");
//     backLi.classList.add("left");
//     leftLi.classList.remove("left");
//     leftLi.classList.add("front");
// }
// prevButton.onclick = function(){
//     var frontLi = imgList.querySelector(".front");
//     var rightLi = imgList.querySelector(".right");
//     var backLi = imgList.querySelector(".back");
//     var leftLi = imgList.querySelector(".left");

//     frontLi.classList.remove("front");
//     frontLi.classList.add("left");
//     rightLi.classList.remove("right");
//     rightLi.classList.add("front");
//     backLi.classList.remove("back");
//     backLi.classList.add("right");
//     leftLi.classList.remove("left");
//     leftLi.classList.add("back");


// }



// });



//ex13
window.addEventListener("load", function(){
    var section = document.querySelector("#ex13");
    var prevButton = section.querySelector(".prev-button");
    var nextButton = section.querySelector(".next-button");

    var imgList = section.querySelector(".img-list");
    var lis = imgList.querySelector("li");
    //var lis = imgList.children;


nextButton.onclick = function(){
    var centerLi = imgList.querySelector(".center");
    var rightLi = centerLi.nextElementSibling;
    //imgLists.classList.add("left");  
    centerLi.classList.remove("center");
    centerLi.classList.add("left");
    rightLi.classList.remove("right");
    rightLi.classList.add("center");
};

prevButton.onclick = function(){
    var centerLi = imgList.querySelector(".center");
    var leftLi = centerLi.previousElementSibling;
    centerLi.classList.remove("center");
    centerLi.classList.add("right");
    leftLi.classList.remove("left");
    leftLi.classList.add("center");
};


});





//ex12 
window.addEventListener("load", function(){
    var section = document.querySelector("#ex12");
    var goButton = section.querySelector(".go-Button");
    var container = section.querySelector(".container");

    function getRandomInt(max){
        return Math.floor(Math.random() * Math.floor(max));
    }

    goButton.onclick = function(e){
        //var boxes = container.querySelectorAll("div");
        var boxes = container.children;
        // var min = 0;
        // var max = 600;
        // boxes[0].style.left = Math.random() * (max-min) + min + "px";
        // boxes[0].style.left = Math.random() * (max-min) + min + "px";

        for(var i=1; i<=5; i++){
        boxes[i].style.left = getRandomInt(600) + "px";
        boxes[i].style.top = getRandomInt(400) + "px";
    }
    };
});




//ex11 애니메이션
window.addEventListener("load", function(){
    var section = document.querySelector("#ex11");
    var delButton = section.querySelector(".del-Button");
    var box = section.querySelector(".box");
    var container = section.querySelector(".container");

    box.addEventListener("animationend",function(){
        box.parentElement.remove();
    })

    delButton.onclick = function(){
        box.classList.add("ani-slide-open");
    };

   

});

//ex10 스토리기반 애니메이션
window.addEventListener("load", function(){
    var section = document.querySelector("#ex10");
    var contentButton = section.querySelector(".contentButton");
    var xButton = section.querySelector("xButton");
    var screen= section.querySelector(".screen");
    var dialog= section.querySelector(".dialog");
    var content= section.querySelector(".content");
   
    contentButton.onclick = function(){
        // 그라데이션 때문에 주석풀기
        dialog.classList.add("show");

        // dialog.style.display = "block";

        // //꼼수..먼저 실행안되도록 막아주기
        // setTimeout(function(){
        //     screen.style.opacity = 0.7;
        // },10);
}

//앞에 트랜지션 끝나고 실행시키는 것
    screen.addEventListener("transitionend", function(){
        content
        .style
        .display="block";
    })

    screen.onclick = function(){
        dialog.classList.remove("show");
    }
// 결론 : 매니저님이 사람을 잘 못본다
// 나를 못알봄
//사잘알 사잘못 

});


//ex9 트랜지션 애니메이션
window.addEventListener("load", function(){
var section = document.querySelector("#ex9");
var startButton = section.querySelector(".start");
var stopButton = section.querySelector(".pause");
var ball = section.querySelector(".ball");
var cover = section.querySelector(".cover");


startButton.onclick = function(){
    ball.style.transform = "rotate(45deg)";
    //ball.style.top = "400px";
    //ball.style.left = "400px";

alert("시밤바 바밤바");

    //ball.style.width = "300px";
    //ball.style.position = "absolute"; ->자바스크립트에는 동적인 것만 적어주기
    //position을 static 아이들인 absolute fixed relative 중 하나로
    //setInterval(function,반복되는단위시간);

    //style에서 초기값 얻는 것 문제가 있다..초기값 계산해내는 것 필요
    //1번방법 
    //ball.style.top = "0px";
    //ball.style.left = "0px";
    //1번방법 말고 아래처럼 getComputedStyle 사용하자
   
    // var ballstyle = getComputedStyle(ball); //볼이 가진 스타일 얻어왔다
    // ball.style.left = ballstyle.getPropertyValue("left");
    // ball.style.top = ballstyle.getPropertyValue("top");
    // let para = document.querySelector('.ball');
    // let ballStyles = window.getComputedStyle(para);
    
    // var tid = setInterval(function(){
        
    //     var left = parseInt(ball.style.left);
    //     var top = parseInt(ball.style.top);
    //     left += 1;
    //     top += 1;
    //     ball.style.left = left + "px";
    //     ball.style.top = top + "px";
    //     if(left >= 300)
    //         clearInterval(tid);
    // }, 17 );//fps 1000이 1초 요것을 60으로 나눈 것


};


stopButton.onclick = function(e){

}

});




//ex8 트리거
window.addEventListener("load", function(){
var section = document.querySelector("#ex8");
var fileButton = section.querySelector("input[type=file]");
var trigerButton = section.querySelector("input[type=button]");

trigerButton.onclick = function(e){
    alert("aa"); //만들자마자 실험해보기 

    var event = new MouseEvent("click",{
            
            view:window,
            bubbles:true,
            cancelable:true
    }
    );
    fileButton.dispatchEvent(event);
    } 
});







//ex7 공지사항 조작하기 
//---------------------------------------------------

// var notices = [
    //     {
        //         id:6,
        //         title:"뉴렉쌤 9월 초 국기과정 모집 안내",
        //         writerId:"newlec",
        //         regDate:"2019-06-11",
        //         hit:30
        //     },
        //     {
            //         id:5,
            //         title:"뉴렉처 강의 수강 방식 안내",
            //         writerId:"newlec",
            //         regDate:"2019-05-24",
            //         hit:120
            //     },
                                                            
    //     {
    //         id:4,
    //         title:"자바 구조적인 프로그래밍 강의 예제 파일",
    //         writerId:"newlec",
    //         regDate:"2019-04-24",
    //         hit:231
    //     },
    // ];

//     loadButton.onclick = function(){
        
// //방법1 : 맨땅에 DOM 조작 #1 append

//     var keys = Object.keys(notices[0]);//["id","title","writerId","regDate","hit"];
//     for(var i=0; i<notices.length; i++){
//         var tr = document.createElement("tr");
//     for(var j=0; j<5; j++){
//         var td = document.createElement("td");
//         var key =keys[j];
//         //var txt = document.createTextNode(notices[i][key]);
//         td.append(notices[i][key]);
//         tr.append(td);
//     }
//     noticeTbody.append(tr);
// }


        
//방법1 : 맨땅에 DOM 조작 #2 appendChild
// var keys = Object.keys(notices[0]);//["id","title","writerId","regDate","hit"];
// for(var i=0; i<notices.length; i++){
//     var tr = document.createElement("tr");
// for(var j=0; j<5; j++){
//     var td = document.createElement("td");
//     var key =keys[j];
//     var txt = document.createTextNode(notices[i][key]);
//     td.appendChild(txt);
//     tr.appendChild(td);
// }
// noticeTbody.appendChild(tr);
// }
window.addEventListener("load", function(){
    var section = document.querySelector("#ex7");
    var noticeTbody = section.querySelector(".notice tbody");
    var loadButton = section.querySelector(".btn-load");

    //데이터베이스 연동하기
    loadButton.onclick = function(){

        // $.ajax("/notice/list-ajax?p=1")
        // .done(function(data){
        //     alert(data);
        // });

        // $.ajax({
        //     url:"/notice/list-ajax?p=1",
        //     complete:function(data){
        //         alert(typeof data);
        //     }
        // });

        // $.ajax({
        //     url:"/notice/list-ajax?p=1",
        //     dataType: "json",
        //     complete:function(request, status){
        //         alert(request.responseText);
        //     }
        // }).done(function(data){
        //     alert(data[0].title);
        //     //위에서 datatype지정한 것이 여기서 먹음, 파싱할 필요 없음
        // });

        // $.getJSON("/notice/list-ajax?p=1")
        // .done(function(data){
        //     alert(data[0].title);
        // });

        $.get("/admin/notice/list-partial")
        .done(function(partial){
            alert(partial);
            noticeTbody.html(partial);
        });

        $.get("/admin/notice/list-partial?p="+page++)
        .done(function(partial){
            alert(partial);
            noticeTbody.append(partial);
        });

        $(partial)
            .css({opacity:0})
            .appendTo(noticeTbody)
            .animate({opacity:1});
        });


        noticeTbody
            .fadeOut()
            .load("/admin/notice/list-partial?p="+page++)
            .fadeIn();
        //load가 비동기로 이루어져서 뭔가 순서가 이상해짐
        //function사용
        //slideup down 자기 크기 여건이 안되면 실행안됨
        
        noticeTbody
        .fadeOut(function(){
        noticeTbody
        .load("/admin/notice/list-partial?p="+page++)
        .fadeIn();
        });

        //원격의 데이터 요청하기
        //var request = new XMLHttpRequest();
         //request.open("GET","/notice/list-ajax?p=1",false);
         //request.send();
        //ajax는 무조건 비동기로 보내야해
        
        //alert(request.responseText);
        //var json = JSON.parse(request.responseText);
         
         // console.log(json[0].title);
         //notices = notices.concat(json);
        

        //인터넷익스플로러에서 사용  (11버전 전까지) 
        //var request = new ActiveXObject("Microsoft.XMLHTTP");
        //var request = new ActiveXObject("Microsoft.XMLHTTP");
        //var request = new XMLHttpRequest();

        //console.log(notices.length);
        //notices = notices.concat(json);

        //방법3 : 템플릿 문자열을 이용한 DOM 조작 #3
        // var keys = Object.keys(notices[0]); 
        // var html = [];

        //     for(var j=0; j<notices.length; j++){
        //         html.push("<tr>");
        //         for(var i=0; i<5; i++)
        //             html.push("<td>"+ notices[j][keys[i]] + "</td>");
                
        //         html.push("</tr>");
                
        //     }
        //     noticeTbody.innerHTML = html.join("");

        
   
        //방법3 : 템플릿 문자열을 이용한 DOM 조작 #3
       
        // var keys = Object.keys(notices[0]); 
        // var html = [];

        //     for(var j=0; j<notices.length; j++){
        //         html.push("<tr>");
        //         for(var i=0; i<5; i++)
        //             html.push("<td>"+ notices[j][keys[i]] + "</td>");
                
        //         html.push("</tr>");
                
        //     }
        //     noticeTbody.innerHTML = html.join("");



        //방법2 : 템플릿을 이용한 DOM 조작 #2
        // var keys = Object.keys(notices[0]); 
        // var html = "";

        //     for(var j=0; j<notices.length; j++){
        //         html += "<tr>";
        //         for(var i=0; i<5; i++)
        //             html += "<td>"+ notices[j][keys[i]] + "</td>";
                
        //         html += "</tr>"
                
        //     }
        //     noticeTbody.innerHTML = html;
        //noticeTbody.innerText = "<td>hello</td>";;
        //ex6버전으로 하는 방법 다음에 알려달라고 하기

        //방법2: 템플릿을 이용한 DOM 조작 #1
        // var keys = Object.keys(notices[0]);
        // var noticeTbody.innerHTML ="<tr> ";
        //     for(var j=0; j<notices.length; j++){
        //         noticeTbody.innerHTML += "<tr>";
        //         for(var i=0; i<5; i++)
        //         noticeTbody.innerHTML += "<td>"+ notices[j][keys[i]]+"</td>";
        //     }
        //     noticeTbody.innerHTML += "</tr>";
        
        //     };



        //방법1 : 맨땅에 DOM 조작하기
//         var keys = Object.keys(notices[0]);//["id","title","writerId","regDate","hit"];
//         for(var i=0; i<notices.length; i++){
//             var tr = document.createElement("tr");
//         for(var j=0; j<5; j++){
//             var td = document.createElement("td");
//             var key =keys[j];
//             var txt = document.createTextNode(notices[i][key]);
//             td.appendChild(txt);
//             tr.appendChild(td);
//         }
//         noticeTbody.appendChild(tr);
//     }
     };
 });


//ex6 노드 조작하기 
//---------------------------------------------------
// $(function(){
//     var section = $("#ex6");
    
    

    
//     elbutton.click(function(){
//         var el = $("<div>");

//         el
//             .addClass("box")
//             .appendTo(container); 
//             //꼬리와 꼬리물 수 있으니 부모와 자식 순서바꿀수있는 to
//         //container.append(el);
//     });
    
//     tebutton.click(function(){
//         console.log("test");
//         //var textNode = document.createTextNode("안녕하세요");
//         container.append("안녕하세요");

//     });

// });




//ex5 속성 다루기 
//---------------------------------------------------
//우리는 쿼리셀렉터로 css 만질거니까 
//아이디는 샾 클래스는 쩜 붙이는 거 잊지말자
$(function(){
    var section = $("#ex5");
    var button1 = section.find(".btn1"); //querySelector, find -> 자손
    var button2 = section.find(".btn2");
    var img = $("img");
    var tid;
    
    button1.click(function(){
        //img의 html 속성인 src 부터 
        img.attr("src", "http://www.vdcm.co.kr/news/photo/201803/4538_13153_5736.jpg")
        //value만 빼고 다 src로 
        console.log(img.width());
        img.fadeOut(1000);
    });
    button2.click(function(){
        //jquery객체 반환하니까 .으로 계속 이어갈 수 있다
        //function인자 넣어주기
        img.animate({width: "200px"},1000)
            .animate({borderBottom: "3px solid blue"},1000)
            .delay(2000)
            .animate({opacity: 0.5},1000, function(){
                button1.animate({width : "200px"},1000);    
            });
        
        //여러 개 순서 적용할 때
        //img.animate({width: "200px"},3000);
        //img.animate({borderBottom: "3px solid blue"},3000);
        //img.animate({opacity: 0.5},3000);
        //같은 객체끼리는 순서가 적용되는데
        //객체가 다르면 적용 안된다
        //button1.animate({width : "200px"},1000);

        //여러 개 설정할 때
        // img.animate({width: "200px",
        //              borderBottom: "3px solid blue"},3000);
        //한 개 설정할 때
        //img.css("border-bottom", "3px solid blue");

        //너비를 200px로 줄이는 애니메이션
        // var f1 = function(){
        //     //img.width; ->300 로나와서 px 뗄 필요없음
        //     //img.style.width; -> "300px" 로 나옴
        //     var width = parseInt(img.css("width"));
        //     console.log(width)
        //     //width -= 3;
        //     //img.css("width", width+'px');
        //     img.css("width", "-=1");
            
        //     if(width <= 200)
        //         window.clearInterval(tid);
           
            
        // };
        //     if(tid == undefined)
        //         tid = window.setInterval(f1,100);
        //     //1000 나누기 60
    });
    });        
        

//이미지 select 하기

    $(function(){
        var section = $("#ex5");
        var select = $(".img-select"); 
        var button3 = $(".btn3");
        var img = $("img");
        
        button3.click(function(){
            console.log(select.val);
            console.log($("#ex5>select>option").val)
            img.src = select.val;

            
    });

});


// //ex4 ---------------------------------------------------
// // 노드선택,검색
$(function(){
    
    //     // 노드선택방법 1 (태그네임으로 검색)
    //     // 0번째 input 찾기
    //var button = section.children("input").eq(0); //새로운jquery객체반환
    //get(0); //내려
    
    var section = $("#ex4");
    var button = section.children("input").eq(0);
    var ul = section.children("ul");
    var lis = ul.children("li");

    button.click(function(){
        button.val("설정 헤헤")
        lis.eq(3).remove();

    });
});

//         //ul.appendChild(lis[3]); 쿼리셀렉터 다시 추가하면 맨끝에 삽입됨
//         console.log("test");
// 방법 3
// $(function(){
//     var section = $("#ex4");
// var button = section
//                 .eq(0)
//                 .children()
//                 .first(); 
// var ul = button.next().next();
// var lis = ul.children();
// console.log(lis);
 
// });













// //ex3 ---------------------------------------------------
window.addEventListener("load",function(){
    var ex3Button = document.getElementById("btn-ex3");
    var view = document.getElementById("view");
    
    var fwin = view.contentWindow;
    var fex3Button = fwin.document.getElementById("btn-ex3");

    //실행속도, 로드속도에 따라 실행 안될 수 있으니
    //로드 따로 해주는 것이 좋음
    //문서가 경량화됐나..출력이 안되고..안되네...? 나중에 알려주신데..
    // view.onload = function(){
    //     console.log("loaded");
    //     fex3Button = fwin.document.getElementById("btn-ex3");
    // }
    ex3Button.onclick = function(){
        fex3Button.value = "안녕하세요";

        window.location.href="http://www.newlecture.com";
        console.log(window.location.port);
    }

});


// //ex2 ---------------------------------------------------
$(function(){
    var countdownButton = $("#countdown-button");
    var countSpan = $("#count-span");
    var tid; //할당하면 다시 재선언되지않도록 위로 올려주기
    
    countdownButton.click(function(){
        $(function f1() {
        var count = parseInt(countSpan.text());
        //console.log(count);
        count--;
        countSpan.text(count);
   
        if(count == 0)
            clearInterval(tid);
        });

        if(tid == undefined)
            tid = setInterval(f1,1000);
    });
});




// //이벤트 명 load 속성명은 onload -> 이벤트추가할때 on뺀다
// //ex1 ---------------------------------------------------



$(function(){
    var btnResult = $("#btn-result");
    var xInput = $("#x-input");
    var yInput = $("#y-input");
    
    btnResult.val("계산을하기");
    xInput.val(30);
    yInput.val(50);

    btnResult.click(function(){
        var x = parseInt(xInput.val());
        var y = parseInt(yInput.val());
        alert(x+y);
    });
});