import React from "react";
import DatalistInput from "react-datalist-input";
import { TagService } from "../../../services/TagService";
import "./TagEdit.css";
import "../../../css/ReactDatalist.css";
import ModalInfo from "./../../modals/ModalInfo";
import LoadingSpinner from "./../../spinner/LoadingSpinner";
import { useTagCreation } from "../../../hooks/useTagCreation";
import { TagTypeEnum } from "../../../enums/TagTypeEnum";
import { ModalTypes } from "../../../actiontypes/ModalTypes";

function TagEdit({ tagDispatch }) {
  const [
    tagName,
    tagType,
    loading,
    modalState,
    modalDispatch,
    handleTagName,
    handleTagType,
    handleSubmit,
    setLoading,
    buildSuccessfulCreation,
  ] = useTagCreation({ tagDispatch });

  const createTag = () => {
    if (tagName === "" || !tagType) {
      modalDispatch({
        type: ModalTypes.modifyVisualization,
        payload: {
          showModal: true,
          message: "You have to enter a valid tagName and tagType",
          title: "Invalid fields",
          type: "error",
        },
      });
    } else {
      const tag = {
        name: tagName,
        type: tagType,
      };
      setLoading(true);
      TagService.create(tag).then(
        () => {
          buildSuccessfulCreation();
        },
        (error) => {
          setLoading(false);
          modalDispatch({
            type: ModalTypes.modifyVisualization,
            payload: {
              showModal: true,
              message: `${error.response.data.errors}`,
              title: `${error.response.data.errors}`,
              type: "error",
            },
          });
        }
      );
    }
  };

  return (
    <>
      {loading && <LoadingSpinner />}
      <form className="tag-form" onSubmit={handleSubmit}>
        <div className="col-auto">
          <label htmlFor="tagName">
            <span>Name</span>
            <input
              type="text"
              className="form-control mb-2 mt-2"
              id="tagName"
              placeholder="Food"
              value={tagName}
              onChange={handleTagName}
              required
              min="2"
            />
          </label>
        </div>
        <div className="col-auto">
          <DatalistInput
            placeholder="Select tag type"
            label="Type"
            onSelect={handleTagType}
            items={TagTypeEnum}
            value={tagType}
          />
        </div>
        <div className="col-auto">
          <button
            type="submit"
            className="btn btn-primary mb-2 mt-4"
            onClick={createTag}
          >
            Create
          </button>
        </div>
      </form>

      {modalState.showModal && (
        <ModalInfo modalInformation={modalState} dispatch={modalDispatch} />
      )}
    </>
  );
}

export default TagEdit;
