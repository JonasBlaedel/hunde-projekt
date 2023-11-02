export async function generateMetadata() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  return {
    title: data.name,
    description: `Loves ${data.favouriteColor}`,
  };
}

export default async function Henry() {
  const res = await fetch("https://nice-dogs.vercel.app/api/dogs?slug=henry");
  const data = await res.json();
  const { name, favouriteColor, age, image } = data;
  console.log(data);
  return (
    <main>
      <h1>{name}</h1>
      <p>{favouriteColor}</p>
      <img src={image.url} alt="" />
    </main>
  );
}
