import styled from "@emotion/styled";

export const Wrapper = styled.div`
  max-width: 1400px;
  width: 90%;
  margin: 0 auto;
`;

export const StateBar = styled.div`
  position: relative;
  padding: 0.5rem 0;

  ::before {
    position: absolute;
    top: 0;
    display: block;
    content: "";
    width: ${({ state }: { state: number }) => `calc(100% * ${state})`};
    height: 10px;
    border-radius: 1rem;
    background-color: #55f4cd;
    z-index: 2;
    transition: all ease 0.5s;
  }

  ::after {
    position: absolute;
    top: 0;
    display: block;
    content: "";
    width: 100%;
    height: 10px;
    border-radius: 1rem;
    background-color: #d4d4d444;
    z-index: 1;
  }
`;

export const StageMessage = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 10px 0 1rem 0;

  span {
    font-size: 1.25rem;

    :first-of-type {
      padding: 0.5rem 2rem;
      border-radius: 1rem;
      background-color: #fff;
      color: ${({ isCorrect }: { isCorrect: boolean | null }) =>
        isCorrect === null ? "#000" : isCorrect ? "#468ddf" : "#fe6768"};
    }

    :last-of-type {
      padding-right: 10px;
    }
  }
`;

export const Question = styled.p`
  font-size: 1.5rem;
  padding-bottom: 1rem;

  ::before {
    content: "Question : ";
  }
`;

export const AnswersWrapper = styled.ul`
  padding-left: 10px;
`;

export const Answer = styled.li`
  margin-bottom: 5px;
  padding: 0.5rem 0;
  font-size: 1.25rem;
  cursor: pointer;

  :hover {
    background-color: #d4d4d444;
  }

  :last-of-type {
    margin-bottom: 0;
  }
`;

export const ButtonWrapper = styled.div`
  padding-top: 1.25rem;
`;
