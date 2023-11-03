export const metedata = {
  title: "Home",
  description: "Desc",
};

export const dynamic = "force-dynamic";

export default async function Home() {
  const res = await fetch("https://dog.ceo/api/breeds/image/random");
  const data = await res.json();
  console.log(data);
  return (
    <main>
      <img src={data.message} alt="random hunde billeder" />
    </main>
  );
}
