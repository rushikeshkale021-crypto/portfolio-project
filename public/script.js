fetch("/projects")
.then(response => response.json())
.then(data => {

    const projectDiv = document.getElementById("projects");

    data.forEach(project => {

        const div = document.createElement("div");

        div.innerHTML = `
            <h3>${project.title}</h3>
            <p>${project.description}</p>
        `;

        projectDiv.appendChild(div);
    });

});