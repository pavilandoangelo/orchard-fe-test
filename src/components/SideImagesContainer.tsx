'use client';
import { FC, useRef, useState } from 'react';
import { ImageDataProps } from './Component01';
import ImageModal from './ImageModal';

type SideImagesContainerProps = {
    imgData: ImageDataProps[];
};

const ImageContainer: FC<
    ImageDataProps & { handleImageOnClick: (imgUrl: string) => void }
> = (props) => {
    const { imgFolder, imgSrcSets, handleImageOnClick } = props;
    const imgRef = useRef<HTMLImageElement>(null);

    const handleOnClick = () => {
        if (imgRef.current) {
            handleImageOnClick(imgRef.current.srcset);
        }
    };

    return (
        <div className="cursor-pointer" onClick={() => handleOnClick()}>
            <picture>
                <source
                    media="(max-width: 320px)"
                    srcSet={`/images/${imgFolder}/${imgSrcSets?.[0]}`}
                />
                <img
                    ref={imgRef}
                    srcSet={`/images/${imgFolder}/${imgSrcSets?.[1]}`}
                    alt={`${imgFolder} - ${imgSrcSets[0]}`}
                    loading="lazy"
                    style={{ height: '100%' }}
                />
            </picture>
        </div>
    );
};

const SideImagesContainer: FC<SideImagesContainerProps> = ({ imgData }) => {
    const otherItems: JSX.Element[] = [];
    const [imgUrl, setImgUrl] = useState<string>('');

    const handleImageOnClick = (imgUrl: string) => {
        setImgUrl(imgUrl);
    };

    return (
        <>
            {imgData.map((data, k) => {
                if (k === 0) {
                    return (
                        <ImageContainer
                            key={k}
                            {...data}
                            handleImageOnClick={handleImageOnClick}
                        />
                    );
                }

                otherItems.push(
                    <ImageContainer
                        key={k}
                        {...data}
                        handleImageOnClick={handleImageOnClick}
                    />
                );

                if (k === imgData.length - 1) {
                    return (
                        <div
                            key={k}
                            className="grid grid-rows-2 grid-flow-col gap-6"
                        >
                            {otherItems.map((item) => item)}
                        </div>
                    );
                }
            })}
            <ImageModal imgUrl={imgUrl} setImgUrl={setImgUrl} />
        </>
    );
};

export default SideImagesContainer;
