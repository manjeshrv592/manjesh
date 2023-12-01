import Header from '@/components/Header';
import { Button } from '@/components/ui/button';

const page = () => {
  return (
    <>
      <Header />
      <main>
        <section className='flex min-h-screen justify-center'>
          <div className='pt-40 text-center xl:pt-56'>
            <div className='mb-2 flex justify-center gap-5 text-mj-grey-400'>
              <span>Next.js</span>
              <span>|</span>
              <span>Strapi</span>
            </div>
            <h1 className='h1 mb-3 flex flex-col gap-1 sm:flex-row sm:gap-3'>
              <span className='gradient-primary bg-clip-text text-transparent'>
                Web
              </span>
              <span className='gradient-primary bg-clip-text text-transparent'>
                Developer
              </span>
            </h1>
            <p className='mb-12 text-xl md:text-2xl'>
              Crafting Digital Experiences
            </p>
            <div className='flex flex-col items-center justify-center gap-4 md:flex-row md:gap-8'>
              <Button className='btn btn-outline btn-outline-secondary'>
                My Projects
              </Button>
              <Button className='btn btn-primary btn-pseudo'>Contact Me</Button>
            </div>
          </div>
        </section>
      </main>
    </>
  );
};

export default page;
