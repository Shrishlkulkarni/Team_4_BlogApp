function handleSubmit(event) {
    event.preventDefault();

   
    const title = document.getElementById("titleid").value;
    const body = document.getElementById("bodyid").value;

    // const jsonUrl = 'https://jsonplaceholder.typicode.com/posts';

  
    async function getJsonDataLength() {
        try {
            const response = await fetch("https://jsonplaceholder.typicode.com/posts");
            // if (!response.ok) {
            //     throw new Error('Network response was not ok');
            // }
            const jsonData = await response.json();
            return jsonData.length;
        } catch (error) {
            console.error('Error fetching JSON data:', error);
            return 0; 
        }
    }

    const currentLength = getJsonDataLength();
    const newId = currentLength + 1;
  
    const jsonData = {
        userId: 1,
        id: newId + 1,
        title: title,
        body: body,
    };
    fetch('https://jsonplaceholder.typicode.com/posts', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(jsonData),
    })
        .then(response => response.json())
        .then(data => {
            console.log("Data sent successfully:", data);
            alert("YOUR BLOG IS SUCCESSFULLY SUBMITTED");
            document.getElementById("titleid").value = "";
            document.getElementById("bodyid").value = "";

            
        })
        .catch(error => {
            console.error("Error:", error);
        });
}