window.onload = function(){
    document.getElementById("name").addEventListener("click", function(){
        var name = prompt("お名前は？");
        console.log(name);
        document.getElementById("talk").textContent = name + "さん、ようこそ！";
    });
  }