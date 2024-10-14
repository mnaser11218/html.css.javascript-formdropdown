function submit(){
    console.log("submitted form")
   const name = document.getElementById("name").value;
   const power = document.getElementById("power").value;
   const results = `your name is: ${name} and your power type is: ${power}`
   document.getElementById("results").innerText = results
}