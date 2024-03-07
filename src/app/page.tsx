import Component01 from '@/components/Component01';
import Component02 from '@/components/Component02';

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-4 md:p-24">
            <section className="container m-auto flex flex-col gap-16">
                <Component01 />
                <Component02 />
            </section>
        </main>
    );
}
