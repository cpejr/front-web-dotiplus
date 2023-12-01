import { Header } from "../../components";
import { Outlet } from "react-router-dom";
import { Container } from "./Styles";

export default function AppLayout() {
  return (
    <Container>
      <Header />
      <Outlet />
    </Container>
  );
}
