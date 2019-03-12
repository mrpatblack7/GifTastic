//Javascript for GifTastic

var topics = ["The Office", "Step Brothers", "Spongebob", "Game of Thrones", "Greys Anatomy", "Mean Girls", "New Girl", "Schitts Creek", "The Good Place", "The Walking Dead", "Scandal", "Incredibles"];

var button;
var newTopic = "";

//function to generate new buttons
var buttonGenerator = function () {
    $("#buttonArea").empty();
    for (i = 0; i < topics.length; i++) {
        button = $("<button type =" + "button" + ">" + topics[i] + "</button>").addClass("btn btn-warning").attr("data", topics[i]);
        $("#buttonArea").append(button);
    };
}

//when user clicks on previously generated button, 10 static Gifs load to page
$("#buttonArea").on("click", ".btn", function () {
    var thing = $(this).attr("data");
    var queryURL = "https://api.giphy.com/v1/gifs/search?q=" + thing + "&api_key=kXvU8cav5IA4uA0lssNqEeN8EAeFO7tP&limit=10";

    $.ajax({
        url: queryURL,
        method: "GET"
    }).done(function (response) {
        console.log(response);

        var results = response.data;

        for (var i = 0; i < results.length; i++) {
            var topicDiv = $("<div>");
            //rating under every Gif
            var p = $("<p>");
            p.text(results[i].rating);
            var p = $("<p>").text("Rating: " + results[i].rating);

            var topicImage = $("<img>");

            //states of Gif
            topicImage.attr("src", results[i].images.fixed_height_still.url);
            topicImage.attr("data-still", results[i].images.fixed_height_still.url);
            topicImage.attr("data-animate", results[i].images.fixed_height.url)
            topicImage.attr("data-state", "still")
            topicImage.addClass("gif");
            //image appended to the div
            topicDiv.append(topicImage);
            // rating appends to the div
            topicDiv.append(p);
            //new images placed at the top
            $("#gifArea").prepend(topicDiv);

        }
    })
})
$("#gifArea").on("click", ".gif", function(event){
    event.preventDefault();

    var state = $(this).attr("data-state");

    if (state === "still") {
        $(this).attr("src", $(this).attr("data-animate"));
        $(this).attr("data-state", "animate");
    }else {
        $(this).attr("src", $(this).attr("data-still"));
        $(this).attr("data-state", "still");
    }
})

$(".submit").on("click", function (event) {
    event.preventDefault();

    console.log("submit");
    newTopic = $("#topic-input").val();
    topics.push(newTopic);
    console.log(topics);
    buttonGenerator();
});

buttonGenerator();