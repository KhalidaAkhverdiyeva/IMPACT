"use client";
import React, { useState } from "react";
import { imagesBlue } from "@/static/ImagesData";
import ToasterTextContent from "./toasterTextContent";
import ToasterPlusButtons from "./toasterButtons";
import ToasterModal from "./toasterInfo";
import ToasterWebInfo from "./toasterWebInfo";
import Image from "next/image";
import { ModalInfo } from "@/types";

const ToasterSection = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [modalInfo, setModalInfo] = useState<ModalInfo | null>(null);
  const [isWebModal, setIsWebModal] = useState(false);
  const [top, setTop] = useState("0px");
  const [left, setLeft] = useState("0px");

  const toggleBottomDiv = (info: ModalInfo, buttonId: string) => {
    setModalInfo(info);
    setIsOpen((prev) => !prev);

    const isSmallScreen = window.innerWidth < 1024;
    setIsWebModal(!isSmallScreen);

    if (buttonId === "button1") {
      setTop("25%");
      setLeft("65%");
    } else if (buttonId === "button2") {
      setTop("50%");
      setLeft("38%");
    }

    if (!isOpen) {
      if (isSmallScreen) {
        document.body.style.overflow = "hidden";
      }
    } else {
      closeBottomDiv();
    }
  };

  const closeBottomDiv = () => {
    setIsClosing(true);
    setTimeout(() => {
      setIsOpen(false);
      setIsClosing(false);
      document.body.style.overflow = "auto";
    }, 300);
  };
  return (
    <div className="py-[50px]">
      <div className="relative">
        <ToasterTextContent />
        <div className="relative">
          {imagesBlue.map((image, index) => (
            <picture key={index} className="w-full">
              <source media="(min-width: 640px)" srcSet={image.tabletSrc} />
              <source media="(min-width: 1024px)" srcSet={image.srcSet} />
              <Image
                src={image.mobileSrc} // Dynamic source from `image.mobileSrc`
                alt="lamp img" // Static alt text or dynamic if needed
                width={800} // Set the width of the image based on your layout
                height={533} // Adjust the height according to the aspect ratio
                className="object-cover w-full h-full"
              />
            </picture>
          ))}

          <ToasterPlusButtons toggleBottomDiv={toggleBottomDiv} />
          {isOpen && (
            <>
              {isWebModal ? (
                <ToasterWebInfo
                  closeBottomDiv={closeBottomDiv}
                  isClosing={isClosing}
                  modalInfo={modalInfo}
                  top={top}
                  left={left}
                />
              ) : (
                <ToasterModal
                  closeBottomDiv={closeBottomDiv}
                  isClosing={isClosing}
                  modalInfo={modalInfo}
                />
              )}
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ToasterSection;
