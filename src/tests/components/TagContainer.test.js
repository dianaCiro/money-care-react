import { render, screen } from "@testing-library/react";
import { TagListMock } from "./../mocks/TagListMock";

import TagContainer from "../../components/tagcontainer/TagContainer";
import axios from "axios";

describe("<TagContainer/>", () => {
  it("should show the list of tags", async () => {
    axios.get = jest.fn().mockResolvedValue({ data: TagListMock });
    render(<TagContainer />);
    await screen.findAllByLabelText("tag");
    expect(screen.getAllByLabelText("tag")).toHaveLength(4);
    await screen.findAllByLabelText("tag");
  });
});
