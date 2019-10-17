const spaceOutlet = {
    id: 'space-outlet',
    title: 'The Space Outlet',
    time: 1,
    flatplane: {
        top: '80%',
        left: '20%',
    },
    backgroundImage: '../assets/space.jpeg',
    shipShape: 'crumpled and wingless, but ok',
    choices: [{
        id: 'float',
        description: 'Just gently drift toward one of those dark eyes, do not worry about the matter.',
        result: 'One doesn\'t play with fate, and you didn\'t. In a moment you took breathing what felt like a gentle, ethereal calm, you superceded this dark environment and found your plane unfolding at the rim of a glowing portal.', 
        retentionFactor: 0, 
    },
    {
        id: 'upper',
        description: 'Insist with all your might that you belong in the upper darker void.',
        result: 'Total catastrophe. Winds begin to howl, weird space winds, and you find yourself only looking at the void, a grid of your memories transformed and spread out on infantesimal threads lead toward a weird shape, and you find the bounds of your ship and self becoming less definite at the rim of a hoary blackness seething with space-worms',
        retentionFactor: -1,
    },
    {
        id: 'lower',
        description: 'Head lower',
        result: 'Oh boy. Why oh my, what a smooth travel toward bliss, but oh boy, slowly the jaws of the void begin to close.',
        retentionFactor: -1,
    }],
};

const dementionlessDescreteStatic = {
    id: 'descrete-affair',
    title: 'The flaws of a Descrete Affair',
    time: 2,
    flatplane: {
        top: '80%',
        left: '40%',
    },
    backgroundImage: '../assets/dots.jpeg',
    choices: [{
        id: 'coalese',
        description: 'Coalesce',
        result: 'In an attempt to rectify guilt destroys your memory and you fragment into millions of dots burbling it the mire of a dark oblivion.',
        retentionFactor: -3,
    },
    {
        id: 'letting-go',
        description: 'Let Go of the Branch',
        result: 'A river of blissful reminescing propells you downward toward earthly domains.',
        retentionFactor: 0,
    }],
};

const burrowDown = {
    id: 'burrow',
    title: 'Get Down',
    time: 1,
    flatplane: {
        top: '80%',
        left: '60%',
    },
    backgroundImage: '../assets/downward1.jpeg',
    choices: [{
        id:'get-down',
        description: 'Get Down, Then Take\'em to the Bridge',
        result: 'Your plane widens, and you swarm with bees, smiling bees, who slowly begin to swarm in beautiful organized patterns, around and around. The rythm takes control. A portal opens above.',
        retentionFactor: 0,
    },
    {
        id: 'incorrect-hands',
        description: 'Raise your hands to the sky, but don\'t wave them side to side.',
        result: 'Chaos ensues. You fall flat on the floor of your ship, which crumples around you. You feel a twinkle of light.',
        retentionFactor: -2,
    },
    {
        id: 'poorly-timed-nap',
        descripton: 'To the Windows, to the Walls, Till You Feel Like Taking a Nap.',
        result: 'Oops, something wen\'t wrong. A large hole opens up in the glowing checkered floor, and you droop into it.',
        retentionFactor: -1,
    }],
};

const manifolds = [spaceOutlet, dementionlessDescreteStatic, burrowDown];

export default manifolds;

