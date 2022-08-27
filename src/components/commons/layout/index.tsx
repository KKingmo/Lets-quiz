import { ReactNode } from "react";
import LayoutHeader from "./header";
import styled from "@emotion/styled";

interface LayoutProps {
  children: ReactNode;
}

const Main = styled.main`
  min-height: 100vh;
`;

export default function Layout(props: LayoutProps) {
  return (
    <>
      <LayoutHeader />
      <Main>{props.children}</Main>
    </>
  );
}
