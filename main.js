
Webcam.attach("#camera")

Webcam.set({
    width: 500,
    height: 400,
    image_format: "png",
    png_quality: 90
})

function captureimage() {
    Webcam.snap(function (datauri) {
        document.getElementById("result").innerHTML = "<img src='" + datauri + "' id='snapshot'>"
    })
}

console.log(ml5.version)
classifier = ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/-FIGBdviz/model.json", modelLoaded)

function modelLoaded() {
    console.log("HELLO")
}


function gotresult(error, result) {
    if (error) {
        console.log(error)
    }
    else {
        console.log(result)
        prediction1 = result[0].label
        console.log(prediction1)
        document.getElementById("emotion_name1").innerHTML = prediction1
        speak()

        if (prediction1 == "Amazing") 
        {
            document.getElementById("emoji1").innerHTML = "&#128076;"
        }
        if (prediction1 == "All the best") 
        {
            document.getElementById("emoji1").innerHTML = "&#128077;"
        }

        if (prediction1 == "Victory") 
        {
            document.getElementById("emoji1").innerHTML = "&#9996;"
        }

    }}