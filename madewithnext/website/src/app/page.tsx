import { roboto_mono } from "@/fonts";

export default function Page() {
  return (
    <>
      <section className="w-full md:w-[70%] mx-auto mt-10 p-4 md:flex md:justify-between md:align-top ">
        <div className="space-y-4 max-w-md">
          <h1 className="text-5xl md:text-6xl">I am Olanrewaju Olaleru</h1>
          <p>Developer | Designer | Technical Writer</p>
          <p className={roboto_mono.className}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, autem
            mollitia fugiat itaque iusto nisi reiciendis, totam id beatae quia
            possimus delectus. Voluptates, ab nulla autem adipisci sunt omnis
            dicta!
          </p>
          <button className="bg-slate-700 text-white rounded-lg px-2 py-1 inline-flex gap-1 align-middle">
            Let's collaborate!
          </button>
        </div>
        <div className="border-2 border-blue-100 w-full h-64 md:mx-3 mt-3">
          Something cool and interactive here
        </div>
      </section>
    </>
  );
}
