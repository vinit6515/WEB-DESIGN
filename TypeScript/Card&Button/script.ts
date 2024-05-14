const button: HTMLBodyElement | null=document.getElementById('button');
button.addEventListener("click",function(): void{
    alert("The button is pressed.")
})
const card = document.getElementById('card');
card.addEventListener("mouseover",function(){
    var element = document.getElementById("Action");
    element.style.visibility="visible";
});
card.addEventListener("mouseout",function(){
    var element = document.getElementById("Action");
    element.style.visibility="hidden";
});