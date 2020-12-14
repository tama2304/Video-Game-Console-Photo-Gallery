var photos = ["https://upload.wikimedia.org/wikipedia/commons/7/76/Nintendo-Switch-Console-Docked-wJoyConRB.jpg", "https://cdn.mos.cms.futurecdn.net/7Qv4q73m9Nif9CpxtfVWs6.jpg", "https://www.nme.com/wp-content/uploads/2020/07/Xbox-Series-X.jpg"];

var consoles = ["Nintendo Switch", "PlayStation 5", "Xbox Series X"];

photos.forEach(function(item, photo){
$(".gallery").append("<img src =" + photos[photo] + ">" + "<p>" + consoles[photo] + "</p>");
});

$("button").click(function(){
    var inputValue = $(".inputName").val();
    var consoleValue = $(".consoleName").val();
    photos.push(inputValue);
    consoles.push(consoleValue);
    $(".gallery").empty();
    photos.forEach(function(item, photo){
$(".gallery").append("<img src =" + photos[photo] + ">" + "<p>" + consoles[photo] + "</p>");
});
    //$(".gallery").append("<img src=" + inputValue + ">" + "<p>" + consoleValue + "</p>");
	});