const url = 'https://api.example.com/data';
let data;
let responceData;

// Making the GET request using the fetch API
fetch(url)
  .then(response => {
    if (!response.ok) {
      throw new Error('Network response was not ok');
    }
    return response.json(); // Parse the response body as JSON
  })
  .then(data => {
    // Do something with the data received from the server
    console.log(data);
    responceData = data;
  })
  .catch(error => {
    // Handle any errors that occurred during the request
    console.error('Error fetching data:', error);
  });

// Render
data = {
    message: `Hello from <strong>${responceData[0].username}</strong>.`
};

point.attach("welcome", data);