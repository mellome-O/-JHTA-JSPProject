
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
window.addEventListener("load", function(){
    var section = document.querySelector("#ex14");
    var tabmenuList = section.querySelector(".tab-menu-list");
    var tabs = section.querySelectorAll(".tab-menu-list li");
    var contentList = section.querySelector(".content-list");
    //var contents = contentList.children;
    var contents = section.querySelectorAll(".content-list div");

    tabmenuList.onclick = function(e){
        if(e.target.tagName != "A")
            return;
        
        e.preventDefault();

    var contentId = e.target.href.split("#");
    alert("현재 contentId는 " + contentId[1] +"입니다.");

    //항목이 많을 때는 분기문으로 있냐없냐 알아봐서 지우는 게 성능에 좋고
    //항목이 별로 없을 때는 분기문 쓰지말고 아래처럼 하는 것이 좋다
    for(var i=0; i<contents.length; i++)
        contents[i].classList.remove("current");

    
    var contentDiv = contentList.querySelector("#"+contentId);
    contentDiv.classList.add("current");
    }
});

//hw1
window.addEventListener("load", function(){
    var section = this.document.querySelector("#hw1");
    var prevButton = section.querySelector(".prev-button");
    var nextButton = section.querySelector(".next-button");

    var imgList = section.querySelector(".img-list");
    var lis = imgList.children;

nextButton.onclick = function(){
    var frontLi = imgList.querySelector(".front");
    var rightLi = imgList.querySelector(".right");
    var backLi = imgList.querySelector(".back");
    var leftLi = imgList.querySelector(".left");

    frontLi.classList.remove("front");
    frontLi.classList.add("right");
    rightLi.classList.remove("right");
    rightLi.classList.add("back");
    backLi.classList.remove("back");
    backLi.classList.add("left");
    leftLi.classList.remove("left");
    leftLi.classList.add("front");
}
prevButton.onclick = function(){
    var frontLi = imgList.querySelector(".front");
    var rightLi = imgList.querySelector(".right");
    var backLi = imgList.querySelector(".back");
    var leftLi = imgList.querySelector(".left");

    frontLi.classList.remove("front");
    frontLi.classList.add("left");
    rightLi.classList.remove("right");
    rightLi.classList.add("front");
    backLi.classList.remove("back");
    backLi.classList.add("right");
    leftLi.classList.remove("left");
    leftLi.classList.add("back");


}



});



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
window.addEventListener("load", function(){
    var section = document.querySelector("#ex7");
    var noticeTbody = section.querySelector(".notice tbody");
    var loadButton = section.querySelector(".btn-load");

    var notices = [
        {
            id:6,
            title:"뉴렉쌤 9월 초 국기과정 모집 안내",
            writerId:"newlec",
            regDate:"2019-06-11",
            hit:30
        },
        {
            id:5,
            title:"뉴렉처 강의 수강 방식 안내",
            writerId:"newlec",
            regDate:"2019-05-24",
            hit:120
        },
        {
            id:4,
            title:"자바 구조적인 프로그래밍 강의 예제 파일",
            writerId:"newlec",
            regDate:"2019-04-24",
            hit:231
        },
    ];

//     loadButton.onclick = function(){
        
// //방법1 : 맨땅에 DOM 조작 #1 append
// //create와 append 두 줄이 한 줄로 줄어듬!
// //원래 append 는 node객체만 가능했다
// //문자열, node객체 모두 append 메소드로 가능!
// //텍스트 객체 만들필요 없음 자동으로 만들어줌


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
    

    //데이터베이스 연동하기
    loadButton.onclick = function(){
        //Ajax (Asynchronous Javascript And XML)
        //자바스크립트, CSS, ...
        //비동기로 데이터를 서버와 교신하게 해주는 모든 활용 기술들 
        //비동기 데이터포맷  -->WEB 2.0, 3.0 ...
        //과거 웹 --> 계속 PAGE를 요청
        //변화 --> 계속 PAGE요청하지 않고 DOM 이용 , 데이터 서버에서 제공받아 한 PAGE 유지
        //DATA만 요청받아 화면 재구성하는 것
        //Single Page Application 

        
        //원격의 데이터 요청하기
        //자바에서 사용하는 데이터 자바스크립트로 전달하겠다
        // 포맷팅 포맷문자열 필요 
        //xml로 보내거나 json나  csv 로 보내도 됨
        var request = new XMLHttpRequest();
        request.open("GET","/notice/list-ajax?p=1",false);
        //주소 호출할 때 포트번호 주소 다르니까 오류뜸
        //편집, 작성, 적용만 여기서 하고 실행은 해당 포트번호에서 실행
        request.send();

        //alert(request.responseText);
        var json = JSON.parse(request.responseText);
        //목록을 추가하거나 대체하거나 둘 중 하나 결정에 따라 달라짐
        //대체하고싶으면
        //notices = json;
        //기존목록에 새로운 배열 추가하고싶으면
        console.log(json[0].title);
        notices = notices.concat(json);
        

        //인터넷익스플로러에서 사용  (11버전 전까지) 
        //var request = new ActiveXObject("Microsoft.XMLHTTP");

        //var request = new ActiveXObject("Microsoft.XMLHTTP");
        //var request = new XMLHttpRequest();


        
        
        console.log(notices.length);
        
        //방법3 : 템플릿 문자열을 이용한 DOM 조작 #3
        var keys = Object.keys(notices[0]); 
        var html = [];

            for(var j=0; j<notices.length; j++){
                html.push("<tr>");
                for(var i=0; i<5; i++)
                    html.push("<td>"+ notices[j][keys[i]] + "</td>");
                
                html.push("</tr>");
                
            }
            noticeTbody.innerHTML = html.join("");

        
   
        //방법3 : 템플릿 문자열을 이용한 DOM 조작 #3
        //3가지 방법 중 작동 속도 가장 빠른 방법
        //ES6 ES5와 플랫폼은 같지만 언어가 달라질 때 어떻게 달라질까
        
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
window.addEventListener("load", function(){
    var section = document.querySelector("#ex6");
    var tebutton = section.querySelector(".btn-add-text");
    var elbutton = section.querySelector(".btn-add-element");
    var container = section.querySelector(".container");
    
    elbutton.onclick = function(){
        var el = document.createElement("div");
        //클래스는 예약어이기 때문에 클래스 속성을 그대로 쓸 수 없다.
        //className 이라는 속성을 이용하거나 대괄호로 ! 
        //el["classname넣고"] //1번방법
        el.className = "box"; //2번방법
        container.appendChild(el);
    } 
    
    tebutton.onclick = function(){
        //여기까지 오류가 있는 지 없는 지 제일 먼저 콘솔에 테스트 찍어보기
        console.log("test");
        //템플릿기반이 아니라 직접 노드를 만지는 것 
        //노드를 생성해야함
        //노드를 생성할 수 있는 기능은 엘리먼트,텍스트노드가 아닌
        //다큐먼트노드만 유일하게 가지고 있는 기능
        var textNode = document.createTextNode("안녕하세요");
        container.appendChild(textNode);

    };

});




//ex5 속성 다루기 
//---------------------------------------------------
//우리는 쿼리셀렉터로 css 만질거니까 
//아이디는 샾 클래스는 쩜 붙이는 거 잊지말자
// window.addEventListener("load", function(){
//     var section = document.querySelector("#ex5");
//     var button1 = section.querySelector(".btn1");
//     var button2 = section.querySelector(".btn2");
//     var img = section.querySelector("img");
//     var tid;
    
//     button1.onclick = function(){
//         //img의 html 속성인 src 부터 
//         img.src = "http://www.vdcm.co.kr/news/photo/201803/4538_13153_5736.jpg"
//         //스타일속성
        
//     }
//     button2.onclick = function(){
//         //대문자 혹은 대괄호로 구분
//         //img.style["border-bottom"] = "3px solid blue";
//         img.style.border = "14px solid #00ff00";
//         //img.width -= 10;
//         //이렇게 DOM이용해서는 조정이 안된다.
//         //DOM 세팅이 아닌 읽기전용만 제공 
//         //스타일 속성 이용해야함
//         console.log(img.width);
//         var f1 = function(){
//             var width = img.width;
//             width -= 3;
//             img.style.width = width+"px";
           
//             if(width <= 200)
//             window.clearInterval(tid);
            
//             };
//             if(tid == undefined)
//                 tid = window.setInterval(f1,100);
//             //1000 나누기 60
 
//         //스타일의 속성 사용하기
//         //img.style.width = "200px";
//         console.log(img.naturalWidth);
//     }
//     });        
        

//이미지 select 하기

    window.addEventListener("load", function(){
        var section = document.querySelector("#ex5");
        var select = section.querySelector(".img-select"); 
        var button3 = section.querySelector(".btn3");
        var img = section.querySelector("img");
        
        button3.onclick = function(){
            console.log(select.value);
            console.log(document.querySelectorAll("#ex5>select>option").value)
            img.src = select.value;

            
    }

});




// //ex4 ---------------------------------------------------
// // 노드선택,검색
// window.addEventListener("load", function(){
//     var section = document.getElementById("ex4");

//     //노드선택방법 4 (제일편하고, 최근 브라우저에서만 제공)
//     var button = document.querySelector("#ex4>input"); 
//     //버튼은 document에서 찾은거고
//     var ul = section.querySelector("ul");
//     //ul은 상대적으로 섹션에서 찾은거
//     var lis = ul.querySelectorAll("li");
//     //노드리스트는 그 항목만 지워주고 끝 
//     //(노드리스트에서는 그대로 유지되고, 
//     //메모리에는 있으나 화면에만 출력이 안됨, 별도의 리스트에서 보관하며
//     //다시 살릴 수 있음 ul.appendChild(lis[3]);로 살아나면
//     //맨끝에 추가가 됨) 
//     //-->라이브러리가 제공하는 컬렉션

//     //(따라가면서 계속 지워주던 아래방법의 html컬렉션과 다름) 
//     //-->플랫폼이 제공하는 컬렉션
//     console.log(lis);


//     //노드선택방법 3
//     //var button = section.firstChild; //모든 자식 노드들
//     //var button = section.firstElementChild; //엘리먼트 자식 노드들
//     //var ul = button.nextElementSibling;
//     //var lis = ul.children;
//     //console.log(lis); 
//     //html컬렉션 

//     //노드선택방법 2 (김가네 셋째아들)
//     //var ul = section.childNodes[2];  //모든 자식노드들
//     //var button = section.children[0];  //엘리먼트 자식 노드들만
//     //console.log(button.nodeType);
//     //var ul = section.children[1];
//     //var lis = ul.children;


//     // 노드선택방법 1 (태그네임으로 검색)
//     // 0번째 input 찾기
//     // var button = section.getElementsByTagName("input")[0];
//     // var ul = section.getElementsByTagName("ul")[0];
//     // var lis = ul.getElementsByTagName("li");


//     button.onclick = function(){
//         lis[3].remove();
//         //ul.appendChild(lis[3]); 쿼리셀렉터 다시 추가하면 맨끝에 삽입됨
//         console.log("test");
//     };
// });













// //ex3 ---------------------------------------------------
// window.addEventListener("load",function(){
//     var ex3Button = document.getElementById("btn-ex3");
//     var view = document.getElementById("view");
    
//     var fwin = view.contentWindow;
//     var fex3Button = fwin.document.getElementById("btn-ex3");

//     //실행속도, 로드속도에 따라 실행 안될 수 있으니
//     //로드 따로 해주는 것이 좋음
//     //문서가 경량화됐나..출력이 안되고..안되네...? 나중에 알려주신데..
//     // view.onload = function(){
//     //     console.log("loaded");
//     //     fex3Button = fwin.document.getElementById("btn-ex3");
//     // }
//     ex3Button.onclick = function(){
//         fex3Button.value = "안녕하세요";

//         window.location.href="http://www.newlecture.com";
//         console.log(window.location.port);
//     }

// });


// //ex2 ---------------------------------------------------
// window.addEventListener("load",function(){
//     var countdownButton = document.getElementById("countdown-button");
//     var countSpan = this.document.getElementById("count-span");
//     var tid; //할당하면 다시 재선언되지않도록 위로 올려주기
//     countdownButton.onclick = function(){
        

//         var f1 = function(){
//         var count = parseInt(countSpan.innerText);

        
//         console.log(count);
//         count--;
//         countSpan.innerText = count;
   
//         if(count == 0)
//             window.clearInterval(tid);
//         };

//         if(tid == undefined)
//             tid = window.setInterval(f1,1000);
//     };
// });




// //이벤트 명 load 속성명은 onload -> 이벤트추가할때 on뺀다
// //ex1 ---------------------------------------------------


// window.addEventListener("load", function(){
//     var btnResult = document.getElementById("btn-result");
//     btnResult.value = "계산하기"

    
//     btnResult.onclick = function(){
//     var x = parseInt(document.getElementById("x-input").value);
//     var y = parseInt(document.getElementById("y-input").value);

//     var result = x+y;
//     alert(result);
//     };
// });