function toggleTheme(){
    var themeImage = document.getElementById("themeImage")
    var body = document.getElementById("mainContainer")
    var toggleText = document.getElementById("mainText")
    var toggleText2 = document.getElementById("mainText2")
    var toggleText3 = document.getElementById("mainText3")
    var toggleBorder = document.querySelectorAll(".toggleBorder")
    if(themeImage.src.includes("sun.png")){
        themeImage.src = "Moon.png"
        body.style.backgroundColor = "#312d2d"
        toggleText.style.color = "#fff"
        toggleText2.style.color = "#fff"
        toggleText3.style.color = "#fff"
        for(var i = 0; i < toggleBorder.length; i++){
            toggleBorder[i].style.border = "3px solid #fff"
        }
    }
    else if(themeImage.src.includes("Moon.png")){
        themeImage.src = "sun.png"
        body.style.backgroundColor = "#fff"
        toggleText.style.color = "#000"
        toggleText2.style.color = "#000"
        toggleText3.style.color = "#000"
        for(var i = 0; i < toggleBorder.length; i++){
            toggleBorder[i].style.border = "3px solid #000"
        }
    }
    console.log("працює :))")
}