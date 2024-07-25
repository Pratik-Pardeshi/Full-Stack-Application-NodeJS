document.getElementById('fetchData').addEventListener('click', () => {
    fetch('/api/data')
        .then(response => response.json())
        .then(data => {
            const dataDiv = document.getElementById('serverData');
            dataDiv.innerHTML = `<p>Server says: ${data.message}</p>`;
        })
        .catch(error => console.error('Error fetching data:', error));
});
