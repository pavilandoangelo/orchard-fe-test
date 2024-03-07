import BaseContainer from './containers/BaseContainer';

const Component02 = () => {
    const data = [
        {
            imgFolder: 'component-02',
            imgSrcSets: ['Image-01.jpg', 'Image-01@2x.jpg'],
            title: 'Summer Lunch Menu By Mark Best',
            description: `AEG ambassador Mark Best's summer eats are guaranteed to help you make the most of the warmer weather and entertaining at home.`,
            slug: 'summer-lunch-menu-by-mark-best'
        },
        {
            imgFolder: 'component-02',
            imgSrcSets: ['Image-02.jpg', 'Image-02@2x.jpg'],
            title: 'A Traditional Christmas Eve, Mark Best Style',
            description: `One of Australia's best chefs and AEG ambassador, Mark Best, shares his favourite Christmas Eve menu which is sure to impress your guests.`,
            slug: 'a-traditional-christmas-eve-mark-best-style'
        },
        {
            imgFolder: 'component-02',
            imgSrcSets: ['Image-03.jpg', 'Image-03@2x.jpg'],
            title: 'Taking Taste Further',
            description: `This exclusive cookbook gives you all the know-how you need. We've designed it to make sure you get the most of our products - and the best out of your food.`,
            slug: 'taking-taste-further'
        }
    ];

    return (
        <BaseContainer className="flex flex-col w-full gap-8 md:gap-16">
            <h1 className="text-white uppercase text-xl md:text-5xl font-thin text-center">
                All the Latest from AEG
            </h1>
            <div className="grid grid-cols-3 gap-6">
                {data.map((d, k) => (
                    <div
                        key={k}
                        className="flex flex-col gap-4 md:gap-8 justify-start items-start"
                    >
                        <div className="border-b-4 border-highlight-red">
                            <picture>
                                <source
                                    media="(max-width: 320px)"
                                    srcSet={`/images/${d.imgFolder}/${d.imgSrcSets[0]}`}
                                />
                                <img
                                    src={`/images/${d.imgFolder}/${d.imgSrcSets[1]}`}
                                    alt={`${d.imgFolder} - ${d.imgSrcSets[0]}`}
                                />
                            </picture>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h3 className="text-white text-lg">{d.title}</h3>
                            <p className="text-description text-base font-light">
                                {d.description}
                            </p>
                        </div>
                        <a
                            href={d.slug}
                            className="uppercase text-white underline underline-offset-12 decoration-highlight-red tracking-wider"
                        >
                            Read More
                        </a>
                    </div>
                ))}
            </div>
        </BaseContainer>
    );
};

export default Component02;
