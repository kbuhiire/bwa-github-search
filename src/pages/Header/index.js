import { FiMoon, FiSun } from "react-icons/fi";
import {func, string} from 'prop-types'
import { AiOutlineGithub } from "react-icons/ai";
import {useTranslation} from "react-i18next";

import Button from "components/Button";
import Search from "pages/Search";
import {StyledHeader, HeaderWrapper, StyledLogo} from "./styled";

const icon = <FiMoon size={18} />;
const sunIcon = <FiSun size={18} />

const Header = ({ theme, toggleTheme}) => {
    const { t } = useTranslation();

    return (
        <StyledHeader>
            <HeaderWrapper>
                <StyledLogo aria-label={t('home.logo')}>
                    <AiOutlineGithub size={40} />
                </StyledLogo>
                <Search />
                <Button
                    icon={theme === 'dark' ? sunIcon: icon}
                    aria-label={theme === 'dark' ? t('header.lightMode') : t('header.darkMode')}
                    text={theme === 'dark' ? t('header.lightMode') : t('header.darkMode')}
                    onClick={toggleTheme}
                />
            </HeaderWrapper>
        </StyledHeader>
    );
};

Header.propTypes = {
    toggleTheme: func.isRequired,
    theme: string.isRequired
}

export default Header;
