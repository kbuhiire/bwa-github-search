import {useEffect, useRef, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import RadioField from "components/RadioField";
import {fetchUsers} from "redux/user";
import {StyledRadioGroupContainer, StyledRadioGroupLabel, StyledSearchContainer, StyledSearchInput} from "./styled";
import {searchTerms} from "../../constants";
import {useNavigate, useParams} from "react-router-dom";
import {useQueryParam} from "customHooks/useQueryParam";

const Search = () => {
    const navigate = useNavigate()
    const params = useParams()
    const pageNumber = useQueryParam()

    const { perPage, page } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const [searchTerm, setSearchTerm] = useState(params.searchType)

    const searchTextRef = useRef(null)
    const handleSelect = (value) => {
        setSearchTerm(value)
    }

    useEffect(() => {
        console.log('It is running', params)
        if (params.searchType !== '' && params.searchText !== '') {
            dispatch(fetchUsers({searchTerm: params.searchType, searchText: params.searchText, perPage, page: pageNumber}))
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
                    <StyledRadioGroupLabel>Select Groups or Users</StyledRadioGroupLabel>
                    <RadioField
                        data-testid='users-radio-button'
                        type='radio'
                        name='searchTerm'
                        value={users.id}
                        label={users.label}
                        checked={searchTerm === 'users'}
                        onSelect={() => handleSelect('users')}
                    />
                    <RadioField
                        data-testid='orgs-radio-button'
                        type='radio'
                        name='searchTerm'
                        value={orgs.id}
                        label={orgs.label}
                        checked={searchTerm === 'orgs'}
                        onSelect={() => handleSelect('orgs')}
                    />
                </StyledRadioGroupContainer>

                <label htmlFor="search-form">
                    <StyledSearchInput
                        type="search"
                        data-testid="search-input"
                        name="search-form"
                        id="search-form"
                        defaultValue={params.searchText}
                        className="search-input"
                        placeholder="Search Github Users or Groups"
                        ref={searchTextRef}
                    />
                </label>
            </StyledSearchContainer>
            <div className="marginBtm"></div>
        </form>
    );
};

export default Search;
