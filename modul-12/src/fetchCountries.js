export default function fetchCountry(baseUrl, value, onData) {
    fetch(baseUrl + value).then(response =>
      response
        .json()
        .then(data => {
          onData(data);
        })
        .catch( e => {
      console.log(e,"Empty input field OR catched some errors")
        })
    );
  }