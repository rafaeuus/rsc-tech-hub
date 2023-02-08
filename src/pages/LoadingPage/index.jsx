import LoadingDots from "../../components/LoadingDots";
import { StyledLoadingPage } from "./style";
import Logo from "../../components/Logo";

const LoadingPage = () => {
  return (
    <StyledLoadingPage>
      <div>
        <Logo />

        <LoadingDots />
      </div>
    </StyledLoadingPage>
  );
};

export default LoadingPage;
