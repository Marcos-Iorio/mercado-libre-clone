import { Fragment, useState } from "react";

import ReactImageMagnify from "react-image-magnify";

interface Pictures {
  id: string;
  url: string;
  secure_url: string;
  size: string;
  max_size: string;
  quality: "";
}

interface ImagesProps {
  pictures: Array<Pictures> | undefined;
  title: string | undefined;
}

const Images = (props: ImagesProps | undefined) => {
  const [activeImage, setActiveImage] = useState<number>(0);

  let picturesLeft = 0;

  if (props?.pictures != undefined) {
    picturesLeft = props?.pictures.length - 7;
  }

  const changePictureHandler = (index: number) => {
    setActiveImage(index);
  };

  return (
    <section className="flex flex-row h-full">
      <div className="flex flex-col h-fit sticky top-0 left-0 py-5 gap-2 basis-1/5 justify-start items-center">
        {props?.pictures?.length && (
          <Fragment>
            {props?.pictures.map((picture: Pictures, index) => {
              if (index < 7)
                return (
                  <img
                    key={index}
                    className={`${
                      activeImage == index
                        ? "border-[#3483fa] border-2"
                        : "border-black/[.24]"
                    } h-[50px] w-[50px] rounded border-solid border  cursor-pointer object-contain`}
                    src={picture.url}
                    alt="Imagen de producto"
                    width="50"
                    height="50"
                    onMouseOver={() => changePictureHandler(index)}
                  />
                );
            })}

            {props?.pictures?.length > 7 ? (
              <div
                className={`${
                  activeImage == 7
                    ? "border-[#3483fa] border-2"
                    : "border-black/[.24]"
                } rounded-md border-solid border box-border relative border-gray-200 w-[50px] h-[50px]  overflow-hidden z-3 0 flex flex-col justify-center items-center`}
                onMouseOver={() => changePictureHandler(7)}
              >
                <div className="z-20 text-center text-[22px] h-full w-full box-border overflow-hidden text-[#3483fa] font-normal font-['Proxima Nova Rg'] bg-white/[.9] flex justify-center items-center flex-nowrap">
                  <p>+ {picturesLeft}</p>
                </div>
                <img
                  className=" absolute top-0 left-0 w-[50px] h-[50px] object-contain box-border z-10 "
                  src={props?.pictures[7]?.url}
                  alt=""
                  width="50"
                  height="50"
                />
              </div>
            ) : (
              ""
            )}
          </Fragment>
        )}
      </div>
      <div className="py-10 basis-4/5 w-[410px] h-[500px] sticky top-0 left-0 max-w-[410px] max-h-[500px] max-h rounded overflow-hidden flex justify-center items-center z-40 box-border">
        <ReactImageMagnify
          {...{
            smallImage: {
              alt: `${props?.title}`,
              isFluidWidth: true,
              src:
                props?.pictures !== undefined
                  ? props?.pictures[activeImage]?.url
                  : "",
              width: 410,
              height: 500,
            },
            largeImage: {
              src:
                props?.pictures !== undefined
                  ? props?.pictures[activeImage]?.url
                  : "",
              width:
                props?.pictures !== undefined
                  ? Number(props?.pictures[activeImage]?.max_size.split("x")[0])
                  : 0,
              height:
                props?.pictures !== undefined
                  ? Number(props?.pictures[activeImage]?.max_size.split("x")[1])
                  : 0,
            },
            shouldUsePositiveSpaceLens: false,
            enlargedImageContainerDimensions: {
              width: "200%",
              height: "100%",
            },
            enlargedImagePortalId: "enlarged-image",
            enlargedImageContainerClassName:
              "overflow-hidden bg-white border-solid border border-gray-200 box-border max-w-[500px] w-full flex-center",
            enlargedImageClassName: "object-contain overflow-hidden box-border",
            fadeDurationInMs: 0,
            hoverDelayInMs: 0,
            hoverOffDelayInMs: 0,
            lensStyle: {
              cursor: "pointer",
              width: 50,
              height: 50,
            },
          }}
        />
      </div>
    </section>
  );
};

export default Images;
