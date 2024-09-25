"use client";

import { QuestionItem } from "@/components/QuestionItem";
import { quizQuestions as originalQuizQuestions } from "@/data/quizQuestions";
import { useState } from "react";


const shuffleArray = (array: any[]) => {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [array[i], array[j]] = [array[j], array[i]];
  }
  return array;
};
const Page = () => {
  const title = "Frontend Quiz";
  const icon = "</>";
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [showResult, setShowResult] = useState(false);
  const [shuffledQuestions, setShuffledQuestions] = useState(shuffleArray([...originalQuizQuestions]));
  const correct = shuffledQuestions.filter((item, key) => item.answer === answers[key]);


  const loadNextQuestion = () => {
    if (shuffledQuestions[currentQuestion + 1]) {
      setCurrentQuestion(currentQuestion + 1);
    } else {
      setShowResult(true);
    }
  };

  const handleAnswered = (answer: number) => {
    setAnswers([...answers, answer]);
    loadNextQuestion();
  };

 

  const resetQuiz = () => {
    setShowResult(false);
    setCurrentQuestion(0);
    setAnswers([]);
    setShuffledQuestions(shuffleArray([...originalQuizQuestions])); // Embaralha o array ao resetar
  };
 
  return (
    <div className="px-2 h-screen w-full max-w-4xl md:mx-auto flex flex-col overflow-hidden">
      <div className="h-32 w-full flex items-center">
        <h1 className="text-white font-bold text-3xl drop-shadow-md">
          {title}
          <span className="ml-4 bg-purple-600 p-2 rounded drop-shadow-sm">{icon}</span>
        </h1>
      </div>

      <div className="w-full h-full">
        {!showResult && (
          <>
            <div className="text-gray-500 italic text-sm mb-4">
              {currentQuestion + 1} de {shuffledQuestions.length} pergunta
              {shuffledQuestions.length === 1 ? "" : "s"}
            </div>
            <QuestionItem
              question={shuffledQuestions[currentQuestion]}
              count={currentQuestion + 1}
              onAnswer={handleAnswered}
            />
          </>
        )}
        {showResult && (
          <div className="md:flex gap-8 ">
            <h1 className="text-4xl md:text-4xl text-white">Quiz completo 🎉</h1>

            <div>
              <span className="text-sm text-gray-400">Sua pontuação...</span>
              <div className="bg-slate-600 h-60 mt-4 rounded-lg flex flex-col justify-center items-center md:w-96">
                <p className="text-9xl text-purple-600">{correct.length}</p>
                <p className="text-gray-400 text-sm">de {shuffledQuestions.length} perguntas</p>
                <p className="text-md mt-2 text-white">
                  {correct.length < 5 && "Podia ser melhor. Continue praticando 🫡"}
                  {correct.length >= 5 && "Excelente, será um DEV excepcional 🥳"}
                </p>
              </div>
              <button
                onClick={resetQuiz}
                className="bg-purple-600 rounded-xl px-3 py-4 w-full lg:w-96 cursor-pointer font-bold mt-4 text-white"
              >
                Jogar novamente
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Page;
