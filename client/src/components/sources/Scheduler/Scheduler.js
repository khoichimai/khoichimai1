import { Wrapper, Content } from "./Scheduler.styles";
import { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
//components
import Week from "../Week/index";
import Month from "../Month/index";
import Year from "../Year/index";
const Scheduler = () => {
    const [type, setType] = useState(0);
    const arrDisplay = [<Week />, <Month />, <Year />];
    var useDisplay = arrDisplay[type];
    const changeType = () => {
        if (type === 2) {
            setType(0);
            useDisplay = arrDisplay[type];
        } else {
            setType(type + 1);
            useDisplay = arrDisplay[type];
        }
    };
    return (
        <Wrapper>
            <Content>
                <div className='calendar-header'>
                    <div className='calendar-icons-left'>
                        <AiOutlineLeft />
                    </div>
                    <div className='calendar-type' onClick={changeType}>
                        {type}
                    </div>
                    <div className='calendar-icons-right'>
                        <AiOutlineRight />
                    </div>
                </div>
                <div className='calendar-body'>{useDisplay}</div>
            </Content>
        </Wrapper>
    );
};

export default Scheduler;
