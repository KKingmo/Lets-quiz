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

export default function QuizStart(props: QuizPageProps) {
  const { dataQuiz, category, difficulty } = props;

  console.log(
    "dataQuiz",
    dataQuiz,
    "category",
    category,
    "difficulty",
    difficulty
  );
  return <div>와드</div>;
}
