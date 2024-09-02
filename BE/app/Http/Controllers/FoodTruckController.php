<?php

namespace App\Http\Controllers;

use App\Helpers\ResponseHelper;
use App\Http\Controllers\Controller;
use App\Models\FoodTruck;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Validator;

class FoodTruckController extends Controller
{
    public function importCSV(Request $request)
    {
        try {
            $request->validate([
                'import_csv' => 'required|mimes:csv,txt',
            ]);

            if (FoodTruck::exists()) {
                throw new \Exception("Food truck already has data");
            }

            $file = $request->file('import_csv');
            $handle = fopen($file->path(), 'r');

            fgetcsv($handle);

            $chunksize = 25;

            while (!feof($handle)) {
                $chunkdata = [];

                for ($i = 0; $i < $chunksize; $i++) {
                    $data = fgetcsv($handle);
                    if ($data === false) {
                        break;
                    }
                    $chunkdata[] = $data;
                }
                $this->getChunkData($chunkdata);
            }
            fclose($handle);

            return ResponseHelper::success();
        } catch (\Exception $e) {
            return ResponseHelper::error($e->getMessage());
        }

    }

    public function getChunkData($chunkdata)
    {
        foreach ($chunkdata as $column) {
            $foodTruck = new FoodTruck();
            $foodTruck->location_id = $column[0];
            $foodTruck->applicant = $column[1];
            $foodTruck->facility_type = $column[2];
            $foodTruck->cnn = $column[3];
            $foodTruck->location_description = $column[4];
            $foodTruck->address = $column[5];
            $foodTruck->blocklot = $column[6];
            $foodTruck->block = $column[7];
            $foodTruck->lot = $column[8];
            $foodTruck->permit = $column[9];
            $foodTruck->Status = $column[10];
            $foodTruck->food_items = $column[11];
            $foodTruck->X = $column[12];
            $foodTruck->Y = $column[13];
            $foodTruck->latitude = $column[14];
            $foodTruck->longitude = $column[15];
            $foodTruck->schedule = $column[16];
            $foodTruck->dayshours = $column[17];
            $foodTruck->NOISent = $column[18];
            $foodTruck->Approved = $column[19];
            $foodTruck->Received = $column[20];
            $foodTruck->prior_permit = filter_var($column[21], FILTER_VALIDATE_BOOLEAN);
            $foodTruck->expiration_date = $column[22];
            $foodTruck->Location = $column[23];
            $foodTruck->fire_prevention_districts = $column[24];
            $foodTruck->police_districts = $column[25];
            $foodTruck->supervisor_districts = $column[26];
            $foodTruck->zip_codes = $column[27];
            $foodTruck->neighborhoods_old = $column[28];
            $foodTruck->save();
        }
    }

    public function getAllData(Request $request)
    {
        try {
            $perPage = $request->get('perPage', 10);
            $currentPage = $request->get('page', 1);
            $data = FoodTruck::getPaginatedData($perPage, $currentPage);

            return ResponseHelper::success($data);
        } catch (\Exception $e) {
            return ResponseHelper::error($e->getMessage());
        }

    }

    public function hasData()
    {
        return ResponseHelper::success($data = FoodTruck::exists());
    }

    public function getByKey(Request $request)
    {
        $key = $request->input('key');

        if (!$key) {
            return response()->json([
                'message' => 'Key is required.'
            ], 400);
        }

        $items = FoodTruck::getPaginatedData(100, 1, ['food_items', 'like', '%' . $key . '%']);

        return ResponseHelper::success($items);
    }
}
