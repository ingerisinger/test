function toggleMenu(number){
    var star=document.getElementById("star-"+number);
    star.classList.toggle("toggle");
}
function add(number){
    var option=document.getElementsByTagName("option").value;
    var star=document.getElementById("star-"+number);
    var content=star.innerHTML;
    container.append(content);
}
