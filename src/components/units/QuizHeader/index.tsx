interface QuizHeaderProps {
  category: string;
  difficulty: string;
  stage: number;
}

export default function QuizHeader(props: QuizHeaderProps) {
  const { category, difficulty, stage } = props;

  return (
    <div>
      {category} {difficulty} Quiz #{stage}
    </div>
  );
}
