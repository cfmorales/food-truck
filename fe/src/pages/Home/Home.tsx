import React, {useState, useEffect} from 'react';
import Layout from '../Layout';
import styles from './Home.module.scss';
import {hasData} from "../../services/api";
import FoodTable from "../../components/FoodTable";

const Home: React.FC = () => {
    const [hideButton, setHideButton] = useState<boolean>(false);

    useEffect(() => {
        const fetchData = async () => {
            const response = await hasData();
            setHideButton(Boolean(response.data));
        };

        fetchData().catch(() => {
            console.error("Can't connect to the server")
        });
    }, []);

    return (
        <Layout>
            {!hideButton ? (
                <button className={styles.csvButton}>Initialize CSV</button>
            ) : (
                <FoodTable/>
            )}
        </Layout>
    );
};

export default Home;