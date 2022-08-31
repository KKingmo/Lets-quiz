import styled from "@emotion/styled";

export const Wrapper = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1400px;
  width: 90%;

  @media (max-width: 991px) {
    flex-direction: column;
    align-items: center;
  }
`;

export const Aside = styled.aside`
  width: fit-content;

  ul {
    padding: 1rem;
  }

  li {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    width: 100px;
    height: 40px;
    background-color: #d4d4d444;
    border-radius: 2rem;
    color: #d4d4d4;
    cursor: pointer;

    &.isActive {
      background-color: #fff;
      color: #000;
    }
  }

  @media (max-width: 991px) {
    ul {
      display: flex;
      flex-wrap: wrap;
    }

    li {
      margin-left: 5px;
      margin-right: 5px;
      width: calc(100% / 4 - 10px);
    }
  }

  @media (max-width: 600px) {
    li {
      width: calc(100% / 3 - 10px);
    }
  }
`;

export const Section = styled.section`
  padding: 1rem 0.5rem;
`;

export const GradeText = styled.div`
  font-size: 1.25rem;
  padding-bottom: 0.5rem;

  span {
    color: #55f4cd;
  }

  ::before {
    padding-right: 10px;
    content: ">";
    color: #ff2900;
  }
`;

export const QuizType = styled.span`
  display: inline-block;
  margin-right: 1rem;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 1rem;
  background-color: #feed36;
  color: #000;

  :last-of-type {
    margin-right: 0;
  }

  &.correctTag {
    background-color: #00c896aa;
    color: #fff;
  }

  &.wrongTag {
    background-color: #fe6768aa;
    color: #fff;
  }
`;

export const ResultWrapper = styled.div`
  display: flex;
  flex-direction: column;
  border-bottom: 1px solid #fff;

  :last-of-type {
    border-bottom: none;
  }
`;

export const Question = styled.p`
  padding: 0.5rem 0;
  font-size: 1.5rem;
`;

export const AnswersWrapper = styled.div``;

export const Answers = styled.p`
  display: flex;
  align-items: center;
  padding: 0.5rem 1rem;
  width: fit-content;
  border-radius: 2rem;

  b {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 1.25rem;
    height: 1.25rem;
    border: 1px solid #d4d4d4;
    border-radius: 50%;
    color: #d4d4d4;
    font-size: 1rem;
  }

  span {
    padding-left: 0.5rem;
    font-size: 1.2rem;
  }

  &.isActive {
    background-color: ${({ isCorrect }: { isCorrect: boolean }) => (isCorrect ? "#00c896aa" : "#fe6768aa")};
  }
`;

export const CorrectAnswer = styled.p`
  padding: 0.5rem;
  font-size: 1.25rem;
  color: #55f4cd;
`;

export const GuideText = styled.p`
  padding: 3rem;
  width: 100%;
  font-size: 1.5rem;
  word-break: keep-all;
`;
