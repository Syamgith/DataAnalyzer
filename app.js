function allowDrop(ev) {
    ev.preventDefault();
  }
  
  function drag(ev) {
    ev.dataTransfer.setData("text", ev.target.id);
  }
  
  function drop(ev) {
    ev.preventDefault();
    var data = ev.dataTransfer.getData("text");
    
    ev.target.appendChild(document.getElementById(data));
  }
  $(document).ready(function(){
    let joinHtml = '<div id="joinclick">' +
    'Verify the primary key for joining'
    +
    '<select>' +
          '<option>' + 'CustomerId' +'</option>' +
          '<option>' + 'OrderID' +'</option>' +
    '</select>' +
    '</div>'
   
    $("#join").click(function(){
        $("#joinclick").remove();
        $("#tranformclick").remove();
        $("#outputclick").remove();
        $("#visualizer").append(joinHtml);
    });
  });

  $(document).ready(function(){
    let tranformHtml = '<div id="tranformclick">' +
    'Which transformation you want to apply?'
    +
    '<select>' +
          '<option>' + 'Accending' +'</option>' +
          '<option>' + 'Decending' +'</option>' +
    '</select>' +
     '</div>'
   
    $("#tranform").click(function(){
        $("#joinclick").remove();
        $("#tranformclick").remove();
        $("#outputclick").remove();
        $("#visualizer").append(tranformHtml);
    });
  });
  
  $(document).ready(function(){
    let outputHtml = '<div id="outputclick">' +
    'Select output file type' + 
    
    '<select>' +
          '<option>' + 'CSV' +'</option>' +
          '<option>' + 'MySQL' +'</option>' +
    '</select>' +'</div>'
   
    $("#output").click(function(){
        $("#joinclick").remove();
        $("#tranformclick").remove();
        $("#outputclick").remove();
        $("#visualizer").append(outputHtml);
    });
  });
// onclick mysql
$(document).ready(function(){
  let mysql = '<form id="form">' +
  '<br>' +
  '<input type="text" name="root" placeholder="root"><br>'+
  '<br>'+
  '<input type="password" name="password" placeholder="password">'+
  '<br>'+
  '<input type="text" name="localhost" placeholder="localhost"><br>'+
  '<br>'+
  '<button type="submit" form="form1" value="Submit">Submit</button>'+
'</form>'
 
  $("#mysql").click(function(){
      $("form").remove();
      $("#fil").empty();
      $("#selectformat").append(mysql);
  });
});
//onclick cvc
$(document).ready(function(){
  let csv = 'Select files: <input type="file" name="myFile" multiple><br><br>'+
  '<input type="submit">'
 
  $("#csv").click(function(){
      $("form").remove();
      $("#fil").empty();
      $("#fil").append(csv);
  });
});
//colapse
var coll = document.getElementsByClassName("collapsible");
var i;

for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.toggle("active");
    var content = this.nextElementSibling;
    if (content.style.display === "block") {
      content.style.display = "none";
    } else {
      content.style.display = "block";
    }
  });
}
//csv on click
$(document).ready(function(){
  $("#cs").click(function(){

      $("#innermysql").hide();
    
  });
});
//mysql onclick
$(document).ready(function(){
  $("#ms").click(function(){

      $("#innermysql").show();
  });
});