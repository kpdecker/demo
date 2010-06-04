$(document).ready(function() {
    $(".resizable").resizable({ handles: "s" });
    $("#toggleOverlay").click(function() { $(".overlay").toggle(); });
});
