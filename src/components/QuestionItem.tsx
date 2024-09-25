import { Question } from "@/types/Question";
import { faCheckCircle, faXmarkCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";

type Props = {
  question: Question;
  count: number;
  onAnswer: (answer: number) => void;
};

const getLetter = (key: number) => {
  switch (key) {
    case 0:
      return "A";
    case 1:
      return "B";
    case 2:
      return "C";
    case 3:
      return "D";
    default:
      return "";
  }
};

export const QuestionItem = ({ question, count, onAnswer }: Props) => {
  const [selectAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [answer, setAnswer] = useState<number | null>(null);
  

  const checkQuestion = (key: number) => {
    if ( selectAnswer === null) {
      setSelectedAnswer(key);
      setAnswer(key);
    }
  };

  const handleSubmit = () => {
    if (selectAnswer === null) {
      alert("Selecione uma resposta");
      return;
    }
    onAnswer(answer!)
    setSelectedAnswer(null)
}

  return (
    <div className="flex flex-col gap-10 text-white md:flex-row">
      <div className="md:w-1/2 flex h-12">
        <div className="bg-purple-600 h-10 w-12 rounded mr-4 text-center py-1 px-2">
          <span className="text-2xl">{count}</span>
        </div>
        <p className="text-lg md:text-3xl">{question.question}</p>
      </div>

      <div className="flex flex-col gap-4">
        {question.options.map((item, key) => (
          <div
            onClick={() => checkQuestion(key)}
            key={key}
            className={`bg-slate-600 rounded-xl flex justify-between px-3 py-3 items-center w-full lg:w-96 border-2 transition cursor-pointer
              ${selectAnswer === null ? "border-transparent" : ""}
              ${selectAnswer === null ? "hover:border-purple-600" : "cursor-default"}
              ${selectAnswer !== null && selectAnswer === question.answer && selectAnswer === key && "border-green-600"}
              ${selectAnswer !== null && selectAnswer !== question.answer && selectAnswer === key && "border-red-600"}
              ${selectAnswer !== null && selectAnswer !== question.answer && key === question.answer && "border-green-600"}
              ${selectAnswer !== null && selectAnswer !== key && key !== question.answer && "border-slate-600"}
            `}
          >
            <div className="flex gap-4 items-center">
              <span className="h-8 w-8 bg-white rounded text-black font-bold flex justify-center items-center">
                {getLetter(key)}
              </span>
              <p>{item}</p>
            </div>

            <div className="text-end">
              {selectAnswer !== null && selectAnswer === question.answer && selectAnswer === key && (
                <FontAwesomeIcon icon={faCheckCircle} className="size-4 color text-green-600" />
              )}
              {selectAnswer !== null && selectAnswer !== question.answer && selectAnswer === key && (
                <FontAwesomeIcon icon={faXmarkCircle} className="size-4 color text-red-600" />
              )}
              { selectAnswer !== null && selectAnswer !== question.answer && key === question.answer &&(
                  <FontAwesomeIcon icon={faCheckCircle} className="size-4 color text-green-600" />
              )}
            </div>
          </div>
        ))}
        <button
          onClick={handleSubmit}
          className="bg-purple-600 rounded-xl px-3 py-4 w-full lg:w-96 cursor-pointer font-bold mt-4 "
        >
          Enviar resposta
        </button>
      </div>
    </div>
  );
};
