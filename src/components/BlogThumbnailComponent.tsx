import { TBlogThumbnailProps } from '@/app/types';
import { FC } from 'react';

const BlogThumbnailComponent: FC<TBlogThumbnailProps> = (props) => {
    const { imgFolder, imgSrcSets, title, description, slug } = props;

    return (
        <div className="flex flex-col gap-4 md:gap-8 justify-start items-start">
            <div className="border-b-4 border-highlight-red">
                <picture>
                    <source
                        media="(max-width: 320px)"
                        srcSet={`/images/${imgFolder}/${imgSrcSets[0]}`}
                    />
                    <img
                        src={`/images/${imgFolder}/${imgSrcSets[1]}`}
                        alt={`${imgFolder} - ${imgSrcSets[0]}`}
                    />
                </picture>
            </div>
            <div className="flex flex-col gap-2">
                <h3 className="text-white text-lg">{title}</h3>
                <p className="text-description text-base font-light">
                    {description}
                </p>
            </div>
            <a
                href={slug}
                className="uppercase text-white underline underline-offset-12 decoration-highlight-red tracking-wider"
            >
                Read More
            </a>
        </div>
    );
};

export default BlogThumbnailComponent;
