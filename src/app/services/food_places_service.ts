import { FormEvent } from "react";

export type APIFoodPlaceState = {
  result?: FoodPlace;
  error?: Error;
  loading: boolean;
};

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

export interface FoodPlace {
  food_place_id?: string;
  food_place_name: string;
  food_place_description: string;
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
): Promise<FoodPlace | undefined | Error> {
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

export async function createFoodPlaceAction(
  event: FormEvent<HTMLFormElement>
): Promise<APIFoodPlaceState> {
  event.preventDefault();

  const baseUrl = "http://localhost:7070/api/v1";
  const formData = new FormData(event.currentTarget);
  const payload = <FoodPlace>{
    food_place_name: formData.get("food_place_name"),
    food_place_description: formData.get("food_place_description"),
  };
  const res = await fetch(`${baseUrl}/create-food-place`, {
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
    method: "POST",
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    return <APIFoodPlaceState>{
      result: undefined,
      error: new Error("Could not create food place."),
      loading: false,
    };
  }

  const data = await res.json();

  return {
    result: data,
    error: undefined,
    loading: false,
  };
}
