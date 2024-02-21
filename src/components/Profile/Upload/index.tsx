import React, { useState } from "react";
import * as _ from "./style";
import axios from "axios";

export default function ProfileUpload() {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);
  const [previewImage, setPreviewImage] = useState<string | ArrayBuffer | null>(
    null
  );

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];

    if (file) {
      setSelectedFile(file);

      // 이미지 미리보기 생성
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreviewImage(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUpload = () => {
    if (!selectedFile) {
      console.error("이미지를 선택하세요.");
      return;
    }

    const formData = new FormData();
    formData.append("profileImage", selectedFile);

    axios
      .post("http://localhost:9901/api/profile/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data", // 멀티파트 폼 데이터로 전송
        },
      })
      .then((res) => {
        console.log(res);
        window.location.replace("/"); // 프로필 업로드 성공 시 리다이렉션 경로를 변경
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <_.ProfileUploadWrapper>
      <_.ProfileUploadContainer>
        <_.ProfileUploadTitle>프로필 업로드</_.ProfileUploadTitle>
        <_.ProfileNameInput
          type="text"
          placeholder={localStorage.getItem("id") || "아이디를 입력하세요"}
          name="id"
        />
        <_.ProfileUploadInput
          type="file"
          onChange={handleFileChange}
          name="profileImage"
        />
        {previewImage && typeof previewImage === "string" && (
          <img
            src={previewImage}
            alt="프로필 미리보기"
            style={{ maxWidth: "100px" }} // 미리보기 이미지의 최대 너비 설정
          />
        )}
        <_.ProfileUploadButton onClick={handleUpload}>
          업로드
        </_.ProfileUploadButton>
      </_.ProfileUploadContainer>
    </_.ProfileUploadWrapper>
  );
}
