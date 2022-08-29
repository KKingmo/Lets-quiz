import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import Button01 from "../../commons/buttons/01";
import FormRadio from "../../commons/formRadio";
import { OPTION } from "../../commons/quizOption/option";

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
      <ul>
        {OPTION.category.map((el, idx) => (
          <FormRadio
            key={idx}
            register={register("category")}
            value={el.num}
            name={el.name}
          />
        ))}
      </ul>
      <ul>
        {OPTION.difficulty.map((el, idx) => (
          <FormRadio
            key={idx}
            register={register("difficulty")}
            value={el}
            name={el}
          />
        ))}
      </ul>

      <Button01 type="submit" disabled={!isValid} name="퀴즈풀기" />
    </form>
  );
}
