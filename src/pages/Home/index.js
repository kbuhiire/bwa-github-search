import { useSelector } from "react-redux";
import { AiOutlineGithub } from 'react-icons/ai'
import {func, string} from "prop-types";
import {useTranslation} from "react-i18next";
import DocumentTitle from "react-document-title"

import UserGroupCard from "components/UserGroupCard";
import Loading from "components/Loading";
import Header from "pages/Header";
import Footer from "pages/Footer";
import {
    StyledLoadingContainer,
    StyledNoContentCard,
    StyledUserGroupCardContainer,
    StyledUserGroupContainer
} from "./styled";


const GithubIcon = <AiOutlineGithub size={68} />

const Home = ({ theme, toggleTheme }) => {
    const { t } = useTranslation();
    const { users, isLoading, searchTerm } = useSelector((state) => state.user);
    const USER_OR_ORG = searchTerm === 'orgs' ? 'Organizations': 'Users'
    return (
        <DocumentTitle title={t('home.title')}>
            <>
            <Header theme={theme} toggleTheme={toggleTheme} />
            <StyledUserGroupContainer data-testid="home">
                {isLoading ? (
                    <StyledLoadingContainer>
                        <Loading text={t('home.loader.title', { USER_OR_ORG })} />
                    </StyledLoadingContainer>
                ) : users.items && users.items.length !== 0 ? (
                    <StyledUserGroupCardContainer>
                        {users.items.map((user, index) => {
                            return <UserGroupCard user={user} key={index} searchTerm={searchTerm} />;
                        })}
                    </StyledUserGroupCardContainer>
                ) : (
                    <StyledNoContentCard>
          <span data-testid="github-icon-nousers">
               {GithubIcon}
           </span>
                        <span>{t('home.noData', {USER_OR_ORG})}</span>
                    </StyledNoContentCard>
                )}
            </StyledUserGroupContainer>
            <Footer />
        </>
        </DocumentTitle>
    );
};

Home.propTypes = {
    toggleTheme: func.isRequired,
    theme: string.isRequired
}
export default Home;
