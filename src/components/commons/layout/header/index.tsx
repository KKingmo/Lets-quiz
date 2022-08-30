import styled from "@emotion/styled";
import Link from "next/link";

export default function LayoutHeader() {
  return (
    <Container>
      <Wrapper>
        <ul>
          <li>
            <Link href={{ pathname: "/" }}>메인</Link>
          </li>
          <li>
            <Link href={{ pathname: "/note" }}>오답노트</Link>
          </li>
        </ul>
      </Wrapper>
    </Container>
  );
}

const Container = styled.header`
  background-color: #d4d4d466;
`;
const Wrapper = styled.div`
  display: flex;
  justify-content: center;

  ul {
    display: flex;
    max-width: 1200px;
    width: 90%;
  }

  li {
    margin-right: 1rem;
    padding: 1rem 2rem;
    font-size: 1.25rem;

    :last-of-type {
      margin-right: 0;
    }
  }

  a:hover {
    text-decoration: underline;
  }
`;
