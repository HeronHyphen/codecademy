// This program generates a nonsensical inspirational message everytime it is ran

const quoteTemplates = [
  "The secret of getting ahead is getting started.",
  "It's hard to beat a person who never gives up.",
  "You can either experience the pain of discipline or the pain of regret. The choice is yours.", 
  "Great things are done by a series of small things brought together.",
  "Start where you are. Use what you have. Do what you can.", "If you can't do anything about it then let it go. Don't be a prisoner to things you can't change.",
  "Darkness cannot drive out darkness: only light can do that. Hate cannot drive out hate: only love can do that.",
  "The best way to predict your future is to create it.",
  "You can't let your failures define you. You have to let your failures teach you.",
  "Never regret a day in your life. Good days bring you happiness and bad days give you experience.",
  "Live as if you were to die tomorrow. Learn as if you were to live forever."
];

const nouns = ['secret', 'person', 'joy', 'pain', 'path', 'life', 'greatness', 'achievement', 'work', 'love', 'hate', 'light',
'darkness', 'nature', 'change', 'dreams', 'motivation', 'teacher', 'people', 'passion', 'chance', 'luck', 'hope', 'mistakes',
'opportunity', 'dawn', 'heart', 'confidence', 'trial', 'challenge', 'discovery', 'place', 'future', 'goal', 'answers', 'power'];

const verbs = ['find', 'live', 'go', 'begin', 'end', 'create', 'work', 'satisfy', 'recover', 'win', 'lose', 'dream',
'do', 'fight', 'allow', 'know', 'persevere', 'try', 'fail', 'make', 'miss', 'understand', 'join', 'define', 'be', 'regret', 
'laugh', 'continue', 'finish', 'resist', 'remember', 'tell', 'say', 'endure', 'experience', 'scare', 'release'];

const adjectives = ['good', 'bad', 'great', 'different', 'new', 'old', 'only', 'best', 'worst', 'next', 'first', 'last', 'low',
'high', 'small', 'big', 'large', 'quiet', 'loud', 'soft', 'hard', 'normal', 'exquiste', 'terrifying', 'jarring', 'awesome',
'mundane', 'fast', 'quick', 'slow', 'languid', 'nervous', 'confident', 'extraordinary', 'common', 'rare', 'unique', 'smart', 
'stupid', 'average', 'hot', 'cold', 'warm', 'cool', 'mediocre', 'exciting', 'beautiful', 'uncanny', 'familiar', 'sucessful'];


const randomNumber = () => Math.random();

function getRandomWord(arr) {
    // Returns a randon number
    return arr[Math.round(randomNumber() * arr.length)];
};

function createInspirationalQuote() {

};