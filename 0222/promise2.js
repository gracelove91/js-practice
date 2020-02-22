function getProjects() {
    return new Promise((resolver, reject) => {
        setTimeout(() => {
            resolver([
                {
                    id: 1,
                    name: 'Project A'
                },
                {
                    id: 2,
                    name: 'Project B'
                }
            ])
        }, 100)
    })
}

function getTasks(projects) {
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            resolve({
                projects,
                tasks: ['Buy three tickets', 'Book a hotal']
            });
        }, 100)
    }))
}

function render({projects, tasks}) {
    console.log(`Render ${projects.length} projects and ${tasks.length} tasks`);
}

getProjects()
    .then(getTasks)
    .then(render)
    .catch((error) => {
        console.log('Handling error', error);
    });