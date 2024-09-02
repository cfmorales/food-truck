import React, {useEffect, useState} from 'react';
import {Table} from "antd";
import {getData} from "../services/api";
import {TableItems} from "../types/foodTruck";
import {getParsedDataForTable} from "../shared/foodTable";

interface FoodTableProps {
    shouldIgnoreGlobalFetch?: boolean
    foodTruckDataProps?: TableItems[]
}


const FoodTable = ({shouldIgnoreGlobalFetch = false, foodTruckDataProps = []}: FoodTableProps) => {
    const [foodTruckData, setFoodTruckData] = useState<TableItems[]>(foodTruckDataProps ?? [])

    useEffect(() => {
        if (!shouldIgnoreGlobalFetch) {
            const fetchData = async () => {
                const response = await getData();
                setFoodTruckData(getParsedDataForTable(response.data.data))
            };
            fetchData().catch(() => {
                console.error("Can't connect to the server")
            });
        }
    }, []);

    const dataSource = foodTruckData.length === 0 ? foodTruckDataProps : foodTruckData;
    const columns = [
        {
            title: 'Applicant',
            dataIndex: 'applicant',
            key: 'applicant',
        },
        {
            title: 'Food Items',
            dataIndex: 'foodItems',
            key: 'foodItems',
        }
    ];
    return (
        <Table columns={columns} dataSource={dataSource}>

        </Table>
    );
};

export default FoodTable;