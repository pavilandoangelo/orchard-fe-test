import classNames from 'classnames';
import { DetailedHTMLProps, FC, HTMLAttributes } from 'react';

const BaseContainer: FC<
    DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>
> = ({ children, ...rest }) => {
    return (
        <div
            className={classNames(
                'py-4 sm:py-8 lg:py-16 xl:py-20 2xl:py-28',
                rest.className
            )}
        >
            {children}
        </div>
    );
};

export default BaseContainer;
