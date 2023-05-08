import React from 'react';
import { render, screen } from '@testing-library/react';
import Loading from 'components/Loading';

describe('Loading component', () => {
    test('it renders correctly', () => {
        render(<Loading />);
        const loadingElement = screen.getByTestId('loading');
        const githubIconElement = screen.getByTestId('github-icon');
        expect(loadingElement).toBeInTheDocument();
        expect(githubIconElement).toBeInTheDocument();
    });

    test('it displays the Github icon', () => {
        render(<Loading />);
        const githubIconElement = screen.getByTestId('github-icon');
        expect(githubIconElement).toContainHTML('<svg');
    });
});
