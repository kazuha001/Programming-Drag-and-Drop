
    
   document.getElementById("tapScreen").addEventListener("click", function(){
       
       var tapScreenId = document.getElementById("tapScreen")
       
       var titleId = document.getElementById("title")
       
       var person1Id = document.getElementById("person1")
       
       var person2Id = document.getElementById("person2")
       
       var ChooseTitleId = document.getElementById("ChooseTitle")
       
       setTimeout(() => {
           
           tapScreenId.style.opacity = "0"
           
       }, 1000)
       
       setTimeout(() => {
           
           tapScreenId.style.display = "none"
           
           person1Id.style.transform = "translateY(50px)"
           
           person2Id.style.transform = "translateY(50px)"
           
           person1Id.style.opacity = "1"
           
           person2Id.style.opacity = "1"
           
           ChooseTitleId.style.opacity = "1"
           
           vectorEffect.style.right = "0"
           
           vectorEffect.style.left = "0"
           
       }, 1500 )
       
       tapScreenId.style.transform = "scale(5)"
       
       titleId.style.opacity = "0"
       
       
       
   })
   
   function printPng() {
    var canvas = document.getElementById('myCanvas');
    var dataURL = canvas.toDataURL('image/png');

    // Create a temporary link element
    var link = document.createElement('a');
    link.href = dataURL;
    link.download = 'canvas_image.png';

    // Append the link to the body
    document.body.appendChild(link);

    // Simulate a click on the link to trigger the download
    link.click();

    // Clean up by removing the link
    document.body.removeChild(link);
}

   