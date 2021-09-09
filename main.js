Webcam.set({
    width:350,
    height:350,
    image_format:'png',
    png_quality:100
});

camera=document.getElementById("camera");

Webcam.attach('#camera');

function click(){
    Webcam.snap(function(img){
        document.getElementById("result").innerHTML='<img id="captured" src="'+img+'">';
    })
}