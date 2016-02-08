  var countOfBadPixls = 0;
  var refreshStatus = 0;
  
  function mainFunction(){

  var  countOfBadPixls = 0;
  var  refreshStatus = 0;
  var img = document.getElementById('img');
  var canvas = document.getElementById('myCanvas');
  var context = canvas.getContext("2d");

  context.drawImage(img, 0, 0);

  var imageData = context.getImageData(0, 0, 512, 512);
  var a1 = (Math.random() * (3 +3) - 3);
    var a2 = (Math.random() * (3 +3) - 3);
      var a3 = (Math.random() * (3 +3) - 3);
        var a4 = (Math.random() * (3 +3) - 3);
          var a5 = (Math.random() * (3 +3) - 3);
            var a6 = (Math.random() * (3 +3) - 3);
              var a7 = (Math.random() * (3 +3) - 3);
                var a8 = (Math.random() * (3 +3) - 3);
                  var a9 = (Math.random() * (3 +3) - 3);
  console.log("a1 == "+a1);
  console.log("a2 == "+a2);
  console.log("a3 == "+a3);
  console.log("a4 == "+a4);
  console.log("a5 == "+a5);
  console.log("a6 == "+a6);
  console.log("a7 == "+a7);
  console.log("a8 == "+a8);
  console.log("a9 == "+a9);               
  

  var pixels = imageData.data;
  for (var i = 0; i < pixels.length; i ++) {
    var r = pixels[i];
    var g = pixels[i + 1];
    var b = pixels[i + 2];
    pixels[i]     = (pixels[i]*a1)+(pixels[i+1]*a2)+(pixels[i+2]*a3)+(pixels[i+4]*a4)+(pixels[i+5]*a5)+(pixels[i+4]*a6)+
    (pixels[i+8]*a7)+(pixels[i+9]*a8)+(pixels[i+10]*a9);
    if(pixels[i]==0){
      countOfBadPixls++;
    }
    
    


  }


  refreshStatus =  countOfBadPixls/(pixels.length*100);
  console.log(refreshStatus);
  console.log(countOfBadPixls);
/*  if (refreshStatus==0.01) {
    mainFunction();
  }*/ //poka hz kak pofiksit' eto 
  context.putImageData(imageData, 0, 0);

}
mainFunction();

document.getElementById("refresh").addEventListener("click", mainFunction);