export default

function goFacebook(FB){
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});


function statusChangeCallback(response){
    console.log(response);
    FB.api(
        '/me',
        'GET',
        {"fields":"id,name,profile_pic"},
        function(response) {
            console.log(response);
            // Insert your code here
        }
      );
}

}