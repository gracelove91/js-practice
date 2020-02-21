function User(name, interests) {
    this.name = name;
    this.interests = interests;
}

User.prototype.greeting = function () {
    console.log(`Hi I'm ${this.name}`)
};

function TeamMember(name, interests, tasks) {
    User.call(this, name, interests);
    this.tasks = tasks;
}

TeamMember.prototype = Object.create(User.prototype);
TeamMember.prototype.greeting = function () {
    console.log(`I'm ${this.name}. Welcome to the team!`);
};
TeamMember.prototype.work = function () {
    console.log(`I'm working on ${this.tasks.length} tasks`);
};

var member = new TeamMember('Sunny', ['Traveling'],
    ['Buy three tickets', 'Book a hotel']);

member.greeting();
member.work();

var user = new User('Grace', ['aaa', 'bbb']);
user.greeting();