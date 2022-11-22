import { useReducer, useState } from "react";
import { TagTypes } from "../actiontypes/TagReducerTypes";
import { ModalReducer } from "./../reducers/ModalReducer";
import { ModalTypes } from "./../actiontypes/ModalTypes";

export const useTagCreation = ({ tagDispatch }) => {
  const informationSuccessModal = {
    showModal: false,
    title: "",
    message: "",
    type: "",
  };

  const [tagName, setTagName] = useState("");
  const [tagType, setTagType] = useState(null);
  const [loading, setLoading] = useState(false);

  const [modalState, modalDispatch] = useReducer(
    ModalReducer,
    informationSuccessModal
  );

  const handleTagName = (e) => {
    setTagName(e.target.value);
  };

  const handleTagType = (e) => {
    setTagType(e.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  function buildSuccessfulCreation() {
    setLoading(false);
    setTagName("");
    setTagType(null);
    const actionTagCreated = {
      type: TagTypes.contentUpdated,
      payload: `registeredTag`,
    };
    tagDispatch(actionTagCreated);
    modalDispatch({
      type: ModalTypes.modifyVisualization,
      payload: {
        showModal: true,
        message: "Tag created successfully",
        title: "successful operation",
        type: "success",
      },
    });
  }

  return [
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
  ];
};
