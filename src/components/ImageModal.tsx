import { FC, useEffect, useRef, useState } from 'react';
import ClientPortal from './common/ClientPortal';
import Image from 'next/image';
import { FiXCircle } from 'react-icons/fi';

type ImageModalProps = {
    imgUrl: string;
    setImgUrl: (imgUrl: string) => void;
};

const ImageModal: FC<ImageModalProps> = (props) => {
    const { imgUrl, setImgUrl } = props;
    const [showModal, setShowModal] = useState<boolean>(false);

    useEffect(() => {
        setShowModal(imgUrl ? true : false);
    }, [imgUrl]);

    const handleCloseModal = () => {
        setImgUrl('');
        setShowModal(false);
    };

    console.log('showModal >>> ', showModal);

    return (
        <ClientPortal showModal={showModal} handleCloseModal={handleCloseModal}>
            <div className="fixed top-0 left-0 w-screen h-screen z-40 bg-dark-slate-gray opacity-80 transition-opacity duration-300 ease-in-out"></div>
            <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 rounded flex flex-col box-border max-w-max overflow-hidden z-50 p-4 transition-opacity duration-300 ease-in-out">
                <button
                    className="absolute top-0 right-0 z-50 cursor-pointer"
                    onClick={handleCloseModal}
                >
                    <FiXCircle size={32} />
                </button>
                <img src={imgUrl} alt={imgUrl} width={'auto'} height={'auto'} />
            </div>
        </ClientPortal>
    );
};

export default ImageModal;
