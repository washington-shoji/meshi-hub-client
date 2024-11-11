import Link from "next/link";
import { FoodPlaceAllInfo } from "../app/services/food_places_service";

type Props = {
  data: FoodPlaceAllInfo;
};

export default function FoodCard(props: Props) {
  function handleDirection(): void {
    location.href = "http://www.example.com";
  }
  return (
    <div className="sm:max-w-sm bg-white border border-white rounded-lg shadow dark:bg-gray-800 dark:border-gray-700">
      {/* <img
        className="rounded-t-lg h-[30vh] w-full"
        src="/food/img-1.webp"
        alt=""
      /> */}
      <div>
        <iframe
          className="h-[30vh] w-full border-0 rounded-t-lg"
          src={props?.data?.video_link?.replace("shorts", "embed")}
          allowFullScreen
          referrerPolicy="strict-origin-when-cross-origin"
        ></iframe>
      </div>

      <div className="flex flex-col justify-between p-5">
        <div className=" min-h-[150px]">
          <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
            {props?.data?.food_place_name}
          </h5>
          <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
            {props?.data?.food_place_description}
          </p>
        </div>

        <div className="flex gap-2 justify-between">
          <Link href={`/food-place/${props.data.food_place_id}`}>
            <button className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
              All Info
            </button>
          </Link>

          <Link
            href={`${props?.data?.food_place_address_map_direction}`}
            target="blank"
          >
            <button
              className="inline-flex items-center gap-2 px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              type="button"
            >
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  fillRule="evenodd"
                  d="M11.906 1.994a8.002 8.002 0 0 1 8.09 8.421 7.996 7.996 0 0 1-1.297 3.957.996.996 0 0 1-.133.204l-.108.129c-.178.243-.37.477-.573.699l-5.112 6.224a1 1 0 0 1-1.545 0L5.982 15.26l-.002-.002a18.146 18.146 0 0 1-.309-.38l-.133-.163a.999.999 0 0 1-.13-.202 7.995 7.995 0 0 1 6.498-12.518ZM15 9.997a3 3 0 1 1-5.999 0 3 3 0 0 1 5.999 0Z"
                  clipRule="evenodd"
                />
              </svg>
              Directions
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
}
