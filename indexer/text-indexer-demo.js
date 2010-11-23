$(document).ready(function() {
    var HTML_REPLACE
    $("#testContent").blur(function() {
        // Note that TextIndexer does not make html safe. If this may be a concern then
        // the text passed into TextIndexer should have html content sanitized prior to
        // being indexed.
        var srcText = $(this).val(),
            indexedText = TextIndexer.run(srcText);

        $("#previewContent").html(indexedText);
    }).blur();
});
