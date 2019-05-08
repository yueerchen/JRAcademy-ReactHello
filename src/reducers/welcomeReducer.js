const defaultState = [
    {id:1, author: 'Nick', content:'I am a teacher' },
    {id:2, author: 'Tim', content:'I am a student' },
    {id:3, author: 'Sam', content:'I am a student' },
];

const welcome = (state=defaultState, action) => {
    return state;
}

export default welcome;