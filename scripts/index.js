// api url
const api_url =
    "https://localhost:7142/api/User";

let resData;
// Defining async function
async function fetchData() {
    try {
        const response = await fetch('https://localhost:7142/api/User');
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error fetching data:', error);
        return null;
    }
}

// Usage example
fetchData()
    .then(data => {
        if (data) {
            console.log('Data:', data);
            resData = data;
            // Process the data here
        }
    })
    .catch(error => {
        console.error('Error:', error);
    });

// Render
data = {
    message: `Hello from <strong>a</strong>.`
};

point.attach("welcome", data);