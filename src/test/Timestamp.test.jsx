import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Timestamp from "../components/Timestamp";

describe("Timestamp component", () => {
  // const tweet = {
  //   user: {
  //     name: "Thoughts of Dog®",
  //     image: "https://i.imgur.com/b0EdHVV.jpg",
  //     handle: "dog_feelings",
  //   },
  //   timestamp: "1h ago",
  //   message: "the human likes to say. that i live here rent free.",
  // };

  test("renders timestamp correctly", () => {
    render(<Timestamp time="1h ago" />);
    const timestamp = screen.getByText("1h ago");

    expect(timestamp).toBeInTheDocument();
  });
});
