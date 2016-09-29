var html = '';
var rgbColor;
var chooseColor

function getColor () {
 var colorNum = Math.floor(Math.random() * 256 );
 return colorNum;
}
  
for ( var i = 1; i <= 10; i += 1 ) {
  rgbColor = 'rgb(' + getColor() + ',' + getColor() + ',' + getColor() + ')';
  html += '<div style="background-color:' + rgbColor + '"></div>';
}

document.write(html);