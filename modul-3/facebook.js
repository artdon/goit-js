export default

function goFacebook(FB){
FB.getLoginStatus(function(response) {
    statusChangeCallback(response);
});


function statusChangeCallback(response){
    console.log(response);
}
}