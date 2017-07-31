/**
 * Created by furkanmut on 13/07/17.
 */
//Google Login
function onLoadFunction() {
    gapi.client.setApiKey('AIzaSyCTVHYMLDamIz1KVu6Lez0sUoDkLS30CmY');
    gapi.client.load('plus', 'v1', function () {});
}

//Facebook Login
window.fbAsyncInit = function() {
    FB.init({
        appId            : '1382335745185748',
        autoLogAppEvents : true,
        xfbml            : true,
        status           : true,
        version          : 'v2.9'
    });

    FB.getLoginStatus(function (response) {
       if(response.status === 'connected') {
            //baglandık
       } else if(response.status === 'not_authorized'){
           //yetkisiz
       } else {
           //baglanamadık
       }
    });
};

(function(d, s, id){
    var js, fjs = d.getElementsByTagName(s)[0];
    if (d.getElementById(id)) {return;}
    js = d.createElement(s); js.id = id;
    js.src = "//connect.facebook.net/en_US/sdk.js";
    fjs.parentNode.insertBefore(js, fjs);
}(document, 'script', 'facebook-jssdk'));