import Pagination from "react-responsive-pagination";
import { useDispatch, useSelector } from "react-redux";
import {
    setUsersPerPage,
    setPaginationPage, fetchUsers,
} from "redux/user";
import {StyledFooter, StyledPaginationContainer, StyledSelect } from "./styled";
import {useNavigate} from "react-router-dom";

const Footer = () => {
    const {
        users: { total_count },
        perPage,
        page,
        searchTerm,
        searchText
    } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onPageChange = (pageNo) => {
        navigate({
            // pathname: `${searchTerm}/${searchText}`,
            search: `?pageNumber=${pageNo}`
        })
        dispatch(setPaginationPage({ page: pageNo }));
        if (searchText) {
            dispatch(fetchUsers({searchTerm, searchText, perPage, page: pageNo}))
        }
    };

    const onPageNumberSelect = (e) => {
        const perPage = parseInt(e.target.value, 10);
        dispatch(
            setUsersPerPage({
                perPage
            })
        );
        if (searchText) {
            dispatch(fetchUsers({searchText, searchTerm, perPage, page}));
        }
    };

    return (
        <StyledFooter>
            <StyledPaginationContainer>
                <Pagination
                    total={Math.ceil(total_count / perPage) || 1}
                    current={page}
                    onPageChange={(page) => onPageChange(page)}
                    maxWidth={20}
                />
                    <StyledSelect
                        onChange={(e) => onPageNumberSelect(e)}
                        aria-label="Select Users Per Page"
                        defaultValue={perPage}
                    >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="50">50</option>
                    </StyledSelect>
            </StyledPaginationContainer>
        </StyledFooter>
    );
};

export default Footer;
