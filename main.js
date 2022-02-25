let num = 1;
let questionData = {
    1: {"title": "문제 1번", "type": "EI", "A":"E", "B":"I"},
    2: {"title": "문제 2번", "type": "EI", "A":"E", "B":"I"},
    3: {"title": "문제 3번", "type": "EI", "A":"E", "B":"I"},
    4: {"title": "문제 4번", "type": "SN", "A":"S", "B":"N"},
    5: {"title": "문제 5번", "type": "SN", "A":"S", "B":"N"},
    6: {"title": "문제 6번", "type": "SN", "A":"S", "B":"N"},
    7: {"title": "문제 7번", "type": "TF", "A":"T", "B":"F"},
    8: {"title": "문제 8번", "type": "TF", "A":"T", "B":"F"},
    9: {"title": "문제 9번", "type": "TF", "A":"T", "B":"F"},
    10: {"title": "문제 10번", "type": "JP", "A":"J", "B":"P"},
    11: {"title": "문제 11번", "type": "JP", "A":"J", "B":"P"},
    12: {"title": "문제 12번", "type": "JP", "A":"J", "B":"P"}
}
let result = {
    "INTJ": {"animal": "하마", "explain":"하마 설명", "img":"lion.jpg"},
    "INTP": {"animal": "하마", "explain":"하마 설명", "img":"lion.jpg"},
    "ENTJ": {"animal": "하마", "explain":"하마 설명", "img":"lion.jpg"},
    "ENTP": {"animal": "하마", "explain":"하마 설명", "img":"lion.jpg"},
    "INFJ": {"animal": "하마", "explain":"하마 설명", "img":"lion.jpg"},
    "INFP": {"animal": "하마", "explain":"하마 설명", "img":"lion.jpg"},
    "ENFJ": {"animal": "하마", "explain":"하마 설명", "img":"lion.jpg"},
    "ISTJ": {"animal": "하마", "explain":"하마 설명", "img":"lion.jpg"},
    "ENFP": {"animal": "하마", "explain":"하마 설명", "img":"lion.jpg"},
    "ISTJ": {"animal": "하마", "explain":"하마 설명", "img":"lion.jpg"},
    "ISFJ": {"animal": "하마", "explain":"하마 설명", "img":"lion.jpg"},
    "ESTJ": {"animal": "하마", "explain":"하마 설명", "img":"lion.jpg"},
    "ESFJ": {"animal": "하마", "explain":"하마 설명", "img":"lion.jpg"},
    "ISTP": {"animal": "하마", "explain":"하마 설명", "img":"lion.jpg"},
    "ISFP": {"animal": "하마", "explain":"하마 설명", "img":"lion.jpg"},
    "ESTP": {"animal": "하마", "explain":"하마 설명", "img":"lion.jpg"},
    "ESFP": {"animal": "하마", "explain":"하마 설명", "img":"lion.jpg"},
}
const startPage = document.getElementById("startPage");
const startBtn = document.getElementById("startBtn");
const questionPage = document.getElementById("questionPage");
const question = document.getElementById("question");
const questionA = document.getElementById("A");
const questionB = document.getElementById("B");
const mbtiType = document.getElementById("type");
const progressbar = document.getElementById("progress-bar");
const resultPage = document.getElementById("resultPage");
const animal = document.getElementById("animal");
const animalimg = document.getElementById("animalimg");
const resultMbti = document.getElementById("resultMbti");
const explain = document.getElementById("explain");

function next(){
    if(num==13) { /* 결과화면 */
        questionPage.classList.add('hidden');
        resultPage.classList.remove('hidden');
        /* 최종 결과 */
        let mbti = "";
        (document.getElementById("EI").value < 2 ) ? mbti+="I" : mbti+="E";
        (document.getElementById("SN").value < 2 ) ? mbti+="N" : mbti+="S";
        (document.getElementById("TF").value < 2 ) ? mbti+="F" : mbti+="T";
        (document.getElementById("JP").value < 2 ) ? mbti+="P" : mbti+="J";
        resultMbti.innerText = mbti;
        animalimg.src = result[mbti]["img"];
        animal.innerText = result[mbti]["animal"];
        explain.innerText = result[mbti]["explain"];
        
    } else {
        question.innerText = questionData[num]["title"];
        questionA.innerText = questionData[num]["A"];
        questionB.innerText = questionData[num]["B"];
        mbtiType.value = questionData[num]["type"];
        progressbar.style.width = Math.floor(num / 12 * 100) + "%";
        num++; //다음을 위해 num 증가시키기
    }
}

questionA.addEventListener("click", function(){
    document.getElementById(mbtiType.value).value ++;
    next();
})

questionB.addEventListener("click", function(){
    next();
})

startBtn.addEventListener("click", function(){
    startPage.classList.add('hidden');
    questionPage.classList.remove('hidden');
    next();
})
