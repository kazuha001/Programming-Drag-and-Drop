
        
    
    function hat2() {
        
    var myCanvasId = document.getElementById("myCanvas")
    
    var hidden3Id = document.getElementById("hidden3")
    
    var ctx = myCanvasId.getContext("2d")
    
    //Change Hidden Value
    
    hidden3Id.value = "close"
   
   //For Img Location
   
   //dress
      var dress1 = new Image()
    dress1.src = "css/images/hat/hat2.png"
    dress1.width = 120
    dress1.height = 120
    let x1 = myCanvasId.width / 7
    let y1 = myCanvasId.height / 7
    let dx = 0
    let dy = 0
    
    


    //For Dragging If not
    let isDragging1 = false;
    
    
    //Draw img Declare The Right Value
    function draw1() {
        x1 += dx / 4
        y1 += dy / 4
        ctx.drawImage(dress1, x1, y1, dress1.width, dress1.height)
        dx = 0
        dy = 0
        requestAnimationFrame(draw1)
        
    }
    
    draw1()
    
    
    
    
    //If Action Has been Declare
   myCanvasId.addEventListener("mousedown", function(event) {
        const rect = myCanvasId.getBoundingClientRect();
        const mouseX = event.clientX - rect.left;
        const mouseY = event.clientY - rect.top;
        
        //Dress On Click
        if (mouseX >= x1 && mouseX <= x1 + dress1.width && mouseY >= y1 && mouseY <= y1 + dress1.height) {
            isDragging1 = true;
            offsetX = mouseX - x1
            offsetY = mouseY - y1
        }
       
        
    });



    
    //For Action Not been Declare
    myCanvasId.addEventListener("mouseup", function() {
        isDragging1 = false
    });



    //If Is Moving The Object
    myCanvasId.addEventListener("mousemove", function(event) {
        if (isDragging1 && isDraggingAllowed) {
            const rect = myCanvasId.getBoundingClientRect();        
            const mouseX = event.clientX - rect.left;
            const mouseY = event.clientY - rect.top;
            
            
            dx = mouseX - x1 - dress1.width / 1.5
            dy = mouseY - y1 - dress1.height / 1.5
           
            
        }
    });
       
    }
    
    
    function addImg12() {
        
        var hidden3Id = document.getElementById("hidden3").value
        
     
    
    if (hidden3Id === "open") {
    
       
    
        hat2()
    
    }else {
        
        alert("invalid")
    }
        
    }
 
    