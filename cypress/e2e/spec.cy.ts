describe("empty spec", () => {
  const numberOfQuiz = 10;
  const getRandomNumber = (maxNum: number) => Math.floor(Math.random() * maxNum);

  const takeAllQuiz = (curStage: number) => {
    for (let i = curStage; i <= numberOfQuiz; i++) {
      cy.get(".quiz-stage").should("have.text", `${i} / ${numberOfQuiz}`);
      cy.get(".quiz-answers").find("li").eq(getRandomNumber(4)).click();
      cy.findByRole("button", { name: /다음/i }).click();
    }
  };

  it("index page - 초기 접속 페이지", () => {
    cy.visit("/");
    // 문제 카테고리, 난이도 설정 했을 시 퀴즈풀기 버튼 활성화
    cy.findByRole("button", { name: /퀴즈풀기/i }).should("be.disabled");
    cy.get("input[name='category']").eq(getRandomNumber(3)).closest("label").click();
    cy.get("input[name='difficulty']").eq(getRandomNumber(3)).closest("label").click();
    cy.findByRole("button", { name: /퀴즈풀기/i }).should("not.be.disabled");
    cy.findByRole("button", { name: /퀴즈풀기/i }).click();
  });

  it("quiz page - 퀴즈 풀기 페이지", () => {
    // 퀴즈 시작이후 다음 버튼 비활성화
    cy.findByRole("button", { name: /다음\s>/i }).should("be.disabled");

    // 퀴즈 타입 존재확인
    cy.get(".quiz-type")
      .find("span")
      .each((el) =>
        cy
          .wrap(el)
          .invoke("text")
          .then((text) => {
            expect(text.length).to.be.at.least(1);
          })
      );

    // 퀴즈 타이머, 메세지, stage 확인
    cy.wait(3000);
    cy.get(".quiz-timer")
      .invoke("text")
      .then((text) => {
        const start = text.indexOf(": ");
        const end = text.indexOf("초", start);
        return text.slice(start + 1, end);
      })
      .then(parseInt)
      .should("be.a", "number")
      .and("be.within", 2, 5);
    cy.get(".quiz-message").should("have.text", "보기를 선택하세요.");
    cy.get(".quiz-stage").should("have.text", "1 / 10");

    // 문제 존재확인
    cy.get(".quiz-question")
      .invoke("text")
      .then((text) => {
        expect(text.length).to.be.at.least(2);
      });

    // 보기 존재확인
    cy.get(".quiz-answers")
      .find("li span:nth-of-type(2)")
      .each((el) => {
        expect(el.text().length).to.be.at.least(1);
      });

    // 보기 랜덤 선택 후 채점 작동확인
    cy.get(".quiz-answers").find("li").eq(getRandomNumber(4)).click();
    cy.get(".quiz-message")
      .invoke("text")
      .then((text) => {
        expect(text).to.be.oneOf(["틀렸어요.", "정답이에요!"]);
      });

    // 퀴즈 보기 선택 후 다음 버튼 활성화
    cy.findByRole("button", { name: /다음\s>/i })
      .should("not.be.disabled")
      .click();

    // 모든 퀴즈 풀기
    takeAllQuiz(2);
  });

  it("result page - 퀴즈 결과 페이지", () => {
    // 타이틀, 퀴즈타입 존재확인
    cy.get(".quiz-title").should("have.text", "퀴즈 결과");
    cy.get(".quiz-type")
      .find("span")
      .each((el) =>
        cy
          .wrap(el)
          .invoke("text")
          .then((text) => {
            expect(text.length).to.be.at.least(1);
          })
      );

    // 정답, 오답이 정상적으로 표기되는지 확인후 검사
    cy.wait(2000);
    cy.get("tspan")
      .eq(0)
      .invoke("text")
      .then((text) => {
        const start = text.indexOf(" ");
        const end = text.indexOf("개", start);
        return text.slice(start + 1, end);
      })
      .then((number) => {
        cy.get("tspan")
          .eq(1)
          .should("have.text", `오답 ${Math.abs(numberOfQuiz - parseInt(number))}개`);
      });
  });
});
