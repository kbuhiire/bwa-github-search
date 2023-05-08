import { AiOutlineGithub } from "react-icons/ai";
import {StyledLoader, StyledLoadingAnimation, StyledText} from "./styled";
import {string} from "prop-types";
const GithubIcon = <AiOutlineGithub size={68} />;

const Loading = ({ text }) => {
    return (
        <StyledLoader data-testid="loading">
              <StyledLoadingAnimation data-testid="github-icon">
                {GithubIcon}
              </StyledLoadingAnimation>
            <StyledText>{text}</StyledText>
        </StyledLoader>
    );
};

Loading.propTypes = {
    text: string.isRequired
}
export default Loading;
