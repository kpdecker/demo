(function(){
    var corecss = document.createElement('link');
    var themecss = document.createElement('link');
    var corecssurl = "http://static.incaseofstairs.com/plugins/syntaxhighlighter/syntaxhighlighter/styles/shCore.css?ver=2.1.364b";
    if ( corecss.setAttribute ) {
            corecss.setAttribute( "rel", "stylesheet" );
            corecss.setAttribute( "type", "text/css" );
            corecss.setAttribute( "href", corecssurl );
    } else {
            corecss.rel = "stylesheet";
            corecss.href = corecssurl;
    }
    document.getElementsByTagName("head")[0].appendChild(corecss);
    var themecssurl = "http://static.incaseofstairs.com/plugins/syntaxhighlighter/syntaxhighlighter/styles/shThemeRDark.css?ver=2.1.364b";
    if ( themecss.setAttribute ) {
            themecss.setAttribute( "rel", "stylesheet" );
            themecss.setAttribute( "type", "text/css" );
            themecss.setAttribute( "href", themecssurl );
    } else {
            themecss.rel = "stylesheet";
            themecss.href = themecssurl;
    }
    document.getElementsByTagName("head")[0].appendChild(themecss);
})();
SyntaxHighlighter.config.clipboardSwf = 'http://static.incaseofstairs.com/plugins/syntaxhighlighter/syntaxhighlighter/scripts/clipboard.swf';
SyntaxHighlighter.config.strings.expandSource = 'show source';
SyntaxHighlighter.config.strings.viewSource = 'view source';
SyntaxHighlighter.config.strings.copyToClipboard = 'copy to clipboard';
SyntaxHighlighter.config.strings.copyToClipboardConfirmation = 'The code is in your clipboard now';
SyntaxHighlighter.config.strings.print = 'print';
SyntaxHighlighter.config.strings.help = '?';
SyntaxHighlighter.config.strings.alert = 'SyntaxHighlighter\n\n';
SyntaxHighlighter.config.strings.noBrush = 'Can\'t find brush for: ';
SyntaxHighlighter.config.strings.brushNotHtmlScript = 'Brush wasn\'t configured for html-script option: ';
SyntaxHighlighter.all();
