fetch(`https://jsonplaceholder.typicode.com/users`)
    .then(response => response.json())
    .then(users => {
        let mainDiv = document.createElement('div');
        mainDiv.classList.add('mainDiv');
        document.body.appendChild(mainDiv);
        for (const user of users) {
            let div = document.createElement('div');
            div.classList.add('user');
            div.innerText = `${user.id} . ${user.name}`;
            mainDiv.appendChild(div);

            let btn = document.createElement('button');
            btn.classList.add('btn');
            btn.innerText = 'detailed information';
            btn.onclick = () => {
                location.href = `../user-details/user-details.html?id=${user.id}`
            }
            div.appendChild(btn);
        }

    });