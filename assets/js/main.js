if ('addEventListener' in window) {
    window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-preload\b/, ''); });
    document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
}

// pad the bottom of the page since the native Instagram app webview's overlay would cut off the footer
if (navigator.userAgent.match(/instagram/i)) {
    document.getElementById("wrapper").style.padding = "0 0 40% 0";
}

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 60,
    loop: false,
});

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());

gtag('config', 'UA-123135662-1');
