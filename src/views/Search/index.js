import {useEffect, useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchUsers} from "redux/user";
import {useNavigate, useParams} from "react-router-dom";
import { useTranslation } from "react-i18next";
import { HiOutlineSearch } from "react-icons/hi";

import RadioField from "components/RadioField";
import {useQueryParam} from "customHooks/useQueryParam";
import Button from "components/Button";
import {
    StyledRadioGroupContainer,
    StyledRadioGroupLabel,
    StyledSearchContainer,
    StyledSearchInput,
    StyledSearchInputContainer
} from "./styled";
import {searchTerms} from "../../constants";


const icon = <HiOutlineSearch size={18} />;
const Search = () => {
    const { t } = useTranslation();
    const navigate = useNavigate()
    const params = useParams()
    const pageNumber = useQueryParam()

    const { perPage, page } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState(params.searchTerm || 'users')

    const searchTextRef = useRef(null)
    const handleSelect = (value) => {
        setSearchTerm(value)
    }

    useEffect(() => {
        if (Object.keys(params).length > 0 && params.searchTerm !== '' && params.searchText !== '') {
            dispatch(fetchUsers({searchTerm: params.searchTerm, searchText: params.searchText, perPage, page: pageNumber}))
        }
    }, [])

    const search = (e) => {
        e.preventDefault()
        const searchText = searchTextRef.current.value;
        dispatch(fetchUsers({searchText, searchTerm, perPage, page}))
        navigate({
            pathname: `${searchTerm}/${searchText}`,
            search: `?pageNumber=${page}`
        })
    }
    const { users, orgs } = searchTerms

    return (
        <form onSubmit={search}>
            <StyledSearchContainer>
                <StyledRadioGroupContainer>
                    <StyledRadioGroupLabel>{t('header.radioGroup.groupLabel')}</StyledRadioGroupLabel>
                    <RadioField
                        data-testid='users-radio-button'
                        type='radio'
                        name='searchTerm'
                        value={users.id}
                        label={t('header.radioGroup.userLabel')}
                        checked={searchTerm === 'users'}
                        onSelect={() => handleSelect('users')}
                    />
                    <RadioField
                        data-testid='orgs-radio-button'
                        type='radio'
                        name='searchTerm'
                        value={orgs.id}
                        label={t('header.radioGroup.orgLabel')}
                        checked={searchTerm === 'orgs'}
                        onSelect={() => handleSelect('orgs')}
                    />
                </StyledRadioGroupContainer>
                <StyledSearchInputContainer>
                    <label htmlFor="search-form">
                        <StyledSearchInput
                            type="search"
                            data-testid="search-input"
                            name="search-form"
                            id="search-form"
                            aria-label={t('header.search.inputText')}
                            defaultValue={params.searchText}
                            className="search-input"
                            placeholder={t('header.search.inputText')}
                            ref={searchTextRef}
                        />
                    </label>
                    <Button aria-label={t('header.search.searchBtn')} onClick={search} icon={icon} text={t('header.search.searchBtn')} />
                </StyledSearchInputContainer>
            </StyledSearchContainer>
        </form>
    );
};

export default Search;
