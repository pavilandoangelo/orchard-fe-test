import { TBlogThumbnailProps } from '@/app/types';
import BaseContainer from './containers/BaseContainer';
import BlogThumbnailComponent from './BlogThumbnailComponent';

const Component02 = () => {
    const data: TBlogThumbnailProps[] = [
        {
            imgFolder: 'component-02',
            imgSrcSets: ['Image-01.jpg', 'Image-01@2x.jpg'],
            title: 'Summer Lunch Menu By Mark Best',
            description: `AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.`,
            slug: ''
        },
        {
            imgFolder: 'component-02',
            imgSrcSets: ['Image-02.jpg', 'Image-02@2x.jpg'],
            title: 'A Traditional Christmas Eve, Mark Best Style',
            description: `One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.`,
            slug: ''
        },
        {
            imgFolder: 'component-02',
            imgSrcSets: ['Image-03.jpg', 'Image-03@2x.jpg'],
            title: 'Taking Taste Further',
            description: `This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most of our products - and the best out of your food.`,
            slug: ''
        }
    ];

    return (
        <BaseContainer className="flex flex-col w-full gap-8 md:gap-12 lg:gap-16">
            <h1 className="text-white uppercase text-xl md:text-3xl lg:text-5xl font-thin text-center">
                All the Latest from AEG
            </h1>
            <div className="grid grid-flow-row-dense md:grid-cols-2 lg:grid-cols-3 gap-16 md:gap-14">
                {data.map((d, k) => (
                    <BlogThumbnailComponent key={k} {...d} />
                ))}
            </div>
        </BaseContainer>
    );
};

export default Component02;
