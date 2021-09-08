var sumUp=0

function clicks(){
  let h1 = document.getElementById("number")
  sumUp++
  h1.innerHTML = sumUp;
}

function resets(){
  let h1 = document.getElementById("number")
  sumUp=0
  h1.innerHTML = sumUp;

}

function returns(){
    let h1 = document.getElementById("number")
    sumUp-- 
    h1.innerHTML = sumUp;
}

function light(){
    
    document.querySelector('body').style.backgroundColor="white";
    document.querySelector('#counter > h1').style.color="black";
    
    let btn = document.querySelectorAll("#counter > .btn-counter")
    btn.forEach(element => {
        element.style.backgroundColor="#2e49aa"
        element.style.color="white"
    });

    let theme = document.querySelectorAll("#theme > .btn-theme")
    theme.forEach(element => {
        element.style.backgroundColor="red"
        element.style.color="white"
    });
}

function dark(){
    document.querySelector('body').style.backgroundColor="#17181e";
    document.querySelector('#counter > h1').style.color="red";
    
    let btn = document.querySelectorAll("#counter > .btn-counter")
    btn.forEach(element => {
        element.style.backgroundColor="red"
        element.style.color="white"
    });
    
    let theme = document.querySelectorAll("#theme > .btn-theme")
    theme.forEach(element => {
        element.style.backgroundColor="#2e49aa"
        element.style.color="white"
    });
}