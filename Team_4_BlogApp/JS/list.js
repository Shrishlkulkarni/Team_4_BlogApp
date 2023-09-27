
const url = 'https://jsonplaceholder.typicode.com/posts';
var blogList;
var searchList;

fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        blogList = data;
        render(blogList);
    })
    .catch((err) => {
        console.log(err)
    })

const redirectToDetailsPage = (selectedObject) => {
    // Encode the object data as a JSON string and pass it as a URL parameter
    const encodedData = encodeURIComponent(JSON.stringify(selectedObject));

    localStorage.setItem('details', encodedData)
    // Redirect to the details page with the encoded data as a parameter
    window.location.href = `details.html?id=${selectedObject.id}`;
}

const search = (search) => {
    searchList = blogList.filter((blog) => blog.title.includes(search.value))
    render(searchList);
}

const render = (list) => {
    const outputDiv = document.getElementById('list');
    outputDiv.innerHTML = '';


    list.forEach((obj) => {
        const p = document.createElement('p');
        p.innerHTML = obj.title;
        p.setAttribute("id", 'pid');

        p.onclick = function () {
            document.getElementById("search").value = "";
            redirectToDetailsPage(obj);
        };

        p.onmouseover = function () {
            p.style.backgroundColor = "rgb(129, 223, 120)";
            p.style.transform = "scale(1.05)";
        };

        p.onmouseout = function () {
            p.style.backgroundColor = "transparent";
            p.style.transform = "scale(1)";
        };
        outputDiv.appendChild(p);
    });
}


const navigateToHome = () => {
    window.location.href = "home.html"
}

const listView = () => {
    const outputDiv = document.getElementById('list');
    outputDiv.style.columnCount = "1"
}

const gridView = () => {
    const outputDiv = document.getElementById('list');
    outputDiv.style.columnCount = "3"
}