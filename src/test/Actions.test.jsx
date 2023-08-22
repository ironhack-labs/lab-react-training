import { render, screen } from "@testing-library/react";
import { describe, expect, test } from "vitest";
import Actions from "../components/Actions";

describe("Actions component", () => {
  test("renders all action icons", () => {
    render(<Actions />);

    const commentIcon = screen.getByTestId("comment-icon");
    const retweetIcon = screen.getByTestId("retweet-icon");
    const likeIcon = screen.getByTestId("heart-icon");
    const shareIcon = screen.getByTestId("share-icon");

    expect(commentIcon).toBeInTheDocument();
    expect(commentIcon).toHaveClass("fa-comment");
    expect(retweetIcon).toBeInTheDocument();
    expect(retweetIcon).toHaveClass("fa-retweet");
    expect(likeIcon).toBeInTheDocument();
    expect(likeIcon).toHaveClass("fa-heart");
    expect(shareIcon).toBeInTheDocument();
    expect(shareIcon).toHaveClass("fa-share");
  });
});
