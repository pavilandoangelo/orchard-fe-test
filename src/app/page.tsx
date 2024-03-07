import Image from 'next/image';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <section className="container mx-auto">
                <div className="grid grid-cols-3 gap-6 py-4 sm:py-8 lg:py-16 xl:py-20 2xl:py-24">
                    <div className="">
                        <picture>
                            <source
                                media="(max-width: 320px)"
                                srcSet="/images/component-01/Image-01.jpg"
                            />
                            <img
                                src="/images/component-01/Image-01@2x.jpg"
                                alt="Image 01"
                            />
                        </picture>
                    </div>

                    <div className="grid grid-rows-2 grid-flow-col gap-6">
                        <div className="">
                            <picture>
                                <source
                                    media="(max-width: 320px)"
                                    srcSet="/images/component-01/Image-02.jpg"
                                />
                                <img
                                    src="/images/component-01/Image-02@2x.jpg"
                                    alt="Image 02"
                                />
                            </picture>
                        </div>
                        <div className="">
                            <picture>
                                <source
                                    media="(max-width: 320px)"
                                    srcSet="/images/component-01/Image-03.jpg"
                                />
                                <img
                                    src="/images/component-01/Image-03@2x.jpg"
                                    alt="Image 02"
                                />
                            </picture>
                        </div>
                    </div>
                    <div>
                        <h1 className="uppercase text-lg md:text-2xl text-white underline underline-offset-16 font-thin">
                            Answer Your Body's Needs
                        </h1>
                        <p className="text-base md:text-lg text-white font-thin leading-6 mt-4 md:mt-8">
                            The way ingredients are sourced affects the way we
                            nourish our bodies. Author Mark Schatzer believes
                            our body naturally devolops an appetite for the
                            foods and nutrients it needs to be healthy, but that
                            artificial flavourings are getting in the way. This
                            can be reversed by focusing on high-quality
                            ingredients and being mindful as your appetite
                            guides you to consume according to your body's
                            needs.
                        </p>
                        <h2 className="mt-5 md:mt-10 uppercase text-highlight-red text-base">
                            Be Mindful
                        </h2>
                        <p className="mt-4 text-white font-semibold text-base md:text-lg leading-6">
                            Sourcing local or organic food is a good way to
                            start being more mindful about what you're cooking
                            and eating
                        </p>
                    </div>
                </div>
            </section>
        </main>
    );
}
