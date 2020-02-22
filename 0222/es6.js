function workout() {
    let gym = 'Gym A';

    const gymStatus = {
        'Gym A': 'Open',
        'Gym B': 'Open',
        'Gym C': 'Closed',
    };

    for (let gym in gymStatus) {
        console.log(`${gym} is ${gymStatus[gym]}`);
    }

    {
        const gym = 'Gym B';
        console.log('Workout in ' + gym);
    }

    console.log('Workout in ' + gym);

    {
        gym = function gym() {
            console.log('Workout in a separate gym');
        };
        gym();
    }

    if (gymStatus[gym] == 'Open') {
        let exercises = ['Treadmill', 'Pushup', 'Spinning'];
    }

    try {
        let gym = 'Gym C';
        console.log('Workout in ' + gym);
        throw new Error('Gym is closed');
    }catch (err) {
        console.log(err);
        let gym = 'Gym D';
        console.log('Workout in ' + gym);
    }
}

workout();