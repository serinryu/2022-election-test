let num = 1;
let result = {
    "이재명": {},
    "윤석열": {},
    "심상정": {},
    "안철수": {}
}
const startPage = document.getElementById("startPage");
const startBtn = document.getElementById("startBtn");
const questionPage = document.getElementById("questionPage");
const question = document.getElementById("question");
const questionA = document.getElementById("A");
const questionB = document.getElementById("B");
const questionC = document.getElementById("C");
const questionD = document.getElementById("D");
const questionType = document.getElementById("questionType");
const type = document.getElementById("type");
const progressbar = document.getElementById("progress-bar");
const resultPage = document.getElementById("resultPage");
const candidate = document.getElementById("candidate");
const candidateName = document.getElementById("candidateName");
const candidate1 = document.getElementById("candidate1__bar");
const candidate2 = document.getElementById("candidate2__bar");
const candidate3 = document.getElementById("candidate3__bar");
const candidate4 = document.getElementById("candidate4__bar");

function finalresult(){
    questionPage.classList.add('hidden');
    resultPage.classList.remove('hidden');
    const arr = [];
    arr.push(document.getElementById("1").value);
    arr.push(document.getElementById("2").value);
    arr.push(document.getElementById("3").value);
    arr.push(document.getElementById("4").value);
    const maxvalue = Math.max(...arr);
    /* 상위 후보 이름 */
    for (let i=0; i<arr.length; i++){
        if(arr[i]==maxvalue){
            let candidate = document.createElement("h3")
            candidate.innerText+=Object.keys(result)[i];
            candidateName.appendChild(candidate);
        }
    }
    /* 후보별 그래프 */
    candidate1.style.width = Math.floor(document.getElementById("1").value / 9 * 100) + "%";
    candidate2.style.width = Math.floor(document.getElementById("2").value / 9 * 100) + "%";
    candidate3.style.width = Math.floor(document.getElementById("3").value / 9 * 100) + "%";
    candidate4.style.width = Math.floor(document.getElementById("4").value / 9 * 100) + "%";

}

function next(){
    if(num==10) {  
        finalresult();
    } else {
        fetch("./question.json")
        .then(response => {
            return response.json();
        })
        .then(questionData => {
            //console.log(questionData);
            question.innerText = questionData[num]["title"];
            questionA.innerText = questionData[num]["A"];
            questionB.innerText = questionData[num]["B"];
            questionC.innerText = questionData[num]["C"];
            questionD.innerText = questionData[num]["D"];
            questionType.innerText = questionData[num]["type"];
            progressbar.style.width = Math.floor(num / 9 * 100) + "%";
            num++; //다음을 위해 num 증가시키기);
        })
    }
}

questionA.addEventListener("click", function(){
    document.getElementById("1").value ++;
    next();
})

questionB.addEventListener("click", function(){
    document.getElementById("2").value ++;
    next();
})

questionC.addEventListener("click", function(){
    document.getElementById("3").value ++;
    next();
})

questionD.addEventListener("click", function(){
    document.getElementById("4").value ++;
    next();
})

startBtn.addEventListener("click", function(){
    startPage.classList.add('hidden');
    questionPage.classList.remove('hidden');
    next();
})
