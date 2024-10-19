export interface FoodPlaceAllInfo {
  food_place_id: string;
  food_place_name: string;
  food_place_description: string;
  food_place_address: string;
  food_place_latitude: number;
  food_place_longitude: number;
  video_link: string;
  video_likes: number;
  user_likes: number;
}

export async function getFoodPlaceAllInfo(): Promise<
  FoodPlaceAllInfo[] | undefined | Error
> {
  const baseUrl = process.env.BASE_API_URL;

  if (baseUrl) {
    const res = await fetch(`${baseUrl}/food-place-info`, {
      next: { revalidate: 300 },
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return new Error("Failed to fetch data");
    }

    return res.json();
  }
}

export async function getFoodPlaceAllInfoById(
  id: string
): Promise<FoodPlaceAllInfo | undefined | Error> {
  const baseUrl = process.env.BASE_API_URL;

  if (baseUrl) {
    const res = await fetch(`${baseUrl}/food-place-info/${id}`, {
      next: { revalidate: 300 },
    });
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      return new Error("Failed to fetch data");
    }

    return res.json();
  }
}
