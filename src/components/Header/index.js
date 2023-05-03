import Button from "components/Button";
import { FiMoon } from "react-icons/fi";
import { AiOutlineGithub } from "react-icons/ai";
import Search from "components/Search";
import { StyledHeader, HeaderWrapper } from "./styled";

const icon = <FiMoon size={18} />;
const GithubIcon = <AiOutlineGithub size={40} />;

const Header = () => {
    function onClick() {
        const themeBtn = document.querySelector(".header-btn");
        themeBtn.classList.toggle("active");
        if (themeBtn.classList.contains("active")) {
            localStorage.setItem("data-theme", "dark");
            document.documentElement.setAttribute(
                "data-theme",
                localStorage.getItem("data-theme")
            );
        } else {
            localStorage.setItem("data-theme", "light");
            document.documentElement.setAttribute(
                "data-theme",
                localStorage.getItem("data-theme")
            );
        }
    }

    return (
        <StyledHeader>
            <HeaderWrapper>
                <Button data-testid="github-icon-header" text={GithubIcon} className="logo-btn" />
                <Search />
                <Button
                    text={icon}
                    altText="Dark Mode"
                    className="header-btn"
                    onclick={onClick}
                />
            </HeaderWrapper>
        </StyledHeader>
    );
};

export default Header;
