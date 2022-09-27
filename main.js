var speechrecognition= window.webkitSpeechRecognition;

Webcam.set({
    width: 360, height: 250, image_format: 'jpeg', jpeg_quality: 90
});

var camera = document.getElementById("camera");
Webcam.attach(camera);


var recognition= new speechrecognition();

function start(){
    document.getElementById("voiceouputtextarea").innerHTML="";
    recognition.start();
}

recognition.onresult = function(event){

    console.log(event);

    var Content =event.results[0][0].transcript;
    console.log(Content);

    document.getElementById("voiceouputtextarea").innerHTML = Content;
    if(Content=="take my selfie"){
    speak();
    }
}

function speak(){
    var synth=window.speechSynthesis;

    var speak_data = "TAKING YOUR SELFIE IN 5 SECONDS... SO BE READY TECHNOBALDE";
    var utterThis = new SpeechSynthesisUtterance(speak_data);
    synth.speak(utterThis);
    
    setTimeout(function(){
        takesnapshot();
        save();
    },5000);}

function takesnapshot(){
    Webcam.snap(function(data_uri){
        document.getElementById("result").innerHTML= "<img id='selfie_image' src="+data_uri+">"
    });
}

function save(){
    var image_link = document.getElementById("selfie_image").src;
    var link = document.getElementById("link");
    link.href = image_link;
    link.click();
}


