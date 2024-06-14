


//For Character 1
    function secondPerson() {
    
    var myCanvasId = document.getElementById("myCanvas")
    
    var choosePersonId = document.getElementById("choosePerson")
    
    var choosePersonId = document.getElementById("choosePerson")
    
    choosePersonId.style.opacity = "0"
    
    setTimeout(() => {
        
        choosePersonId.style.display = "none"
        
    }, 1000)  

    choosePersonId.style.opacity = "0"
    
    var ctx = myCanvasId.getContext("2d")
    
    //This is Images Value
    var img = new Image()
     img.src = "css/images/person/person2.png"
     img.width = 450
     img.height = 500
     let x = 70
     let y = 90
     
     
     
     function draw() {
        
        ctx.clearRect(0, 0, myCanvasId.width, myCanvasId.height)
        
        ctx.drawImage(img, x, y, img.width, img.height)
        
        requestAnimationFrame(draw)//Request the Animation Frame to Declare the image
     }
    
    draw()//Draw the Image in the Canvas
        
    }
    
    