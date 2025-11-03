let wordList = [
    'agree',
    'oppose',
    'advise',
    'tip',
    'discuss',
    'blame',
    'argue',
    'claim',
    'complain',
    'offer',
    'suggest',
    'recommend',
    'grateful',
    'apologize',
    'excuse',
    'celebrate',
    'admire',
    'impress',
    'award',
    'describe',
    'explain',
    'communicate',
    'express',
    'promise',
    'information',
    'technology',
    'research',
    'material',
    'artificial',
    'electric',
    'invent',
    'discover',
    'develop',
    'skill',
    'ability',
    'talent',
    'effort',
    'practice',
    'game',
    'achieve',
    'manage',
    'improve',
    'produce',
    'create',
    'establish',
    'save',
    'medicine',
    'patient',
    'condition',
    'medical',
    ];

let meaningList = [
    '賛成する',
    '～に反対する',
    '～に忠告する',
    '助言',
    '～について話し合う',
    '～に責任があるとする',
    '～と主張する、言い争う',
    '～と主張する、要求する',
    '文句を言う',
    '～を申し出る',
    '～を示唆する',
    '～を推薦する',
    '感謝している',
    '謝る',
    '言い訳',
    '～を祝う',
    '～に感心する',
    '～に感銘を与える',
    '賞',
    '～を説明する',
    '～を説明する',
    '意思の疎通を図る',
    '～を表現する',
    '約束',
    '情報',
    '（科学）技術',
    '研究',
    '材料',
    '人工的な',
    '電気の',
    '～を発明する',
    '～を発見する',
    '発達する',
    '技術、力',
    '能力',
    '才能',
    '努力',
    '練習',
    '試合',
    '～を達成する',
    '何とかして～する',
    '～を改善する',
    '～を生産する',
    '～を創造する',
    '～を確立する',
    '～を省く',
    '薬',
    '患者',
    '状態',
    '医療の',
    ];

function intRandom(min,max){
    return Math.floor(Math.random() * (max-min +1)) + min ;
};

function countInitials(){
    let wordFirst = word.charAt(0);
    for(let i=0; i<initials; i++){
        wordFirst += word.charAt(i+1);
    }
    console.log(wordFirst);
    console.log(word.length);

    let underBar = "";
    for(let i=0; i<word.length-initials-1; i++){
        underBar += "_";
    }

    let wordQuestion = wordFirst + underBar;

    document.getElementById("question_word").textContent = wordQuestion;
}

function answer(){
    let tf;
    let inputAnswer = document.getElementById("input_answer");
    if(inputAnswer.value === word){
        tf = true;
    } else {
        tf = false;
    }
    console.log(tf);

    if(inputAnswer.value === ""){
        document.getElementById("your_answer").textContent = "回答していません";
    } else{
        document.getElementById("your_answer").textContent = inputAnswer.value;
    }
    document.getElementById("input_answer").value = "";

    if(tf === true){
        document.getElementById("question_word").textContent = word;
    } else if(tf === false){
        
        if(initials <= word.length-2){
            initials ++;
            countInitials();
        }
        console.log(initials);
    }

}

function next(){
    number = intRandom(1,50);
    console.log(number);

    word = wordList[number-1];
    console.log(word);

    meaning = meaningList[number-1];
    console.log(meaning);

    document.getElementById("question_meaning").textContent = meaning;

    initials = 0;

    countInitials();
}

let number;
let word;
let meaning;
let initials;
next();

window.addEventListener('DOMContentLoaded', () => {
    
});