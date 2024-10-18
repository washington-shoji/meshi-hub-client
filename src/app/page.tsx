import Image from "next/image";
import FoodCard from "./components/FoodCard";
import { console } from "inspector";

async function getData() {
  const res = await fetch("https://dummyjson.com/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  console.log("res", res);

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const cardArray = [1, 2, 3, 4, 5, 6, 7, 8, 9];

  const data: any = await getData();

  return (
    <div>
      <main className="flex flex-col gap-4">
        <div className="grid grid-cols-[repeat(auto-fit,_minmax(450px,_1fr))] justify-center gap-16 p-16">
          {cardArray.map((c, i) => {
            return <FoodCard key={i} />;
          })}
        </div>
      </main>
    </div>
  );
}
