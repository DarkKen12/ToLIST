var node=document.getElementsByTagName("li");
var j;
for(j=0;j<node.length;j++)
{
  var sp=document.createElement("SPAN");
  var textn=document.createTextNode("\u274C")
  sp.className="close";
  sp.appendChild(textn);
  node[i].appendChild(sp);
}

var close=document.getElementsByClassName("close");
var m;
for (m=0;m<close.length;m++)
{
  close[i].onclick=function(){
    var di=this.parentElement;
    di.style.display=none;
  }
}


function newAdd() {
  var li = document.createElement("li");
  var inputValue = document.getElementById("input").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("You must write something!");
  } else {
    document.getElementById("list").appendChild(li);
  }
  document.getElementById("input").value = "";

  var sp = document.createElement("SPAN");
  var txt = document.createTextNode("\u274C");
  sp.className = "close";
  sp.appendChild(txt);
  li.appendChild(sp);

  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    }
  }
}













