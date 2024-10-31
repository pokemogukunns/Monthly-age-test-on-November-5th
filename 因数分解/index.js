function generateRandomQuestion() {
    const a = Math.floor(Math.random() * 10) + 1; // 1から10までのランダムな整数
    const b = Math.floor(Math.random() * 10) + 1; // 1から10までのランダムな整数
    return {
        question: `${a}x^2 + ${b}x + ${a * b}`, // 因数分解の形 ax^2 + bx + c
        correctAnswer: `${a}(x + ${b})(x + ${a})` // 正しい因数分解の形式
    };
}

function displayQuestions() {
    const questionsContainer = document.getElementById("questions");
    for (let i = 1; i <= 20; i++) {
        const { question, correctAnswer } = generateRandomQuestion();
        const questionDiv = document.createElement("div");
        questionDiv.innerHTML = `
            <div>問題 ${i}: ${question}</div>
            <input type="text" id="answer-${i}" placeholder="答えを入力" />
            <div id="result-${i}" class="result"></div>
            <div id="explanation-${i}" class="explanation" style="display: none;"></div>
        `;
        questionsContainer.appendChild(questionDiv);
    }
}

function checkAnswers() {
    for (let i = 1; i <= 20; i++) {
        const userAnswer = document.getElementById(`answer-${i}`).value.trim();
        const resultDiv = document.getElementById(`result-${i}`);
        const explanationDiv = document.getElementById(`explanation-${i}`);

        const { correctAnswer } = generateRandomQuestion();

        if (userAnswer === correctAnswer) {
            resultDiv.textContent = "⭕️ 正解！";
            explanationDiv.style.display = "none";
        } else {
            resultDiv.textContent = "❌ 不正解。";
            explanationDiv.textContent = `解説: ${correctAnswer}`;
            explanationDiv.style.display = "block";
        }
    }
}

// ページ読み込み時に問題を生成
window.onload = displayQuestions;

// 確認ボタンにイベントリスナーを追加
document.getElementById("checkAnswers").onclick = checkAnswers;
