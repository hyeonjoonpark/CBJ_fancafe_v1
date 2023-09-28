import React, { useState } from "react";
import * as _ from "./style";
import profile from "../../assets/Profile.jpg";
import Modal from "./Modal";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../hooks/useAuth";

const Header = () => {
  const [isModal, setIsModal] = useState<boolean>(false);
  const navigate = useNavigate();

  const { isLoggedIn } = useAuth();

  const handleModal = () => {
    setIsModal(!isModal);
  };

  const handleLogIn = () => {
    navigate("/login");
  };

  return (
    <_.HeaderWrapper>
      <_.HeaderContainer>
        {isLoggedIn ? (
          <_.HeaderProfileWrapper>
            <_.HeaderProfileImg src={profile} />
            <_.HeaderProfileName onClick={handleModal}>
              hyeonjoonpark 님
            </_.HeaderProfileName>
            {isModal ? <Modal /> : null}
          </_.HeaderProfileWrapper>
        ) : (
          <_.HeaderProfileWrapper>
            <_.HeaderAuthWrapper>
              <_.HeaderAuth onClick={handleLogIn}>로그인</_.HeaderAuth>
            </_.HeaderAuthWrapper>
          </_.HeaderProfileWrapper>
        )}
      </_.HeaderContainer>
    </_.HeaderWrapper>
  );
};

export default Header;
