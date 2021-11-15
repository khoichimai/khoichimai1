import styled from "styled-components";

export const Wrapper = styled.div`
    width: 1280px;
    border: 1px solid #ccc;
    max-width: 100%;
`;
export const Content = styled.div`
    width: 100%;
    color: var(--medGray);
    .calendar-header {
        width: 100%;
        display: flex;
        border: 1px solid #999;
        border-radius: 5px;
        align-items: center;
        justify-content: center;
        .calendar-icons-left {
            padding-left: 10px;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            -o-user-select: none;
            user-select: none;
            cursor: pointer;
            padding: 0 30px;
            :hover {
                color: orange;
            }
        }
        .calendar-icons-right {
            padding-right: 10px;
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            -o-user-select: none;
            user-select: none;
            cursor: pointer;
            padding: 0 30px;
            :hover {
                color: orange;
            }
        }
        .calendar-type {
            margin: 0 60px;
            padding: 0 30px;
            color: #333;
            font-size: var(--fontBig);
            -moz-user-select: none;
            -webkit-user-select: none;
            -ms-user-select: none;
            -o-user-select: none;
            user-select: none;
            cursor: pointer;
            :hover {
                color: orange;
            }
        }
    }
`;
