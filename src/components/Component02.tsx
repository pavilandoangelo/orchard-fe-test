import BaseContainer from './containers/BaseContainer';

const Component02 = () => {
    const data = [
        {
            imgFolder: 'component-02',
            imgSrcSets: ['Image-01.jpg', 'Image-01@2x.jpg'],
            title: 'Summer Lunch Menu By Mark Best',
            description: `AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.`
        }
    ];

    return (
        <BaseContainer className="flex flex-col w-full gap-8 md:gap-16">
            <h1 className="text-white uppercase text-xl md:text-5xl font-thin text-center">
                All the Latest from AEG
            </h1>
            <div className="grid grid-cols-3 gap-6">
                <div className="flex flex-col gap-4 justify-start items-start">
                    <div className="border-b-4 border-highlight-red">
                        <picture>
                            <source
                                media="(max-width: 320px)"
                                srcSet="/images/component-02/Image-01.jpg"
                            />
                            <img
                                src="/images/component-02/Image-01@2x.jpg"
                                alt="Component 02 - Image 01"
                            />
                        </picture>
                    </div>
                    <div className="flex flex-col gap-2">
                        <h3 className="text-white">
                            Summer Launch Menu By Mark Best
                        </h3>
                        <p className="text-description">
                            AEG ambassador Mark Best's summer eats are
                            guaranteed to help you make the most of the warmer
                            weather and entertaining at home.
                        </p>
                    </div>
                    <a
                        href="#"
                        className="uppercase text-white underline underline-offset-8 decoration-highlight-red"
                    >
                        Read More
                    </a>
                </div>

                <h1>Hi</h1>
                <h1>Hi</h1>
            </div>
        </BaseContainer>
    );
};

export default Component02;
