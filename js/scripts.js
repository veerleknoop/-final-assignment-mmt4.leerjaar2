// accordion
var acc = document.getElementsByClassName("accordion");
var i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {

        this.classList.toggle("active");


        var panel = this.nextElementSibling;
        if (panel.style.display === "block") {
            panel.style.display = "none";
        } else {
            panel.style.display = "block";
        }
    });
};

function myFunction() {
    var element = document.body;
    element.classList.toggle("darmode");
}
// videoafvinken



var player = videojs('#my-video');
player.ready(function() {

    var duration = player.duration();

    player.on('ended', function() {
        $('.close-modal').click(function() {

            $('.modal').css("display", "none");
            $('.modalcontent ').css("display", "none");
            $('.overlay').css("display", "none");
            $('.close-modal').css("display", "none");
        });
        event.preventDefault();
        if ($(".overlay").hasClass('show')) {
            $(".overlay").removeClass('show');

        } else {
            $(".overlay").addClass('show');

        }



    })
})


var player2 = videojs('#my-video2');
player2.ready(function() {

    var duration = player.duration();

    player2.on('ended', function() {
        $('.close-modal').click(function() {

            $('.modal').css("display", "none");
            $('.modalcontent ').css("display", "none");
            $('.overlay').css("display", "none");
            $('.close-modal').css("display", "none");
        });
        event.preventDefault();
        if ($(".overlay").hasClass('show')) {
            $(".overlay").removeClass('show');

        } else {
            $(".overlay").addClass('show');

        }


    })
})


var player3 = videojs('#my-video3');
player3.ready(function() {

    var duration = player.duration();

    player3.on('ended', function() {
        $('.close-modal').click(function() {

            $('.modal').css("display", "none");
            $('.modalcontent ').css("display", "none");
            $('.overlay').css("display", "none");
            $('.close-modal').css("display", "none");
        });
        event.preventDefault();
        if ($(".overlay").hasClass('show')) {
            $(".overlay").removeClass('show');

        } else {
            $(".overlay").addClass('show');

        }


    })
})


var player4 = videojs('#my-video4');
player4.ready(function() {

    var duration = player.duration();

    player4.on('ended', function() {
        $('.close-modal').click(function() {

            $('.modal').css("display", "none");
            $('.modalcontent ').css("display", "none");
            $('.overlay').css("display", "none");
            $('.close-modal').css("display", "none");
        });
        event.preventDefault();
        if ($(".overlay").hasClass('show')) {
            $(".overlay").removeClass('show');

        } else {
            $(".overlay").addClass('show');

        }


    })
})



var player5 = videojs('#my-video5');
player5.ready(function() {

    var duration = player.duration();

    player5.on('ended', function() {
        $('.close-modal').click(function() {


            $('.modal').css("display", "none");
            $('.modalcontent ').css("display", "none");
            $('.overlay').css("display", "none");
            $('.close-modal').css("display", "none");
        });
        event.preventDefault();
        if ($(".overlay").hasClass('show')) {
            $(".overlay").removeClass('show');

        } else {
            $(".overlay").addClass('show');

        }


    })
})