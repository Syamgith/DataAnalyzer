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
    'Verify the primary key for joining' + '</div>'
   
    $("#join").click(function(){
        $("#joinclick").remove();
        $("#tranformclick").remove();
        $("#outputclick").remove();
        $("#visualizer").append(joinHtml);
    });
  });

  $(document).ready(function(){
    let tranformHtml = '<div id="tranformclick">' +
    'Which transformation you want to apply?' + '</div>'
   
    $("#tranform").click(function(){
        $("#joinclick").remove();
        $("#tranformclick").remove();
        $("#outputclick").remove();
        $("#visualizer").append(tranformHtml);
    });
  });
  
  $(document).ready(function(){
    let outputHtml = '<div id="outputclick">' +
    'Select output file type' + '</div>'
   
    $("#output").click(function(){
        $("#joinclick").remove();
        $("#tranformclick").remove();
        $("#outputclick").remove();
        $("#visualizer").append(outputHtml);
    });
  });