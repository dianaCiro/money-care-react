import React, { useEffect, useReducer, useState } from "react";
import TagEdit from "../tagedit/TagEdit";
import TagList from "../taglist/TagList";
import { TagService } from "./../../services/TagService";
import { TagReducer } from "./../../reducers/TagReducer";

const TagContainer = () => {
  const tagInitialState = {
    triggeredAction: "initialization",
  };

  const [tags, setTags] = useState([]);
  const [state, dispatch] = useReducer(TagReducer, tagInitialState);

  const getTags = () => {
    TagService.getTags().then(
      (response) => {
        setTags(response.data);
      },
      (error) => {}
    );
  };

  useEffect(() => {
    getTags();
  }, [state]);

  return (
    <div className="container tag-container">
      <TagEdit tagDispatch={dispatch}></TagEdit>
      <TagList tags={tags}></TagList>
    </div>
  );
};

export default TagContainer;
