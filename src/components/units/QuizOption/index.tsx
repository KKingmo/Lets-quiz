import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import FormRadio from "../../commons/formRadio";

const option = {
  category: [
    {
      num: 9,
      name: "일반 지식",
    },
    {
      num: 21,
      name: "스포츠",
    },
    {
      num: 23,
      name: "역사",
    },
  ],
  difficulty: ["easy", "medium", "hard"],
};

export default function QuizOption() {
  const router = useRouter();

  const { register, handleSubmit } = useForm({
    mode: "onChange",
    reValidateMode: "onChange",
  });

  const handleSubmitClick = (data: {
    category?: number;
    difficulty?: string;
  }) => {
    if (!data.category || !data.difficulty)
      return alert("난이도와 카테고리를 설정해주세요.");
    router.push(
      `/quiz?category=${data.category}&difficulty=${data.difficulty}`
    );
  };

  return (
    <form onSubmit={handleSubmit(handleSubmitClick)}>
      <ul>
        {option.category.map((el, idx) => (
          <FormRadio
            key={idx}
            register={register("category")}
            value={el.num}
            name={el.name}
          />
        ))}
      </ul>
      <ul>
        {option.difficulty.map((el, idx) => (
          <FormRadio
            key={idx}
            register={register("difficulty")}
            value={el}
            name={el}
          />
        ))}
      </ul>
      <button type="submit">퀴즈풀기</button>
    </form>
  );
}
