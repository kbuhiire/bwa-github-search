import {shape, string} from 'prop-types'
import {
    Avatar,
    StyledLeftItem, StyledText,
    StyledUserGroupCard,
    StyledUserGroupCardItem, StyledUserHeader
} from "./styled";

const UserGroupCard = ({ user, searchTerm }) => {

    return (
        <StyledUserGroupCard data-testid="user-card" to={`/${searchTerm}/${user.login}`} >
            <StyledUserGroupCardItem>
                <StyledLeftItem>
                    <Avatar
                        data-testid="user-group-avatar"
                        src={user.avatar_url}
                        alt="user or group avatar"
                    />
                </StyledLeftItem>
                    <StyledUserHeader>
                        <StyledText data-testid="name">{user.name || user.login}</StyledText>
                    </StyledUserHeader>
            </StyledUserGroupCardItem>
        </StyledUserGroupCard>
    );
};

UserGroupCard.propTypes = {
    user: shape({
        name: string,
        login: string.isRequired,
        avatar_url: string.isRequired
    }),
    searchTerm: string.isRequired
}

export default UserGroupCard;
