import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom'

import UserGroupCard from 'components/UserGroupCard';

const mockUser = {
    name: 'John Doe',
    login: 'johndoe',
    avatar_url: 'https://example.com/avatar.png',
};

const mockSearchTerm = 'search';

const TestUserGroupCard = (props) => {
    return (<BrowserRouter><UserGroupCard {...props} /></BrowserRouter>)
}
describe('UserGroupCard', () => {
    test('it renders the user name or login', () => {
        render(<TestUserGroupCard user={mockUser} searchTerm={mockSearchTerm} />);

        const nameElement = screen.getByTestId('name');
        expect(nameElement).toHaveTextContent('John Doe');
    });

    test('it renders the user avatar', () => {
        render(<TestUserGroupCard user={mockUser} searchTerm={mockSearchTerm} />);

        const avatarElement = screen.getByTestId('user-group-avatar');
        expect(avatarElement).toHaveAttribute('src', 'https://example.com/avatar.png');
    });

    test('it navigates to the correct URL', () => {
        render(<TestUserGroupCard user={mockUser} searchTerm={mockSearchTerm} />);

        const cardElement = screen.getByTestId('user-card');
        expect(cardElement).toHaveAttribute('href', '/search/johndoe');
    });
});
