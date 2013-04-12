// Outbound Link Tracking with Google Analytics
// Requires jQuery 1.7 or higher (use .live if using a lower version)
// For more info see: http://support.google.com/googleanalytics/bin/answer.py?hl=en&answer=55527
// From: http://wptheming.com/2012/01/tracking-outbound-links-with-google-analytics/
$("a").on('click',function(e){
    var url = $(this).attr("href");
    // Console logs shows the domain name of the link being clicked and the current window
    console.log('e.currentTarget.host: ' + e.currentTarget.host);
    console.log('window.location.host: ' + window.location.host);
    // If the domains names are different, it assumes it is an external link
    // Be careful with this if you use subdomains
    if (e.currentTarget.host != window.location.host) {
      console.log('external link click');
      // Outbound link!  Fires the Google tracker code.
      _gaq.push(['_trackEvent', 'Outbound Links', e.currentTarget.host, url, 0]);
      // Checks to see if the ctrl or command key is held down
    // which could indicate the link is being opened in a new tab
    if (e.metaKey || e.ctrlKey) {
      console.log('ctrl or meta key pressed');
      var newtab = true;
    }
    // If it is not a new tab, we need to delay the loading
    // of the new link for a just a second in order to give the
    // Google track event time to fully fire
    if (!newtab) {
      console.log('default prevented');
      e.preventDefault();
                        console.log('loading link after brief timeout');
      setTimeout('document.location = "' + url + '"', 100);
    }
  }
  else {
    console.log('internal link click');
  }
});