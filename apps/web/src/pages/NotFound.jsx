export default function NotFound() {
  return (
    <div className='w-full h-screen flex flex-col justify-center md:justify-end items-center bg-[url("/img/asserts/ghost.gif")] bg-no-repeat bg-black'>
      <div className="text-center tracking-tight p-2">
        <h1 className="text-8xl font-semibold">404</h1>
        <h2 className="text-5xl font-semibold">Page Not Found</h2>
        <p className="text-xl mt-2">
          The page you are looking for dosent exist
        </p>
      </div>
    </div>
  );
}
