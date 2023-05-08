import { render, fireEvent, screen } from "@testing-library/react";
import Button from "components/Button";

const mockOnClick = jest.fn();
describe("Button", () => {
    test("it renders correctly with props", () => {
        render(
            <Button icon={<span data-testid="test-btn">Icon</span>} text="Click me" onClick={mockOnClick} />
        );

        expect(screen.getByTestId("test-btn")).toBeInTheDocument();
    });
    test("it renders button text", () => {
        render(
            <Button icon={<span data-testid="test-btn">Icon</span>} text="Click me" onClick={mockOnClick} />
        );
        expect(screen.getByText("Click me")).toBeInTheDocument();
    });
    test("it fires onClick event", () => {
        render(
            <Button icon={<span data-testid="test-btn">Icon</span>} text="Click me" onClick={mockOnClick} />
        );

        fireEvent.click(screen.getByTestId("test-btn"));
        expect(mockOnClick).toHaveBeenCalled();
    });
});