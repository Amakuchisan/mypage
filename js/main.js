window.onload = function(){
    document.getElementById("name").addEventListener("click", function(){
        let name = prompt("お名前は？");
        document.getElementById("talk").textContent = name + "さん、ようこそ！";
    });
  }