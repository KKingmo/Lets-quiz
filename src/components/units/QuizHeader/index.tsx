import styled from "@emotion/styled";

interface QuizHeaderProps {
  category: string;
  difficulty: string;
  stage: number;
}

export default function QuizHeader(props: QuizHeaderProps) {
  const { category, difficulty, stage } = props;

  return (
    <Wrapper className="quiz-type">
      <Span>Quiz #{stage}</Span>
      <Span>{category}</Span>
      <Span>{difficulty}</Span>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  padding: 1rem 0;
`;

const Span = styled.span`
  display: inline-block;
  margin-bottom: 10px;
  margin-right: 1rem;
  padding: 0.5rem 2rem;
  border-radius: 1rem;
  background-color: #feed36;
  color: #000;
  font-size: 1.25rem;

  :last-of-type {
    margin-right: 0;
  }
`;
