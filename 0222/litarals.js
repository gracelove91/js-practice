const advice = 'Stay hungry. Stay foolish.';

let advisor = {
    _proto_: new TeamMember('Adam', ['Consulting']),
    advice,
    greeting() {
        super.greeting();
        console.log(this.advice);
    },
    [advice.split('.')[0]]: 'Always learn more'
};