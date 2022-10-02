const indiNames = [
    "Artistic",
    "Big",
    "Freedom",
    "Terrible",
    "Wild",
    "Cheerful",
    "Evil",
    "Playful",
    "Prickly",
    "Lunar",
    "Little",
    "Undending",
    "Melodious",
    "Enraged",
    "Steppe",
    "Hasty",
    "Snorting",
    "Good",
    "Tenacious",
    "Black",
    "Hissing",
    "This",
    "Young",
    "Bright",
];

const secondIndiNames = [
    "Angel",
    "Chipmunk",
    "Boar",
    "Dove",
    "Oak",
    "Hedgehog",
    "Crane",
    "Bison",
    "Mole",
    "Fox",
    "Mammoth",
    "Rhino",
    "Deer",
    "Pelican",
    "Ostrich",
    "Coward",
    "Ghoul",
    "Owl",
    "Hamster",
    "King",
    "Worm",
    "Sorrel",
    "Squirrel",
    "Emo",
    "Anchor",
];

function getRandomName(arr) {
    return arr[Math.floor(Math.random() * arr.length)]
};

export function getRandomFullName() {
    return `${getRandomName(indiNames)}  ${getRandomName(secondIndiNames)}`;
}