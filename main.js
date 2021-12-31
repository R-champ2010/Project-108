function startClassification(){
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier=ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/AbZdhWomS/model.json',modelReady); 
}

function modelReady(){
    classifier.classify(gotResults);
}
var Dog =0;
var Cat=0;
function gotResults(error,results){
    console.log("got result");
}

function gotResults(error,results){
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r=Math.floor(Math.random()*255)+1;
        random_number_g=Math.floor(Math.random()*255)+1;
        random_number_b=Math.floor(Math.random()*255)+1;

        document.getElementById("result_label").innerHTML='I can hear - '+
        results[0].label;
        document.getElementById("result_confidence").innerHTML='Detected Dog - '+Dog+'Detected Cat - '+Cat;
        document.getElementById("result_label").style.color="rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("result_confidence").style.color="rgb("
        +random_number_r+","+random_number_g+","+random_number_b+")";

        img=document.getElementById("image");


        if (results[0].label == "Dog"){
            img.src='dog.gif';
            Dog=Dog+1;
        }
        else if (results[0].label == "Cat"){
            img.src='cat.gif';
            Cat=Cat+1;
        }
        else {
            img.src='listen.gif';
        }           
    }

    console.log("got result");
}
