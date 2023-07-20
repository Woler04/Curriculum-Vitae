// api url
const api_url =
    "https://localhost:7142/api/User";

let resData;

// Defining async function
function setup() {
    url = 'https://localhost:7142/api/User';
    getJSON(url,
        function (err, data) {
            if (err !== null) {
                console.log('Something went wrong: ' + err);
            } else {
                resData = data;
                console.log(resData);
            }
        });
}

var getJSON = function (url, callback) {
    var xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';
    xhr.send();
    xhr.onload = function () {
        var status = xhr.status;
        if (status === 200) {
            callback(null, xhr.response);
        } else {
            callback(status, xhr.response);
        }
    };
};

setup();

// Render
data = {
    message: `Hello from <strong>a</strong>.`
};

point.attach("welcome", data);