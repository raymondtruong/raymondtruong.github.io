if ('addEventListener' in window) {
    window.addEventListener('load', function() { document.body.className = document.body.className.replace(/\bis-preload\b/, ''); });
    document.body.className += (navigator.userAgent.match(/(MSIE|rv:11\.0)/) ? ' is-ie' : '');
}

var typed = new Typed('#typed', {
    stringsElement: '#typed-strings',
    typeSpeed: 65,
    loop: false,
});

window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'UA-123135662-1');
