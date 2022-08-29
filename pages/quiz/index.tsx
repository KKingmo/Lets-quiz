import axios from "axios";
import { Router } from "next/router";
import QuizStart from "../../src/components/units/QuizStart";

interface Quiz {
  question: string;
  correct_answer: string;
  answers: string[];
}

interface QuizPageProps {
  dataQuiz: Quiz[];
  category: number;
  difficulty: string;
}

export default function QuizPage(props: QuizPageProps) {
  const { dataQuiz, category, difficulty } = props;

  return (
    <QuizStart
      dataQuiz={dataQuiz}
      category={category}
      difficulty={difficulty}
    />
  );
}

export const getServerSideProps = async (context: Router) => {
  const { data } = await axios.get(
    `https://opentdb.com/api.php?amount=10&category=${context.query.category}&difficulty=${context.query.difficulty}&type=multiple`
  );

  const dataQuiz = data.results.map((el: any) => ({
    question: el.question,
    correct_answer: el.correct_answer,
    answers: [el.correct_answer, ...el.incorrect_answers].sort(
      () => Math.random() - 0.5
    ),
  }));

  return {
    props: {
      dataQuiz,
      category: data.results[0].category,
      difficulty: data.results[0].difficulty,
    },
  };
};
