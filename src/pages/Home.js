import React, { useState } from "react";
import ActorGrid from "../components/actor/ActorGrid";
import CustomRadio from "../components/CustomRadio";
import MainPageLayout from "../components/MainPageLayout";
import ShowGrid from "../components/show/ShowGrid";
import { customFetch } from "../misc/customFetch";
import {
    RadioInputsWrapper,
    SearchButtonWrapper,
    SearchInput,
    DivWrapper,
} from "./Home.styled";

function Home() {
    const [input, setInput] = useState("");
    const [data, setData] = useState(null);
    const [searchOption, setSearchOption] = useState("shows");
    const [isLoading, setIsLoading] = useState(true);

    const onSearch = () => {
        setTimeout(async () => {
            const result = await customFetch(
                `search/${searchOption}?q=${input}`
            );

            setData(result);

            setIsLoading(false);
        }, 1000);
    };

    const oneKeyEnter = (e) => {
        if (e.keyCode === 13) onSearch();
    };

    const renderResultDisplay = () => {
        if (isLoading) {
            return (
                <DivWrapper>
                    <p>Та түр хүлээнэ үү...</p>
                </DivWrapper>
            );
        }

        if (data && data.length === 0)
            return <DivWrapper>Хайлт олдсонгүй : {input}</DivWrapper>;

        if (data && data.length > 0)
            return data[0].show ? (
                <ShowGrid data={data} />
            ) : (
                <ActorGrid data={data} />
            );

        return null;
    };

    const handleRadioChange = (e) => {
        setSearchOption(e.target.value);
    };

    return (
        <MainPageLayout>
            <SearchInput
                type='text'
                placeholder='Хайх...'
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={oneKeyEnter}
            />

            <RadioInputsWrapper>
                <div>
                    <CustomRadio
                        label='Shows'
                        id='shows-search'
                        value='shows'
                        checked={searchOption === "shows"}
                        onChange={handleRadioChange}
                    />
                </div>
                <div>
                    <CustomRadio
                        label='Actors'
                        id='actors-search'
                        value='people'
                        checked={searchOption === "people"}
                        onChange={handleRadioChange}
                    />
                </div>
            </RadioInputsWrapper>

            <SearchButtonWrapper>
                <button onClick={onSearch}>Хайх</button>
            </SearchButtonWrapper>
            {renderResultDisplay()}
        </MainPageLayout>
    );
}

export default Home;
