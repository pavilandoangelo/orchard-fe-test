import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <section className="container mx-auto">
                <div className="grid grid-cols-3 gap-6">
                    <div className="h-auto relative">
                        <picture>
                            <source
                                media="(min-width: 320px)"
                                srcSet="/images/component-01/Image-01.jpg"
                            />
                            <Image
                                src="/images/component-01/Image-01@2x.jpg"
                                alt="alt text here"
                                className="object-fill"
                                fill
                            />
                        </picture>
                    </div>

                    <div className="grid grid-rows-2 grid-flow-col gap-6">
                        <div className="h-[14rem] relative">
                            <picture>
                                <source
                                    media="(min-width: 320px)"
                                    srcSet="/images/component-01/Image-02.jpg"
                                />
                                <Image
                                    src="/images/component-01/Image-02@2x.jpg"
                                    alt="alt text here"
                                    className="object-contain"
                                    fill
                                />
                            </picture>
                        </div>
                        <div className="h-[14rem] relative">
                            <picture>
                                <source
                                    media="(min-width: 320px)"
                                    srcSet="/images/component-01/Image-03.jpg"
                                />
                                <Image
                                    src="/images/component-01/Image-03@2x.jpg"
                                    alt="alt text here"
                                    className="object-contain"
                                    fill
                                />
                            </picture>
                        </div>
                    </div>
                    <div>
                        <h1 className='uppercase text-xs text-white underline underline-offset-8'>Answer Your Body's Needs</h1>
                    </div>
                </div>
            </section>
        </main>
    );
}
