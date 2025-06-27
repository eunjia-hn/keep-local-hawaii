import React, { useState, useEffect } from "react";
import "./Quiz.css";

export function Quiz(props) {
    const questions = props.quizData;

    const [showResults, setShowResults] = useState(false);
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [answers, setAnswers] = useState([]);
    const [isTransitioning, setIsTransitioning] = useState(false);
    const [showQuiz, setShowQuiz] = useState(false);

    useEffect(() => {
        // Animate in the quiz after a brief delay
        const timer = setTimeout(() => setShowQuiz(true), 500);
        return () => clearTimeout(timer);
    }, []);

    const optionClicked = (selectedOption) => {
        setIsTransitioning(true);
        
        // Store the answer
        const newAnswers = [...answers];
        newAnswers[currentQuestion] = selectedOption;
        setAnswers(newAnswers);

        // Check if correct
        if (selectedOption.isCorrect) {
            setScore(score + 1);
        }

        // Transition to next question or results
        setTimeout(() => {
            if (currentQuestion + 1 < questions.length) {
                setCurrentQuestion(currentQuestion + 1);
            } else {
                setShowResults(true);
            }
            setIsTransitioning(false);
        }, 300);
    };

    const restartGame = () => {
        setScore(0);
        setCurrentQuestion(0);
        setShowResults(false);
        setAnswers([]);
        setIsTransitioning(false);
    };

    const getResultMessage = () => {
        const percentage = Math.round((score / questions.length) * 100);
        if (percentage >= 90) {
            return {
                title: "Kama'āina Level! 🌺",
                subtitle: "You're practically a local!",
                message: "Your knowledge of Hawaiian culture and history is exceptional. You truly understand and respect the rich heritage of these islands."
            };
        } else if (percentage >= 70) {
            return {
                title: "Aloha Spirit! 🌊",
                subtitle: "You've got the spirit!",
                message: "Great job! You have a solid understanding of Hawaiian culture. Keep learning and spreading the aloha spirit wherever you go."
            };
        } else if (percentage >= 50) {
            return {
                title: "Mahalo for Learning! 🌴",
                subtitle: "You're on the right path!",
                message: "Good effort! You have a foundation of Hawaiian knowledge. Continue exploring and learning about the beautiful culture of these islands."
            };
        } else {
            return {
                title: "Aloha Beginner! 🌺",
                subtitle: "Every journey starts with a single step!",
                message: "Thank you for taking the quiz! This is just the beginning of your Hawaiian cultural journey. Keep learning and exploring!"
            };
        }
    };

    const result = getResultMessage();

    if (!showQuiz) {
        return (
            <div className="quiz-loading">
                <div className="loading-spinner">
                    <div className="spinner"></div>
                    <p>Preparing your Hawaiian adventure...</p>
                </div>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            {/* Hero Section */}
            <div className="quiz-hero">
                <div className="hero-content">
                    <h1 className="hero-title">Discover Your Hawaiian Knowledge</h1>
                    <p className="hero-subtitle">
                        Test your understanding of Hawaiian culture, history, and traditions
                    </p>
                    <div className="hero-decoration">
                        <span className="decoration-line"></span>
                        <span className="decoration-flower">🌺</span>
                        <span className="decoration-line"></span>
                    </div>
                </div>
            </div>

            {showResults ? (
                <div className={`quiz-results ${isTransitioning ? 'fade-out' : 'fade-in'}`}>
                    <div className="results-card">
                        <div className="results-header">
                            <h2 className="results-title">{result.title}</h2>
                            <p className="results-subtitle">{result.subtitle}</p>
                        </div>
                        
                        <div className="score-display">
                            <div className="score-circle">
                                <span className="score-number">{score}</span>
                                <span className="score-total">/ {questions.length}</span>
                            </div>
                            <div className="score-percentage">
                                {Math.round((score / questions.length) * 100)}%
                            </div>
                        </div>

                        <div className="results-message">
                            <p>{result.message}</p>
                        </div>

                        <div className="cultural-note">
                            <h4>Cultural Awareness Note:</h4>
                            <p>
                                When Hawai'i was illegally overthrown by the United States in January of 1893, over 1.2 million acres
                                of native land was seized and their monarchy was annexed. The Hawaiian language was banned from being
                                taught in schools, and the colonization of Hawai'i stripped the native population of their culture,
                                traditions, and rightful land. Today, only 20% of Hawai'i's population is made up by native Hawaiians,
                                and they are still fighting to reestablish their governance and spread their traditional customs.
                            </p>
                            <p>
                                In the early 1970s a renaissance of the Hawaiian culture began to promote native traditions in language, art,
                                dance, and cuisine. Despite the positive impact of this renaissance, the tourism business dominates the Hawaiian
                                economy and people visiting and moving from the mainland has a negative impact on efforts against colonization.
                                Due to this, it is crucial for visitors to educate themselves on the history and culture of Hawai'i,
                                and plan their trips around supporting small and locally owned businesses whose mission aligns with that of
                                the native population.
                            </p>
                        </div>

                        <div className="results-actions">
                            <button className="restart-btn" onClick={restartGame}>
                                <span>Take Quiz Again</span>
                                <span className="btn-icon">🔄</span>
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={`quiz-content ${isTransitioning ? 'slide-out' : 'slide-in'}`}>
                    <div className="quiz-progress">
                        <div className="progress-bar">
                            <div 
                                className="progress-fill" 
                                style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                            ></div>
                        </div>
                        <div className="progress-text">
                            Question {currentQuestion + 1} of {questions.length}
                        </div>
                    </div>

                    <div className="question-card">
                        <div className="question-header">
                            <h2 className="question-title">{questions[currentQuestion].text}</h2>
                        </div>

                        <div className="options-container">
                            {questions[currentQuestion].options.map((option, index) => (
                                <button
                                    key={option.id}
                                    className={`option-btn ${answers[currentQuestion]?.id === option.id ? 'selected' : ''}`}
                                    onClick={() => optionClicked(option)}
                                    disabled={answers[currentQuestion]}
                                >
                                    <span className="option-letter">
                                        {String.fromCharCode(65 + index)}
                                    </span>
                                    <span className="option-text">{option.text}</span>
                                    {answers[currentQuestion]?.id === option.id && (
                                        <span className="option-icon">
                                            {option.isCorrect ? '✅' : '❌'}
                                        </span>
                                    )}
                                </button>
                            ))}
                        </div>

                        {answers[currentQuestion] && (
                            <div className="feedback-message">
                                <p>
                                    {answers[currentQuestion].isCorrect 
                                        ? "Correct! 🌺 Mahalo for your knowledge!" 
                                        : "Not quite right, but mahalo for trying! Keep learning!"
                                    }
                                </p>
                                <button 
                                    className="next-btn"
                                    onClick={() => {
                                        if (currentQuestion + 1 < questions.length) {
                                            setCurrentQuestion(currentQuestion + 1);
                                        } else {
                                            setShowResults(true);
                                        }
                                    }}
                                >
                                    {currentQuestion + 1 < questions.length ? 'Next Question' : 'See Results'}
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            )}
        </div>
    );
}



