export default function Error() {
  return (
    <div className='w-full h-screen flex flex-col justify-center md:justify-end items-center bg-[url("img/asserts/ghost.gif")] bg-no-repeat bg-black'>
      <div className='text-center tracking-tight p-2'>
        <h1 className='text-8xl font-semibold'>500</h1>
        <h2 className='text-5xl font-semibold'>Internal Error</h2>
        <p className='text-xl mt-2'>
          There seems to be some kind of exception occured at our side
        </p>
      </div>
    </div>
  );
}
