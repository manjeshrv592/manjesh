import { Button } from '@/components/ui/button';

const page = () => {
  return (
    <section className='flex min-h-screen justify-center'>
      <div className='pt-48 text-center'>
        <h1 className='h1 gradient-primary mb-3 bg-clip-text text-transparent'>
          Next JS Developer
        </h1>
        <p className='mb-12 text-2xl'>Crafting Digital Experiences</p>
        <div className='flex justify-center gap-8'>
          <Button className='btn btn-outline btn-outline-secondary'>
            My Projects
          </Button>
          <Button className='btn btn-primary'>Contact Me</Button>
        </div>
      </div>
    </section>
  );
};

export default page;
