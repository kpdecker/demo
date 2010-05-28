(function() {
    var opQueue = new OperationQueue(),
        counter = 0;

    function demoLog(msg) {
        var li = document.createElement("li");
        li.appendChild(document.createTextNode(msg));

        $("#logger").prepend(li);
    }

    $("#success").click(function() {
        demoLog("Calling success handler");
        (opQueue.getSuccessHandler())(counter++);
    });
    $("#failure").click(function() {
        demoLog("Calling failure handler");
        (opQueue.getFailureHandler())(counter++);
    });
    $("#reset").click(function() {
        demoLog("Calling reset");
        opQueue.reset();
    });

    $("#onSuccess").click(function() {
        opQueue.queue(function(result) {
            demoLog("Success " + result);
        });
    });
    $("#onFailure").click(function() {
        opQueue.queue({
            onFailure: function(result) {
                demoLog("Failure " + result);
            }
        });
    });
    $("#onBoth").click(function() {
        opQueue.queue({
            onSuccess: function(result) {
                demoLog("Both Success " + result);
            },
            onFailure: function(result) {
                demoLog("Both Failure " + result);
            }
        });
    });
})();
