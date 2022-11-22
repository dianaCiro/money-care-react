import { render, screen } from "@testing-library/react";
import { TagListMock } from "./../mocks/TagListMock";

import axios from "axios";
import TagContainer from "../../components/tag/tagcontainer/TagContainer";

describe("<TagContainer/>", () => {
  it("should show the list of tags", async () => {
    axios.get = jest.fn().mockResolvedValue({ data: TagListMock });
    render(<TagContainer />);
    await screen.findAllByLabelText("tag");
    expect(screen.getAllByLabelText("tag")).toHaveLength(4);
    await screen.findAllByLabelText("tag");
  });
});
