import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetchData = () => {
    const [loading, setLoading] = useState(false);
    const [data, setData] = useState({
        name: null,
        image: null
    });
    const [cardData, setCardData] = useState({
        points: null,
        level: null,
        position: null,
    });
    const [badge, setBadge] = useState(null)
    const headers = {
        "userid": "u-a2399489-9cd0-4c94-ad12-568379202b08",
        "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiJ1LWEyMzk5NDg5LTljZDAtNGM5NC1hZDEyLTU2ODM3OTIwMmIwOCIsImlhdCI6MTcwNzk4NzYyOSwiZXhwIjoxNzA4NTkyNDI5fQ.fESDqKunAqLUgHBCUsNYpGcNrTeVEty91HqGebX59Uc",
        "apikey": "k-6fe7e7dc-ac8f-44a1-8bbf-a1754ddf88be",
        "entityId": "e-0000000000"
    };

    const fetchData = async () => {
        try {
            setLoading(true);
            const response = await axios.get('https://staging.questprotocol.xyz/api/users/u-a2399489-9cd0-4c94-ad12-568379202b08', { headers });
            const { imageUrl, name } = response?.data?.data || {};
            setData((prev) => ({ ...prev, image: imageUrl, name: name }));
        } catch (error) {
            console.error('Error:', error);
        } finally {
            setLoading(false);
        }
    };

    const fetchCardData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp`, { headers });
            const { data, tier } = response?.data || {};
            setCardData((prev) => ({ ...prev, points: data, level: tier }));
        } catch (error) {
            console.log(error);
        }
        finally {
            setLoading(false);
        }
    };

    const fetchRankData = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/xp-leaderboard-rank`, { headers });
            const { position } = response?.data?.data || {};
            setCardData((prev) => ({ ...prev, position: position }));
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };
    const fetchBadge = async () => {
        try {
            setLoading(true);
            const response = await axios.get(`https://staging.questprotocol.xyz/api/entities/e-0000000000/users/u-a2399489-9cd0-4c94-ad12-568379202b08/badges`, { headers })
            const { data } = response?.data || {};
            setBadge(data)
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    }
    useEffect(() => {
        fetchData();
        fetchCardData();
        fetchRankData();
        fetchBadge()
    }, []);

    return { loading, data, cardData, badge };
};

export default useFetchData;
