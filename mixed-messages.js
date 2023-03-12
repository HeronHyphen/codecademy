// This program generates a nonsensical inspirational message everytime it is ran

const quoteTemplates = [
  `A ${n1} without ${n2} is a ${n1} ${ptv}.`,
  `It's ${adj} to ${v} a person who ${adv} gives up.`,
  `You can either ${v} the ${n1} of ${n2} or the ${n1} of ${n3}. The choice is yours.`, 
  `${adj1} things are done by a series of ${adj2} things ${ptv} together.`,
  `${v1} where you are. ${v2} what you have. ${v3} what you can. If you can't do anything about it then let it go. Don't be a ${n} to things you can't ${v4}.`,
  `${n1} cannot ${v} ${n1}: only ${n2} can do that. ${n3} cannot ${v} ${n3}: only ${n4} can do that.`,
  `The ${adv} way to ${v1} your ${n} is to ${v2} it.`,
  `You can't let your ${n} ${v1} you. You have to ${v2} your ${n} ${v1} you.`,
  `Never ${v} a day in your life. ${adj1} days bring you happiness and ${adj2} days ${v} you experience.`,
  `${v1} as if you were to ${v2} tomorrow. ${v3} as if you were to ${v1} forever.`
];

const nouns = ['secret', 'person', 'joy', 'pain', 'path', 'life', 'greatness', 'achievement', 'work', 'love', 'hate', 'light',
'darkness', 'nature', 'change', 'dreams', 'motivation', 'teacher', 'people', 'passion', 'chance', 'luck', 'hope', 'mistakes',
'opportunity', 'dawn', 'heart', 'confidence', 'trial', 'challenge', 'discovery', 'place', 'future', 'goal', 'answers', 'power'];

const verbs = ['find', 'live', 'go', 'begin', 'end', 'create', 'work', 'satisfy', 'recover', 'win', 'lose', 'dream',
'do', 'fight', 'allow', 'know', 'persevere', 'try', 'fail', 'make', 'miss', 'understand', 'join', 'define', 'be', 'regret', 
'laugh', 'continue', 'finish', 'resist', 'remember', 'tell', 'say', 'endure', 'experience', 'scare', 'release'];

const adjectives = ['good', 'bad', 'great', 'different', 'new', 'old', 'best', 'worst', 'next', 'first', 'last', 'low',
'high', 'small', 'big', 'large', 'quiet', 'loud', 'soft', 'hard', 'normal', 'exquiste', 'terrifying', 'jarring', 'awesome',
'mundane', 'fast', 'quick', 'slow', 'languid', 'nervous', 'confident', 'extraordinary', 'common', 'rare', 'unique', 'smart', 
'stupid', 'average', 'hot', 'cold', 'warm', 'cool', 'mediocre', 'exciting', 'beautiful', 'uncanny', 'familiar', 'sucessful'];

const adverbs = ['only', 'sometimes', 'never', 'always', 'sparingly', 'actively', 'passively'];

const pastTenseVerbs = ['found', 'lived', 'went', 'began', 'ended', 'created', 'worked', 'satisfied', 'recovered', 'won', 'lost',
'dreamt', 'did', 'fought', 'allowed', 'knew', 'persevered', 'tried', 'feil', 'maked', 'missed', 'understoond', 'joined',
'defined', 'was', 'regretted', 'laughed', 'continued', 'finished', 'resisted', 'remembered', 'told', 'said', 'endured',
'experienced', 'scared', 'released'];

const randomNumber = () => Math.random();

function getRandomElement(arr) {
  return arr[Math.round(randomNumber() * arr.length)];
};

function createInspirationalQuote() {  
  const inspirationalQuote = getRandomElement(quoteTemplates);
    if (inspirationalQuote === quoteTemplates[0]) {
      let n1 = getRandomElement(nouns);
      let n2 = getRandomElement(nouns);
      let ptv = getRandomElement(pastTenseVerbs);
      return `A ${n1} without ${n2} is a ${n1} ${ptv}.`;

    } else if (inspirationalQuote === quoteTemplates[1]) {
      let adj = getRandomElement(adjectives);
      let v = getRandomElement(verbs);
      let adv = getRandomElement(adverbs);
      return `It's ${adj} to ${v} a person who ${adv} gives up.`;   

    } else if (inspirationalQuote === quoteTemplates[2]) {
      let v = getRandomElement(verbs);
      let n1 = getRandomElement(nouns);
      let n2 = getRandomElement(nouns);
      let n3 = getRandomElement(nouns);
      return `You can either ${v} the ${n1} of ${n2} or the ${n1} of ${n3}. The choice is yours.`

    } else if (inspirationalQuote === quoteTemplates[3]) {
        let adj1 = getRandomElement(adjectives);
        let adj2 = getRandomElement(adjectives);
        let ptv = getRandomElement(pastTenseVerbs);        
        return  `${adj1} things are done by a series of ${adj2} things ${ptv} together.`;   

    } else if (inspirationalQuote === quoteTemplates[4]) {
        let v1 = getRandomElement(verbs);
        let v2 = getRandomElement(verbs);
        let v3 = getRandomElement(verbs);       
        let n = getRandomElement(nouns);
        let v4 = getRandomElement(verbs); 
        return  `${v1} where you are. ${v2} what you have. ${v3} what you can. 
        If you can't do anything about it then let it go. Don't be a ${n} to things you can't ${v4}.`;   
   

    } else if (inspirationalQuote === quoteTemplates[5]) {
        let n1 = getRandomElement(nouns);
        let v = getRandomElement(verbs);
        let n2 = getRandomElement(nouns);
        let n3 = getRandomElement(nouns);
        let n4 = getRandomElement(nouns);
        return `${n1} cannot ${v} ${n1}: only ${n2} can do that. ${n3} cannot ${v} ${n3}: only ${n4} can do that.`;    

    } else if (inspirationalQuote === quoteTemplates[6]) {
        let adv = getRandomElement(adverbs);
        let v1 = getRandomElement(verbs);
        let n = getRandomElement(nouns);
        let v2 = getRandomElement(verbs);
        return `The ${adv} way to ${v1} your ${n} is to ${v2} it.`;   

    } else if (inspirationalQuote === quoteTemplates[7]) {
        let n = getRandomElement(nouns);
        let v1 = getRandomElement(verbs);
        let v2 = getRandomElement(verbs);
        return `You can't let your ${n} ${v1} you. You have to ${v2} your ${n} ${v1} you.`;   

    } else if (inspirationalQuote === quoteTemplates[8]) {
        let v = getRandomElement(verbs);
        let adj1 = getRandomElement(adjectives);
        let adj2 = getRandomElement(adjectives);
        return `Never ${v} a day in your life. ${adj1} days bring you happiness and ${adj2} days ${v} you experience.`; 

    } else {
        let v1 = getRandomElement(verbs);
        let v2 = getRandomElement(verbs);
        let v3 = getRandomElement(verbs);
        return `${v1} as if you were to ${v2} tomorrow. ${v3} as if you were to ${v1} forever.`;   
    }
};
