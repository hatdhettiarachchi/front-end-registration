import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import Registration1 from "./Registration1";

describe("Registration1 component", () => {
  it("renders username input field correctly", () => {
    render(<Registration1 />);
    const usernameInput = screen.getByPlaceholderText("Enter your username");
    expect(usernameInput).toBeInTheDocument();
  });

  it("allows user to type in username field", () => {
    render(<Registration1 />);
    const usernameInput = screen.getByPlaceholderText("Enter your username");
    fireEvent.change(usernameInput, { target: { value: "test@example.com" } });
    expect(usernameInput.value).toBe("test@example.com");
  });

  it("renders password input field correctly", () => {
    render(<Registration1 />);
    const passwordInput = screen.getByPlaceholderText("Create your password");
    expect(passwordInput).toBeInTheDocument();
  });

  it("allows user to type in password field", () => {
    render(<Registration1 />);
    const passwordInput = screen.getByPlaceholderText("Create your password");
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    expect(passwordInput.value).toBe("testpassword");
  });

  it("submits the form with valid data", async () => {
    render(<Registration1 />);
    const usernameInput = screen.getByPlaceholderText("Enter your username");
    const passwordInput = screen.getByPlaceholderText("Create your password");
    const checkbox = screen.getByLabelText("Check me out!");
    const submitButton = screen.getByText("Get Started");

    fireEvent.change(usernameInput, { target: { value: "test@example.com" } });
    fireEvent.change(passwordInput, { target: { value: "testpassword" } });
    fireEvent.click(checkbox);
    fireEvent.click(submitButton);

    // Here you can add assertions for modal showing up or any other side effect of successful form submission
  });
});
