let url = new URL(location.href)
let id = url.searchParams.get('id')
fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(response => response.json())
    .then(userInfo => {
        for (const userInfoElement in userInfo) {
            let div = document.createElement('div');
            div.classList.add('divClass');
            document.body.appendChild(div);
            div.innerText = `${userInfo[userInfoElement]}`;
            document.body.appendChild(div)
        }
    });

fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
    .then(response => response.json())
    .then(info => {
        let commentsDiv = document.createElement('div');
        commentsDiv.classList.add('commentsDiv');
        for (const infoElement in info) {
            let comDiv = document.createElement('div');
            comDiv.classList.add('comments');
            comDiv.innerText = `Comment - ${info[infoElement].body}`;
            commentsDiv.appendChild(comDiv);
            document.body.appendChild(commentsDiv)

        }

    });