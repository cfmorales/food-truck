<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class FoodTruck extends Model
{
    use HasFactory;

    protected $fillable = [
        'location_id',
        'applicant',
        'facility_type',
        'cnn',
        'location_description',
        'address',
        'blocklot',
        'block',
        'lot',
        'permit',
        'Status',
        'food_items',
        'X',
        'Y',
        'latitude',
        'longitude',
        'schedule',
        'dayshours',
        'NOISent',
        'Approved',
        'Received',
        'prior_permit',
        'expiration_date',
        'Location',
        'fire_prevention_districts',
        'police_districts',
        'supervisor_districts',
        'zip_codes',
        'neighborhoods_old',
    ];

    public static function getPaginatedData($perPage = 10, $currentPage = 1, array $filter = [])
    {
        $query = self::query();

        if (!empty($filter)) {
            $query->where($filter[0], $filter[1], $filter[2]);
        }
        $data = $query->paginate($perPage, ['*'], 'page', $currentPage);

        return [
            'currentPage' => $data->currentPage(),
            'totalPages' => $data->lastPage(),
            'totalItems' => $data->total(),
            'itemsPerPage' => $data->perPage(),
            'data' => $data->items(),
        ];
    }
}
