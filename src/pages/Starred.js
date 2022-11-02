import React, { useEffect, useState } from "react";
import MainPageLayout from "../components/MainPageLayout";
import { useShows } from "../misc/cutomHooks";
import { customFetch } from "../misc/customFetch";
import ShowGrid from "../components/show/ShowGrid";

function Starred() {
    const [starred] = useShows();

    const [shows, setShows] = useState(null);
    const [isLoading, setIsloading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        if (starred && starred.length > 0) {
            const promises = starred.map((showId) =>
                customFetch(`shows/${showId}`)
            );

            Promise.all(promises)
                .then((apiData) => apiData.map((show) => ({ show })))
                .then((results) => {
                    setShows(results);
                    setIsloading(false);
                })
                .catch((err) => {
                    setError(err.message);
                    setIsloading(false);
                });
        }
    }, [starred]);

    return (
        <MainPageLayout>
            {isLoading && <div>Loading ...</div>}
            {error && <div> Error ... {error}</div>}
            {!isLoading && !shows && <div>Odoogoor starred baihgvi baina</div>}
            {!isLoading && !error && shows && <ShowGrid data={shows} />}
        </MainPageLayout>
    );
}

export default Starred;
