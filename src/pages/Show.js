import React, { useEffect, useReducer } from "react";
import { useParams } from "react-router-dom";
import ShowMainData from "../components/show/ShowMainData";
import Details from "../components/show/Details";
import Seasons from "../components/show/Seasons";
import Cast from "../components/show/Cast";
import { InfoBlock, ShowPageWrapper, DivWrapper } from "./Show.styled";
import { customFetch } from "../misc/customFetch";

const reducer = (prevState, action) => {
    switch (action.type) {
        case "fetch_success": {
            return { show: action.show, isLoading: false };
        }
        case "fetch_failed": {
            return { error: action.error, isLoading: false };
        }
        default:
            return prevState;
    }
};

const initialState = {
    show: null,
    isLoading: true,
    error: null,
};

function Show() {
    const { id } = useParams();

    const [{ show, isLoading, error }, dispatch] = useReducer(
        reducer,
        initialState
    );

    useEffect(() => {
        let isMounting = true;

        if (isMounting) {
            async function getShow() {
                await customFetch(`shows/${id}?embed[]=seasons&embed[]=cast`)
                    .then((res) => {
                        setTimeout(() => {
                            dispatch({ type: "fetch_success", show: res });
                        }, 2000);
                    })
                    .catch((err) => {
                        dispatch({ type: "fetch_failed", error: err.message });
                    });
            }

            getShow();
        }

        return () => {
            isMounting = false;
        };
    }, [id]);

    if (isLoading) {
        return (
            <DivWrapper>
                <p>Та түр хүлээнэ үү...</p>
            </DivWrapper>
        );
    }

    if (error) {
        return <p>Error ...</p>;
    }

    return (
        <ShowPageWrapper>
            <ShowMainData
                name={show.name}
                image={show.image}
                rating={show.rating}
                tags={show.genres}
                summary={show.summary}
            />
            <InfoBlock>
                <h2>Details</h2>
                <Details
                    status={show.status}
                    premiered={show.premiered}
                    network={show.network}
                />
            </InfoBlock>
            <InfoBlock>
                <h2>Seasons</h2>
                <Seasons seasons={show._embedded.seasons} />
            </InfoBlock>
            <InfoBlock>
                <h2>Cast</h2>
                <Cast cast={show._embedded.cast} />
            </InfoBlock>
        </ShowPageWrapper>
    );
}

export default Show;
