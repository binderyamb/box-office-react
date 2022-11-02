import styled from "styled-components";
import FadeIn from "react-fade-in";

export const ShowPageWrapper = styled.div`
    padding: 0 20px;

    @media only screen and(width: 516px) {
        padding: 0 40px;
    }

    @media only screen and(width: 768px) {
        padding: 0 60px;
    }

    @media only screen and(width: 992px) {
        padding: 0 80px;
    }
`;

export const InfoBlock = styled.div`
    margin-bottom: 40px;

    h2 {
        margin: 0 0 40px 0;
        font-size: 22px;
    }
`;

export const DivWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;
