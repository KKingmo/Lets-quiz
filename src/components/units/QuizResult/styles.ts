import styled from "@emotion/styled";
import { breakPoints } from "../../../../styles/media";

export const ChartWrapper = styled.div`
  margin: 0 auto;
  max-width: 900px;
  width: 100%;
  aspect-ratio: 1.5;

  @media (max-width: 700px) {
    aspect-ratio: 1.1;
  }
`;

export const Title = styled.h1`
  padding: 2rem;
  text-align: center;
  font-size: 2rem;
`;

export const QuizType = styled.h2`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  padding-bottom: 2rem;

  span {
    margin-right: 1rem;
    padding: 0.5rem 2rem;
    border-radius: 1rem;
    background-color: #feed36;
    color: #000;
    word-break: keep-all;

    :last-of-type {
      margin-right: 0;
    }
  }

  @media ${breakPoints.mobile} {
    span {
      margin-bottom: 10px;
    }
  }
`;

export const TimeTaken = styled.div`
  text-align: center;
  font-size: 1.5rem;
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
`;
