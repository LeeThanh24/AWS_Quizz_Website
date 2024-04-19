import React, { useState } from "react";
import quizData from "./quizData";
import awsLogo from "./image/aws-icon-2048x2048-ptyrjxdo.png"; // Đường dẫn tới hình ảnh của bạn

function Quiz() {
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [score, setScore] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [selectedAnswer, setSelectedAnswer] = useState("");
  const [isCorrect, setIsCorrect] = useState(null);

  const handleAnswerOptionClick = (option) => {
    const correctAnswer = quizData[currentQuestion].answer;
    setSelectedAnswer(option);
    if (option === correctAnswer) {
      setScore(score + 1);
      setIsCorrect(true);
    } else {
      setIsCorrect(false);
    }

    // Delay moving to the next question to allow the user to see feedback
    setTimeout(() => {
      const nextQuestion = currentQuestion + 1;
      if (nextQuestion < quizData.length) {
        setCurrentQuestion(nextQuestion);
        setIsCorrect(null); // Reset for the next question
        setSelectedAnswer(""); // Reset selected answer
      } else {
        setShowScore(true);
      }
    }, 1000); // Adjust time as needed
  };

  return (
    <div className="quiz">
      <img
        src={awsLogo}
        alt="Quiz Image"
        style={{
          width: "100%",
          maxWidth: "150px",
          marginBottom: "30px",
          marginTop: "0px",
        }}
      />

      {showScore ? (
        <div className="score-section">
          You scored {score} out of {quizData.length}
        </div>
      ) : (
        <>
          <div className="question-section">
            <div className="question-count">
              <span>Question {currentQuestion + 1}</span>/{quizData.length}
            </div>
            <div
              className="question-text"
              style={{
                margin: "20px",

                fontSize: "2rem",
              }}
            >
              {quizData[currentQuestion].question}
            </div>
          </div>
          <div className="answer-section">
            {quizData[currentQuestion].options.map((option) => (
              <button
                onClick={() => handleAnswerOptionClick(option)}
                key={option}
                style={{
                  margin: "30px",
                  padding: "20px",
                  borderRadius: "15px",
                  cursor: "pointer",
                  backgroundColor:
                    selectedAnswer === option
                      ? isCorrect
                        ? "lightgreen"
                        : "pink"
                      : "",
                }}
              >
                {option}
              </button>
            ))}
          </div>
          {selectedAnswer && (
            <div style={{ marginTop: "10px" }}>
              {isCorrect ? "Correct! 🎉" : "Sorry, that’s not right. 😢"}
            </div>
          )}
        </>
      )}
    </div>
  );
}

export default Quiz;
