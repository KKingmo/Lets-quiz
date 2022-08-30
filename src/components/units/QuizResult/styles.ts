import styled from "@emotion/styled";

export const ChartWrapper = styled.div`
  height: 500px;
`;
export const Title = styled.h1`
  padding: 2rem;
  text-align: center;
  font-size: 2rem;
`;

export const QuizType = styled.h2`
  display: flex;
  justify-content: center;
  padding-bottom: 2rem;

  span {
    margin-right: 1rem;
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    background-color: #d4d4d444;
    :last-of-type {
      margin-right: 0;
    }
  }
`;

export const TimeTaken = styled.div`
  text-align: center;
  font-size: 1.25rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
