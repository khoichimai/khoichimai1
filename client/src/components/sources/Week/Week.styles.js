import styled from "styled-components";

export const Wrapper = styled.div`
    width: 100%;
    margin-top: 10px;
`;

export const Content = styled.div`
    width: 100%;
    .calendar-dayofweek {
        margin-left: 100px;
        border-bottom: 2px solid #999;
    }
    .calendar-dayofweek-list,
    .calendar-date-list {
        display: flex;
        list-style: none;
        align-items: center;
        padding: 0;
        margin: 0;
        justify-content: space-around;
        
        @media only screen and (max-width: 768px) {
            font-size: 0.7rem;
        }
    }
    .calendar-dayofweek-item,
    .calendar-date-item {
        width: 150px;
        max-width: 100%;
    }
    .hours-split {
        overflow-y: scroll;
        overflow-x: auto;
        height: 70vh;
        display: flex;
        width: 100%;
        .hours-list {
            width: 100px;
            min-width: 100px;
            transform: translateY(-18px);
            text-align: end;
            .hours-item {
                height: 40px;
            }
        }
        .hours-row {
            flex-grow: 1;
            width: 100%;
            height: auto;

            position: relative;
            .hours-split-list-line {
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                .hours-split-item-line {
                    height: 40px;
                    width: 100%;
                    ::after {
                        content: "";
                        display: block;
                        border-bottom: 1px solid #ccc;
                        width: 100%;
                    }
                }
            }
            .hours-column {
                display: flex;
                width: 100%;
                position: relative;
                top: 0;
                left: 0;
                bottom: 0;
                right: 0;
                height: 960px;
                justify-content: space-around;
                .hours-column-item {
                    position: relative;
                    width: 150px;
                    ::after {
                        content: "";
                        width: 100%;
                        height: 100%;
                        display: block;
                        border-left: 1px solid #ccc;
                    }
                }
            }
        }
    }
`;
