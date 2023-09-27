const encodedData = localStorage.getItem('details')

// Parse the JSON-encoded object data
const selectedObject = JSON.parse(decodeURIComponent(encodedData));
console.log(encodedData);
// Display the object details on the details page
const detailsDiv = document.getElementById('details');
detailsDiv.innerHTML = `
                        <p id = "title">${selectedObject.title}</p>
                        <p id = "titlebody">${selectedObject.body}${selectedObject.body}${selectedObject.body}${selectedObject.body}${selectedObject.body}${selectedObject.body}${selectedObject.body}${selectedObject.body}${selectedObject.body}${selectedObject.body}${selectedObject.body}${selectedObject.body}${selectedObject.body}${selectedObject.body}${selectedObject.body}${selectedObject.body}${selectedObject.body}${selectedObject.body}</p>`;



const url = 'https://jsonplaceholder.typicode.com/users';
const authid = selectedObject.userId;
const authDetail = document.getElementById('author');
// console.log('something');
// console.log(authid);

fetch(url)
    .then((responce) => {
        return responce.json();
    })
    .then((data) => {

        // console.log('printing author id');
        // console.log(data);
        data.forEach((objmethod) => {
            console.log('printing' + objmethod.name);
            if(objmethod.id === authid)
            {
                authDetail.innerHTML = `<p id = "detailsauthor"> Author name : ${objmethod.name}</p>
                                        <p id = "detailsauthor">Author email : ${objmethod.email}</p>`
            }

            
        });
    })

const comenturl = 'https://jsonplaceholder.typicode.com/comments';
const commentid = selectedObject.id;
const outputcomment = document.getElementById('listcomment');
const commentcount = document.getElementById('numbercomment');
let count = 0;

fetch(comenturl)
   .then((responce) => {
      return responce.json();
   })
   .then((data) => {
    console.log(data);
    data.forEach((commentmethod) => {
        if(commentmethod.postId === commentid)
        {
            count = count + 1;
            const p = document.createElement('p');
            p.setAttribute("id","comment")
            p.innerHTML = `${count}. ${commentmethod.body}`;
            outputcomment.append(p);
            
        }
    })
    console.log(count);
    commentcount.innerHTML = count;
   })


                        