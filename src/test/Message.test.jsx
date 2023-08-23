import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Message from "../components/Message";

describe("Message component", () => {
  // const tweet = {
  //   user: {
  //     name: "Thoughts of Dog®",
  //     image: "https://i.imgur.com/b0EdHVV.jpg",
  //     handle: "dog_feelings",
  //   },
  //   timestamp: "1h ago",
  //   message: "the human likes to say. that i live here rent free.",
  // };

  test("renders message correctly", () => {
    render(
      <Message message="the human likes to say. that i live here rent free." />
    );
    const message = screen.getByText(/the human likes to say./);

    expect(message).toBeInTheDocument();
  });
});
