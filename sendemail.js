<script>
document.getElementById('slackForm').onsubmit = function(event) {
  event.preventDefault(); // Prevent the default form submission

  fetch('https://q9hdh8nt26.execute-api.eu-north-1.amazonaws.com/default/SaveEmail', {
    method: 'POST',
    body: new FormData(event.target), // sends the form data
  })
  .then(response => {
    if(response.ok) {
      return response.json(); // or text if your endpoint returns plain text
    }
    throw new Error('Network response was not ok.');
  })
  .then(data => {
    console.log('Email saved:', data);
    // Handle success, maybe display a thank-you message or redirect
  })
  .catch(error => {
    console.error('There has been a problem with your fetch operation:', error);
    // Handle errors here
  });
};
</script>