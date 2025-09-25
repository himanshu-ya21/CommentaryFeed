const updateBalls = (setBallsInOver, setOvers) => {
    setBallsInOver(prev => {
        const newBalls = prev + 1;
        if (newBalls === 6) {
            setOvers(prevOvers => prevOvers + 1);
            return 0;
        }
        return newBalls;
    });
};

export const processEvent = (event, setScore, setWickets, setOvers, setBallsInOver, setBatsmen) => {
    const actions = {
        BALL: () => {
            setScore(prev => prev + event.payload.runs);
            updateBalls(setBallsInOver, setOvers);
        },
        BOUNDARY: () => {
            setScore(prev => prev + event.payload.runs);
            updateBalls(setBallsInOver, setOvers);
        },
        WICKET: () => {
            setWickets(prev => prev + 1);
            updateBalls(setBallsInOver, setOvers);
        },
        MATCH_STATUS: () => { },
        default: () => { },
    };

    (actions[event.type] || actions.default)();
};