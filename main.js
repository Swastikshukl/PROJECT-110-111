Webcam.set({
    width:350,
    height:300,
    image_format:'png',
    png_quality:90
});
camera=document.getElementById("camera");
Webcam.attach('#camera');

function take_snapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML='<img id="capture_image" src="'+data_uri+'"/> ';
    });

}
console.log('ml5 version:', ml5.version);
classifier=ml5.imageClassifier('https://teachablemachine.withgoogle.com/models/5mxzZHkpx/model.json', modelLoaded);

function modelLoaded (){
    console.log('model loaded!');

}
function speak(){
    var synth=window.speechSynthesis;
    data_1="the first prediction is"+prediction_1;
    data_2=" and the second prediction is"+predicition_2;
    var utterthis=new SpeechSynthesisUtterance(data_1+data_2);
    synth.speak(utterthis);
    
}