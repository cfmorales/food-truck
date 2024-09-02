import React, {useState} from 'react';
import Layout from '../Layout';

import {Button, Form, Input, List} from "antd";
import Item = List.Item;
import {TableItems} from "../../types/foodTruck";
import {getParsedDataForTable} from "../../shared/foodTable";
import {getByKey} from "../../services/api";
import FoodTable from "../../components/FoodTable";

const SearchByKey = () => {

    const [inputValue, setInputValue] = useState<string>('');
    const [foodTruckData, setFoodTruckData] = useState<TableItems[]>([])

    function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
        setInputValue(e.target.value);
    };

    async function handleSubmit() {
        try {
            const response = await getByKey(inputValue);
            setFoodTruckData(getParsedDataForTable(response.data.data))

        } catch (error) {
            console.error("Can't connect to the server")
        }
    };


    return (
        <Layout>
            <Form layout="inline" onFinish={handleSubmit}>
                <Item>
                    <Input
                        placeholder="Search By Key (Case sensitive)"
                        value={inputValue}
                        onChange={handleInputChange}
                    />
                </Item>
                <Item>
                    <Button type="primary" htmlType="submit">
                        Submit
                    </Button>
                </Item>
            </Form>
            <FoodTable shouldIgnoreGlobalFetch foodTruckDataProps={foodTruckData}/>

        </Layout>
    );
};

export default SearchByKey;