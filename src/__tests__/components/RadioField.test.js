import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import RadioField from 'components/RadioField';

const onSelectMock = jest.fn();
describe('RadioField Component', () => {
    test('it should render the radio input and label when type is radio', () => {
        render(
            <RadioField type="radio" name="option" value="option1" label="Option 1" onSelect={() => {}} />
        );
        const radioInput = screen.getByLabelText('Option 1');
        const radioLabel = screen.getByText('Option 1');
        expect(radioInput).toBeInTheDocument();
        expect(radioInput).toHaveAttribute('type', 'radio');
        expect(radioInput).toHaveAttribute('name', 'option');
        expect(radioInput).toHaveAttribute('value', 'option1');
        expect(radioLabel).toBeInTheDocument();
    });
    test('it should render the input and label when type is not radio', () => {
        render(
            <RadioField type="text" name="input" value="value" label="Input Label" onSelect={() => {}} placeholder="Input Placeholder" />
        );
        const input = screen.getByLabelText('Input Label');
        const label = screen.getByText('Input Label');
        const placeholder = screen.getByPlaceholderText('Input Placeholder');
        expect(input).toBeInTheDocument();
        expect(input).toHaveAttribute('type', 'text');
        expect(input).toHaveAttribute('name', 'input');
        expect(input).toHaveAttribute('value', 'value');
        expect(label).toBeInTheDocument();
        expect(placeholder).toBeInTheDocument();
    });

    test('it should call onSelect when the input is changed', () => {
        render(
            <RadioField type="text" name="input" value="value" onSelect={onSelectMock} />
        );
        const input = screen.getByLabelText('');
        fireEvent.change(input, { target: { value: 'new value' } });
        expect(onSelectMock).toHaveBeenCalledWith(expect.any(Object));
    });

    test('it should be checked when checked prop is true', () => {
        render(
            <RadioField type="radio" name="option" value="option1" label="Option 1" onSelect={() => {}} checked />
        );
        const radioInput = screen.getByLabelText('Option 1');
        expect(radioInput).toBeChecked();
    });

    test('it should not be checked when checked prop is false', () => {
        render(
            <RadioField type="radio" name="option" value="option1" label="Option 1" onSelect={() => {}} />
        );
        const radioInput = screen.getByLabelText('Option 1');
        expect(radioInput).not.toBeChecked();
    });
});
