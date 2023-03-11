// This program generates a nonsensical inspirational message everytime it is ran

/*
    There should be several message templates
    In those templates, there will be specific places where random words can be interchanged

    For example, a template could be "A -n- without -n- is a -n- -v-." 
 */

const quoteTemplates = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const adjectives = ['small', 'large', 'red', 'blue', 'green', 'yellow', 'old', 'new', 'early', 'late'];
const adverbs = ['', '', '', '', '', '', '', '', '', ''];
const nouns = ['', '', '', '', '', '', '', '', '', ''];
const verbs = ['', '', '', '', '', '', '', '', '', ''];
const pastVerbs = ['', '', '', '', '', '', '', '', '', ''];
const gerundVerbs = ['', '', '', '', '', '', '', '', '', ''];

const randomNumber = () => Math.random();

function getRandomWord(arr) {
    return arr[Math.round(randomNumber() * arr.length)];
};
