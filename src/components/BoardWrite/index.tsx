import React, { ChangeEvent, FormEvent, useState } from "react";
import * as _ from "./style";
import Header from "../Header";
import axiosInstance from "../../axios";
import axios from "axios";

export default function BoardWrite() {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const id = localStorage.getItem("id");

  const hadleTitleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setTitle(e.target.value);
  };

  const handleContentChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setContent(e.target.value);
  };

  const handleBoardSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("글 등록하기");

    // try {
    const response = await axios
      .post("http://localhost:9901/api/board/upload", {
        title: title,
        content: content,
        writerId: id,
      })
      .then((res) => {
        console.log(res);
        window.location.replace("/board");
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <_.WriteWrapper>
        <Header />

        <_.BoardUploadListWrapper>
          <_.BoardUploadForm onSubmit={handleBoardSubmit}>
            <_.BoardUploadInputContainer>
              <label htmlFor="title" style={{ width: "70px" }}>
                제목:
              </label>
              <_.BoardUploadInput
                type="text"
                id="title"
                value={title}
                onChange={hadleTitleChange}
              />
            </_.BoardUploadInputContainer>

            <_.BoardUploadInputContainer>
              <label htmlFor="content" style={{ width: "70px" }}>
                내용:
              </label>
              <_.BoardInputArea
                id="content"
                value={content}
                onChange={handleContentChange}
              />
            </_.BoardUploadInputContainer>

            <_.BoardUploadBtn type="submit">등록하기</_.BoardUploadBtn>
          </_.BoardUploadForm>
        </_.BoardUploadListWrapper>
      </_.WriteWrapper>
    </div>
  );
}
