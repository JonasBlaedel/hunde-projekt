import Image from "next/image";
import { notFound } from "next/navigation";

export async function generateMetadata({ params }) {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=" + params.slug);
  const data = await res.json();
  return {
    title: data.name,
    description: `Loves ${data.favouriteColor}`,
  };
}

export async function generateStaticParams() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs");
  const pages = await res.json();

  const paths = pages.map((page) => {
    return { data: page.slug };
  });

  return paths;
}

export default async function Dog({ params }) {
  const { slug } = params;
  console.log(slug);
  const res = await fetch(`https://nice-dogs.vercel.app/api/dogs?slug=${slug}`);
  if (res.status != 200) return notFound();
  const data = await res.json();
  const { name, favouriteColor, age, image } = data;

  return (
    <main>
      <h1>{name}</h1>
      <Image
        className="w-auto h-auto"
        src={image.url}
        alt="henry dog"
        width={image.width}
        height={image.height}
        priority={true}
        sizes="(max-width: 768px) 100vw,
         (max-width: 1200px) 50vw,
         50rem"
      ></Image>
      <p>Age:{age}</p>
      {favouriteColor && <p>Color: {favouriteColor}</p>} {/*her stiller vi et if-statement. Hvis favouriteColor eksitere, vis paragraf */}
      <p>Color:{favouriteColor ? favouriteColor : "Hot pink"}</p> {/*her vil "Color:" altid vises og med mindre vi har lavet en ternary operator, vil den være tom. */}
    </main>
  );
}
