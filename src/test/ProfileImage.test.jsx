import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import ProfileImage from "../components/ProfileImage";

describe("ProfileImage component", () => {
  const tweet = {
    user: {
      name: "Thoughts of Dog®",
      image: "https://i.imgur.com/b0EdHVV.jpg",
      handle: "dog_feelings",
    },
    timestamp: "1h ago",
    message: "the human likes to say. that i live here rent free.",
  };

  test("renders image correctly", () => {
    render(<ProfileImage image={tweet.user.image} />);
    const img = screen.getByRole("img");

    expect(img).toBeInTheDocument();
    expect(img).toHaveAttribute("src", tweet.user.image);
  });
});
