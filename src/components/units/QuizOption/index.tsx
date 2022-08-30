import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button01 from "../../commons/buttons/01";
import FormRadio from "../../commons/formRadio";
import { OPTION } from "../../commons/quizOption/option";
import styled from "@emotion/styled";

export default function QuizOption() {
  const router = useRouter();

  const { register, handleSubmit, watch } = useForm({
    mode: "onChange",
    defaultValues: { category: null, difficulty: null },
  });

  const isValid = !watch(["category", "difficulty"]).includes(null);

  const handleSubmitClick = (data: {
    category?: number | null;
    difficulty?: string | null;
  }) => {
    if (!data.category || !data.difficulty)
      return alert("난이도와 카테고리를 설정해주세요.");
    router.push(
      `/quiz?category=${data.category}&difficulty=${data.difficulty}`
    );
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitClick)}>
      <Title>
        <span>아래의 퀴즈 분류와 난이도를 선택한 후</span>
        <span>퀴즈풀기 버튼을 눌러주세요!</span>
      </Title>
      <Ul>
        {OPTION.category.map((el, idx) => (
          <FormRadio
            key={idx}
            register={register("category")}
            value={el.num}
            name={el.name}
          />
        ))}
      </Ul>
      <Ul>
        {OPTION.difficulty.map((el, idx) => (
          <FormRadio
            key={idx}
            register={register("difficulty")}
            value={el}
            name={el}
          />
        ))}
      </Ul>
      <ButtonWrapper>
        <Button01
          type="submit"
          disabled={!isValid}
          name="퀴즈풀기"
          style={{ fontSize: "1.5rem" }}
        />
      </ButtonWrapper>
    </form>
  );
}

const Ul = styled.ul`
  display: flex;
  justify-content: center;
  padding: 2rem 0;
`;

const Title = styled.h1`
  display: flex;
  flex-direction: column;
  padding-top: 2rem;
  text-align: center;

  span {
    padding: 1rem 0;
    font-size: 1.25rem;
  }
`;

const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  padding-top: 2rem;
`;
