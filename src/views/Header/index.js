import Button from "components/Button";
import { FiMoon } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import { func, string } from 'prop-types'
import Search from "components/Search";
import { StyledHeader, HeaderWrapper, StyledLogo } from "./styled";

const icon = <FiMoon size={18} />;
const GithubIcon = <AiOutlineGithub size={40} />;

const Header = ({ theme, toggleTheme}) => {


    return (
        <StyledHeader>
            <HeaderWrapper>
                <Button onclick={() => {}} text={GithubIcon} />
                <Search />
                <Button
                    text={icon}
                    altText="Dark Mode"
                    className="header-btn"
                    onclick={toggleTheme}
                />
            </HeaderWrapper>
        </StyledHeader>
    );
};

Header.propTypes = {
    theme: string.isRequired,
    toggleTheme: func.isRequired,
}

export default Header;
