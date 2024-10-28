"use client";

import CreateFoodPlaceForm from "@/app/components/CreateFoodPlaceForm";
import FoodPlaceAdminTable from "@/app/components/FoodPlaceAdminTable";
import { getFoodPlaceAllInfo } from "@/app/services/food_places_service";
import { useState } from "react";

export default function CreateFoodPlace() {
  const [createForm, setCreateForm] = useState<boolean>(false);
  function togleCreateForm(): void {
    setCreateForm(!createForm);
  }

  return (
    <section className="flex flex-col items-center justify-center gap-4">
      {!createForm && <FoodPlaceAdminTable togleCreateForm={togleCreateForm} />}

      {createForm && <CreateFoodPlaceForm togleCreateForm={togleCreateForm} />}
    </section>
  );
}
