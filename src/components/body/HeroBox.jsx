import React from "react";
import Button from "../Button";
import ButtonIcon from "../ButtonIcon";
import MyModal from "../modals/Modal";
import BoxContainer from "./BoxContainer";
import Master from "/src/images/logo-mastercraft.svg";

const HeroBox = () => {
  return (
    <BoxContainer>
      <img src={Master} alt="Logo" className="mx-auto -mt-16 mb-6" />
      <div className="text-center my-8">
        <h1 className="font-bold text-2xl">Mastercraft Bamboo Monitor Riser</h1>
        <p className="text-gray-400 ">
          A beutiful & handcrafted monitor stand to reduce neck and eye strain
        </p>
      </div>
      <div className="flex justify-center space-x-2 md:space-x-0 md:justify-between">
        <MyModal
          titulo="Back This Project"
          description="Want to support us in bringing Mastercraft Bamboo Monitor Riser Out to the world ?"
        ></MyModal>
        <ButtonIcon text="Bookmark" />
      </div>
    </BoxContainer>
  );
};

export default HeroBox;
