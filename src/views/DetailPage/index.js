import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {useNavigate, useParams} from "react-router-dom";
import {FiArrowLeft} from "react-icons/fi";
import { useTranslation } from "react-i18next";
import DocumentTitle from "react-document-title";


import Loading from "components/Loading";
import {getDetails} from "redux/user";
import Button from "components/Button";
import {
    StyledContainerCard,
    StyledContainerWrapper,
    StyledLeftText,
    StyledProfileImage,
    StyledRightText,
    StyledRow,
    StyledLoadingContainer
} from "./styled";

const BackIcon = <FiArrowLeft size={15} />
const DetailPage = () => {
    const { t } = useTranslation()
    const dispatch = useDispatch();
    const params = useParams()
    const navigate = useNavigate()
    const { userDetails, isLoading } = useSelector((state) => state.user);

    const goBack = () => {
        navigate(-1)
    }
    useEffect(() => {
        const { username } = params;
        dispatch(getDetails(username))
    }, [])

    const { avatar_url, name, login, bio, public_gists, public_repos, followers, following, location} = userDetails
    return (
        <DocumentTitle title={t('detail.profile', {NAME: name||login})}>
            <StyledContainerWrapper>
                {isLoading ? (
                    <StyledLoadingContainer>
                        <Loading text={t('detail.loader.title')} />
                    </StyledLoadingContainer>
                ) : (
                    <StyledContainerCard>
                        <StyledProfileImage src={avatar_url} />
                        <StyledRow>
                            <StyledLeftText>{t('detail.name')}:</StyledLeftText>
                            <StyledRightText>{name || login}</StyledRightText>
                        </StyledRow>
                        <StyledRow>
                            <StyledLeftText>{t('detail.biography')}:</StyledLeftText>
                            <StyledRightText>{bio}</StyledRightText>
                        </StyledRow>
                        <StyledRow>
                            <StyledLeftText>{t('detail.location')}:</StyledLeftText>
                            <StyledRightText>{location}</StyledRightText>
                        </StyledRow>
                        <StyledRow>
                            <StyledLeftText>{t('detail.following')}:</StyledLeftText>
                            <StyledRightText>{following}</StyledRightText>
                        </StyledRow>
                        <StyledRow>
                            <StyledLeftText>{t('detail.followers')}:</StyledLeftText>
                            <StyledRightText>{followers}</StyledRightText>
                        </StyledRow>
                        <StyledRow>
                            <StyledLeftText>{t('detail.publicRepos')}:</StyledLeftText>
                            <StyledRightText>{public_repos}</StyledRightText>
                        </StyledRow>
                        <StyledRow>
                            <StyledLeftText>{t('detail.publicGists')}:</StyledLeftText>
                            <StyledRightText>{public_gists}</StyledRightText>
                        </StyledRow>
                        <Button aria-label={t('detail.backBtn')} icon={BackIcon} text={t('detail.backBtn')} onClick={goBack} />
                    </StyledContainerCard>
                )
                }
            </StyledContainerWrapper>
        </DocumentTitle>

        )


}

export default  DetailPage;