// window.addEventListener('load',function(){
//     console.log('page is loaded');
//     fetch("https://pokeapi.co/api/v2/pokemon?limit=100000&offset=0"
//     .then(response => response.json())
//     .then(data=>{
//         let nameElement = document.getElementById('pokemon-name');
//         nameElement.innerHTML = data.results[0].name;
//     })
// )
// })

window.addEventListener('load',function(){
    fetch('dog.json')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        //do something
        let randomNumber = Math.floor(Math.random()*1001);
        let nameElement=document.getElementById('dog-names')
        nameElement.innerHTML=data.dog_names[randomNumber]
    })

    fetch('adj.json')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let randomNumber = Math.floor(Math.random()*46);
        let nameElement=document.getElementById('mr-men')
        nameElement.innerHTML=data.mr_men[randomNumber]
    })

    fetch('adj.json')
    .then(function(response){
        return response.json()
    })
    .then(function(data){
        console.log(data)
        let randomNumber = Math.floor(Math.random()*35);
        let nameElement=document.getElementById('little-miss')
        nameElement.innerHTML=data.little_miss[randomNumber]
    })

    let button = document.getElementById('run-button');
button.addEventListener('click', function(){
    // Reset any variables or states here
    setup(); // Call the setup function to reinitialize the canvas
});

})


console.log("page is loaded...")
/*--------- p5 code --------*/

function setup() {
    let canvas = createCanvas(1 * windowWidth, 1 * windowHeight);
    canvas.parent('canvas-container'); // This line assigns the canvas to the container
    background(240);
    noFill();
    stroke(100);
    strokeWeight(1);
  }
  
  function draw() {
    let x = random(width);
    let y = random(height);
    let size = random(10, 50);
  
    beginShape();
    for(let i = 0; i < 10; i++) {
      let xOffset = random(-5, 5);
      let yOffset = random(-5, 5);
      curveVertex(x + xOffset, y + yOffset);
    }
    endShape();
  }  

  

  
  