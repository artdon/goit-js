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
        {"fields":"id,name,picture"},
        function(response) {
            const addphoto = `<img src="${response.picture.data.url}" width="100px" />`;
            document.body.insertAdjacentHTML("afterbegin",addphoto);
            // Insert your code here
        }
      );
}

}


// ==== Query
//   curl -i -X GET \
//    "https://graph.facebook.com/v5.0/me?fields=id%2Cname%2Cpicture&access_token=<access token sanitized>"
// ==== Access Token Info
//   {
//     "perms": [
//       "email",
//       "public_profile"
//     ],
//     "user_id": 1091877961151187,
//     "app_id": 580319269237283
//   }
// ==== Parameters
// - Query Parameters


//   {
//     "fields": "id,name,picture"
//   }
// - POST Parameters


//   {}
// ==== Response
//   {
//     "id": "1091877961151187",
//     "name": "Евгений Андруша",
//     "picture": {
//       "data": {
//         "height": 50,
//         "is_silhouette": false,
//         "url": "https://platform-lookaside.fbsbx.com/platform/profilepic/?asid=1091877961151187&height=50&width=50&ext=1580028912&hash=AeT0JJMciJCo-m2P",
//         "width": 50
//       }
//     },
//     "__debug__": {}
//   }
// ==== Debug Information from Graph API Explorer
// - https://developers.facebook.com/tools/explorer/?method=GET&path=me%3Ffields%3Did%2Cname%2Cpicture&version=v5.0