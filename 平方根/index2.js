function generateRandomSquareRootQuestion() {
    const a = Math.floor(Math.random() * 10) + 1; // 1から10までのランダムな整数
    return {
        question: `√${a * a}`, // 平方根の形
        correctAnswer: a // 正しい答え
    };
}

function displayQuestions() {
    const questionsContainer = document.getElementById("questions");
    for (let i = 1; i <= 20; i++) {
        const { question, correctAnswer } = generateRandomSquareRootQuestion();
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `
            <div>問題 ${i}: ${question}</div>
            <input type="text" id="answer-${i}" placeholder="答えを入力" />
            <div id="result-${i}" class="result"></div>
            <div id="explanation-${i}" class="explanation" style="display: none;"></div>
            <input type="hidden" id="correct-${i}" value="${correctAnswer}" />
        `;
        questionsContainer.appendChild(questionDiv);
    }
}

function checkAnswers() {
    for (let i = 1; i <= 20; i++) {
        const userAnswer = document.getElementById(`answer-${i}`).value.trim();
        const resultDiv = document.getElementById(`result-${i}`);
        const explanationDiv = document.getElementById(`explanation-${i}`);
        const correctAnswer = document.getElementById(`correct-${i}`).value;

        if (parseInt(userAnswer, 10) === parseInt(correctAnswer, 10)) {
            resultDiv.textContent = "⭕️ 正解！";
            explanationDiv.style.display = "none";
        } else {
            resultDiv.textContent = "❌ 不正解。";
            explanationDiv.textContent = `解説: 正しい答えは ${correctAnswer} です。`;
            explanationDiv.style.display = "block";
        }
    }
}

// ページ読み込み時に問題を生成
window.onload = displayQuestions;

// 確認ボタンにイベントリスナーを追加
document.getElementById("checkAnswers").onclick = checkAnswers;
