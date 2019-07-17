window.addEventListener("load", function(){
    var section = this.document.querySelector("#upload");
    var dropZone = section.querySelector(".drop-zone");

    //drop zone 에서 사용되는 이벤트
    dropZone.addEventListener("dragenter", function(e){
        e.preventDefault(); //파일 열리지 않도록 기본행위 막기
        console.log("들어왔니?");

        // for(var key in e.dataTransfer) //키를 뽑아낸다
        //     console.log(key);
        for(var key in e.dataTransfer.types)
            console.log(e.dataTransfer.types[0]);
    });
    dropZone.addEventListener("dragleave", function(e){
        e.preventDefault();
        console.log("나갔니?");
        dropZone.classList.remove("invalide");
        dropZone.classList.remove("valide");
    });
    dropZone.addEventListener("dragover", function(e){
        e.preventDefault();
        console.log("위에 있니?");
        if(e.dataTransfer.types[0] == "Files")
        {//alert("드랍하세요");
        dropZone.classList.add("valide");
    }
        else{
            console.log("유효한 파일이 아닙니다.");
            dropZone.classList.add("invalide");
        }
    });
    dropZone.addEventListener("drop", function(e){
        e.preventDefault();
        dropZone.classList.remove("valide");
        dropZone.classList.remove("invalide");
        console.log("드랍?");
        
        var files = e.dataTransfer.files;
        var size = files.length;

        if(size>1){
            alert("파일은 하나씩만 업로드 할 수 있습니다.");
            return;
        }
        var file = files[0];
        console.log(file.type); //파일종류

        var regex = new RegExp("image/(jpeg|png|gif)");

        if(!file.type.match(regex)){
            alert("유효한 파일 형식이 아닙니다.");
            return;
        }

        if(file.size>9*1024*1024){
            alert("10메가 이상의 파일은 업로드 할 수 없습니다.");
            return;
        }

        //동기형 xhr
        var request = new XMLHttpRequest();
        request.open("POST", );
        request.send();

        request.responseText;


    });
    /*
    // drop zone 에서 사용되는 이벤트
    dragenter   : 드래그된 리소스가 drop zone에 들어올 때
    dragleave   : drop zone에 있던 드래그가 영역 밖으로 나갈 때
    dragover    : drop zone에서 드래그 상태로 이동중일 때
    drop        : drop zone에서 드랍할 때
    */
});