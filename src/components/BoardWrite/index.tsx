import React from "react";
import * as _ from "./style";
import Header from "../Header";

export default function BoardWrite() {
  return (
    <div>
      <_.WriteWrapper>
        <Header />

        <_.BoardUploadListWrapper>
          <_.BoardUploadForm>
            <_.BoardUploadInputContainer>
              <label htmlFor="title">제목:</label>
              <_.BoardUploadInput type="text" id="title" />
            </_.BoardUploadInputContainer>

            <_.BoardUploadInputContainer>
              <label htmlFor="content">내용:</label>
              <_.BoardInputArea id="content" />
            </_.BoardUploadInputContainer>

            <_.BoardUploadBtn type="submit">등록</_.BoardUploadBtn>
          </_.BoardUploadForm>
        </_.BoardUploadListWrapper>
      </_.WriteWrapper>
    </div>
  );
}
