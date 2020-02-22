class User {
    constructor(name, interest) {
        this.name = name;
        this.interests = interest;
    }

    greeting() {
        console.log(`Hi. I'm ${this.name}`);
    }

    get interestsCount() {
        return this.interests ? this.interests.length : 0;
    }
}

class TeamMember extends User {
    constructor(name, interests) {
        super(name, interests);
        this._tasks = [];
        this._welcomeText = `welcome to the team!`;
    }

    greeting() {
        console.log(`I'm ${this.name}. ${this._welcomeText}`)
    }

    work() {
        console.log(`I'm working on ${this._tasks.length} tasks`);
    }

    set tasks(tasks) {
        let acceptedTasks = [];
        if (tasks.length > TeamMember.maxTasksCapacity()) {
            acceptedTasks = tasks.slice(0, TeamMember.maxTasksCapacity());
            console.log(`It's over max capacity. Can only take tow`);
        } else {
            acceptedTasks = tasks;
        }
        this._tasks = this._tasks.concat(acceptedTasks);
    }

    static maxTasksCapacity() {
        return 2;
    }
}