import styled from "styled-components";
import FadeIn from "react-fade-in";

export const FlexGrid = styled(FadeIn)`
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
`;

export const Card = styled.div`
    width: 300px;
    height: 100%;
    padding: 0 15px 40px;

    .img-wrapper {
        width: 100%;
        height: 420px;
        border-radius: 40px;
        overflow: hidden;
        border: 1px solid #ddd;

        img {
            object-fit: cover;
            width: 100%;
            height: 100;
        }
    }

    h1 {
        margin: 10px 0;
        font-size: 21px;
    }

    p {
        margin: 0;
    }
`;

export const Star = styled.div`
    display: inline-block;
    width: 18px;
    height: 18px;
    background-color: ${({ isActive }) => {
        return isActive ? "#ffc806" : "#DDD";
    }};
    clip-path: polygon(
        50% 0%,
        61% 35%,
        98% 35%,
        68% 57%,
        79% 91%,
        50% 70%,
        21% 91%,
        32% 57%,
        2% 35%,
        39% 35%
    );
`;
