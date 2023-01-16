var prediction1, prediction2;
Webcam.set({
width: 350,
height:300,
image_format: 'png',
png_quality: 90
});
camera= document.getElementById("camera");
Webcam.attach(camera);

function Take_Snapshot(){
Webcam.snap(function(image){
document.getElementById("result").innerHTML="<img src="+image+" id='taken_image'>"
});
}
console.log(ml5.version);
classify=ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/KiUEQR2Ow/model.json",modelloaded);
function modelloaded(){
    console.log("modelloaded");
}
function speak(){
    var synth=window.speechSynthesis; 
    var speakdata1="The 1st Prediction is "+prediction1;
    var speakdata2="The 2nd Prediction is "+prediction2;
    var utterthis=new SpeechSynthesisUtterance(speakdata1+speakdata2);
    synth.speak(utterthis);
}
function Predict(){
img= document.getElementById("taken_image");
classify.classify(img, got_result)
}
function got_result(error, results) {
    if (error) {
        console.error (error)
        
    } else {
        console.log(results)
        document.getElementById("result_emotion_name").innerHTML= results[0].label;
        document.getElementById("result_emotion_name2").innerHTML= results[1].label;
prediction1= results[0].label;
prediction2= results[1].label;
speak()
if(prediction1=="Sad"){
document.getElementById("update_emoji").innerHTML="&#128532";
}
else if (prediction1=="Happy"){
document.getElementById("update_emoji").innerHTML="&#128512";
}
else if (prediction1=="Angry"){
    document.getElementById("update_emoji").innerHTML="&#128545";
}
if(prediction2=="Sad"){
    document.getElementById("update_emoji2").innerHTML="&#128532";
    }
    else if (prediction2=="Happy"){
    document.getElementById("update_emoji2").innerHTML="&#128512";
    }
    else if (prediction2=="Angry"){
        document.getElementById("update_emoji2").innerHTML="&#128545";
    }
}
    }
