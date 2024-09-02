import {FoodTruck, TableItems} from "../types/foodTruck";

export function getParsedDataForTable(data: FoodTruck[]): TableItems[] {
    return data.map((el) => (
        {
            key: el.location_id,
            applicant: el.applicant,
            foodItems: el.food_items
        }
    ))
}

