import SEO from "./seo";

export default function HomePage() {
  return (
    <>
      <SEO
        title="AZKAXISM-V2 | JS Nerd"
        description="Full Stack Weebs - JS Nerd"
        url="https://yourportfolio.com"
        image="/usagyuuun.jpg"
      />
      <main className="flex items-center justify-center min-h-screen">
        <div className="flex gap-4 justify-between items-center">
          <div>
            <img src="/poker-face-usagyuuun.png" alt="profile" width={600} />
          </div>
          <div className="max-w-72 md:max-w-[500px] lg:max-w-[500px]">
            <img
              src="/azkaxism-logo.png"
              alt="image"
              style={{ maxWidth: "unset" }}
            />
            <h1 className="font-montserrat font-semibold text-4xl my-4">
              FrontEnd Developer
            </h1>
            <h2 className="font-mochiy italic text-2xl">JS NERD</h2>
            <p className="font-montserrat font-medium text-xl my-4">
              I’m a frontend developer with over 3 years of experience bringing
              sleek, user-friendly web and mobile apps to life. Proficient in
              React, Next.js, and React Native, I excel at building SEO-friendly
              websites using Next.js and many modern styling frameworks for
              styling, I’m all about making things not just work, but work
              beautifully. I’ve got a strong grip on web development and mobile
              development and can jump into backend work with Node.js, GraphQL,
              and Express.js when needed. Plus, I love optimizing apps for speed
              and performance.
            </p>
            <button className="transition ease-in-out delay-100 hover:-translate-y-3 hover:scale-110 duration-100 font-montserrat font-bold border-8 border-black p-4 bg-white text-black hover:bg-cyan-400">
              MORE ABOUT ME
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
