import {
  FoodPlaceAllInfo,
  getFoodPlaceAllInfoById,
} from "@/app/services/food_places_service";
import Link from "next/link";

export default async function FoodPlaceAllInfoPage({
  params,
}: {
  params: { id: string };
}) {
  const data: FoodPlaceAllInfo | Error | undefined =
    await getFoodPlaceAllInfoById(params.id);

  if (data && data instanceof Error) {
    return (
      <main className="min-h-[80vh] flex flex-col justify-center items-center gap-4">
        <div
          className="flex items-center p-4 mb-4 text-sm text-red-800 border border-red-300 rounded-lg bg-red-50 dark:bg-gray-800 dark:text-red-400 dark:border-red-800"
          role="alert"
        >
          <svg
            className="flex-shrink-0 inline w-4 h-4 me-3"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
          </svg>
          <span className="sr-only">Info</span>
          <div>
            <span className="font-medium">An error Occurred!</span>{" "}
            {data?.message}
          </div>
        </div>
      </main>
    );
  } else if (data) {
    return (
      <main className="h-screen flex flex-col items-center justify-center gap-4">
        <div className="h-[50vh] sm:p-6">
          <div className="flex flex-col  bg-white border border-gray-200 rounded-lg shadow md:flex-row md:max-w-4xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700">
            {/* <img
              className="object-cover w-full rounded-t-lg md:rounded-none md:rounded-s-lg"
              src="https://img.daisyui.com/images/stock/photo-1494232410401-ad00d5433cfa.webp"
              alt=""
            /> */}
            <iframe
              className="h-[40vh] w-[40vw] rounded-l-lg"
              src={data?.video_link}
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
            ></iframe>
            <div className="flex flex-col justify-between p-4">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
                {data.food_place_name}
              </h5>
              <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
                {data.food_place_description}
              </p>
              <span className="text-gray-900">
                <span className="text-gray-900 font-semibold">Address: </span>
                {data.food_place_address}
              </span>
              <div className="flex gap-4 mt-4">
                <span className="text-gray-700">
                  <span className=" font-semibold">Video Likes:</span>
                  {data.video_likes}
                </span>

                <span className="text-gray-700">
                  <span className=" font-semibold">Users Likes:</span>
                  {data.user_likes}
                </span>
              </div>
              <div className="flex  gap-2 mt-4">
                <Link href={"/"}>
                  <button
                    type="button"
                    className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2"
                  >
                    <svg
                      className="w-5 h-5 me-2 -ms-1"
                      aria-hidden="true"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      fill="none"
                      viewBox="0 0 24 24"
                    >
                      <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M5 12h14M5 12l4-4m-4 4 4 4"
                      />
                    </svg>
                    Go back
                  </button>
                </Link>
                <Link
                  href={`http://maps.google.com/?q=${data?.food_place_name}`}
                  target="blank"
                >
                  <button
                    type="button"
                    className="text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-lg text-sm px-5 py-2.5 text-center inline-flex items-center dark:hover:bg-[#050708]/40 dark:focus:ring-gray-600 me-2 mb-2"
                  >
                    <svg
                      className="w-5 h-5 me-2 -ms-1"
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
                    Direction
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </main>
    );
  }
}
