export const mockEvents = [
    { type: 'BALL', payload: { runs: 1, commentary: 'Pushed to mid-on for a quick single.' } },
    { type: 'BALL', payload: { runs: 0, commentary: 'Defended solidly back to the bowler.' } },
    { type: 'BOUNDARY', payload: { runs: 4, commentary: 'Classic cover drive, races to the boundary!' } },
    { type: 'BALL', payload: { runs: 2, commentary: 'Worked through the leg side for a couple.' } },
    { type: 'WICKET', payload: { playerOut: 'R. Sharma', dismissal: 'LBW', commentary: 'Big appeal... and he\'s out!' } },
    { type: 'BALL', payload: { runs: 3, commentary: 'Great running between the wickets.' } },
    { type: 'BOUNDARY', payload: { runs: 6, commentary: 'Smashed over long-on for six!' } },
    { type: 'BALL', payload: { runs: 0, commentary: 'Dot ball, pressure building.' } },
    { type: 'MATCH_STATUS', payload: { status: 'Innings Break', summary: 'Team A finishes on 175/7.' } },
];