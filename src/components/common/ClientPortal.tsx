import { FC, useEffect, useRef, useState } from 'react';
import { createPortal } from 'react-dom';
type ClientPortalInterface = {
    children: React.ReactNode;
    showModal?: boolean;
    handleCloseModal: () => void;
};

const ClientPortal: FC<ClientPortalInterface> = ({
    children,
    showModal,
    handleCloseModal
}) => {
    const [portalContainer, setPortalContainer] = useState<HTMLDivElement>();

    useEffect(() => {
        // Create a div element to serve as the portal container
        const div = document.createElement('div');
        document.body.appendChild(div);
        setPortalContainer(div);

        // Clean up function to remove the portal container when component unmounts
        return () => {
            if (portalContainer) {
                document.body.removeChild(portalContainer);
            }
        };
    }, []);

    useEffect(() => {
        const closeOnEscapeKey = (e: KeyboardEvent) =>
            e.key === 'Escape' ? handleCloseModal() : null;
        document.body.addEventListener('keydown', closeOnEscapeKey);

        return (): void => {
            document.body.removeEventListener('keydown', closeOnEscapeKey);
        };
    }, [handleCloseModal]);

    useEffect(() => {
        document.body.style.overflow = 'hidden';

        return (): void => {
            document.body.style.overflow = 'unset';
        };
    }, [showModal]);

    return showModal && portalContainer
        ? createPortal(children, portalContainer)
        : null;
};
export default ClientPortal;
