import { Wrapper, Content } from "./Week.styles";

const Week = () => {
    return (
        <Wrapper>
            <Content>
                <div className='calendar-dayofweek'>
                    <ul className='calendar-dayofweek-list'>
                        <li className='calendar-dayofweek-item'>CN</li>
                        <li className='calendar-dayofweek-item'>Thứ 2</li>
                        <li className='calendar-dayofweek-item'>Thứ 3</li>
                        <li className='calendar-dayofweek-item'>Thứ 4</li>
                        <li className='calendar-dayofweek-item'>Thứ 5</li>
                        <li className='calendar-dayofweek-item'>Thứ 6</li>
                        <li className='calendar-dayofweek-item'>Thứ 7</li>
                    </ul>
                    <ul className='calendar-date-list'>
                        <li className='calendar-date-item'>1</li>
                        <li className='calendar-date-item'>2</li>
                        <li className='calendar-date-item'>3</li>
                        <li className='calendar-date-item'>4</li>
                        <li className='calendar-date-item'>5</li>
                        <li className='calendar-date-item'>6</li>
                        <li className='calendar-date-item'>7</li>
                    </ul>
                </div>
                <div className='hours-split'>
                    <div className='hours-list'>
                        <div className='hours-item'>12 AM</div>
                        <div className='hours-item'>1 AM</div>
                        <div className='hours-item'>2 AM</div>
                        <div className='hours-item'>3 AM</div>
                        <div className='hours-item'>4 AM</div>
                        <div className='hours-item'>5 AM</div>
                        <div className='hours-item'>6 AM</div>
                        <div className='hours-item'>7 AM</div>
                        <div className='hours-item'>8 AM</div>
                        <div className='hours-item'>9 AM</div>
                        <div className='hours-item'>10 AM</div>
                        <div className='hours-item'>11 AM</div>
                        <div className='hours-item'>12 AM</div>
                        <div className='hours-item'>1 PM</div>
                        <div className='hours-item'>2 PM</div>
                        <div className='hours-item'>3 PM</div>
                        <div className='hours-item'>4 PM</div>
                        <div className='hours-item'>5 PM</div>
                        <div className='hours-item'>6 PM</div>
                        <div className='hours-item'>7 PM</div>
                        <div className='hours-item'>8 PM</div>
                        <div className='hours-item'>9 PM</div>
                        <div className='hours-item'>10 PM</div>
                        <div className='hours-item'>11 PM</div>
                    </div>
                    <div className='hours-row'>
                        <div className='hours-split-list-line'>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                            <div className='hours-split-item-line'></div>
                        </div>
                        <div className='hours-column'>
                            <div className='hours-column-item'></div>
                            <div className='hours-column-item'></div>
                            <div className='hours-column-item'></div>
                            <div className='hours-column-item'></div>
                            <div className='hours-column-item'></div>
                            <div className='hours-column-item'></div>
                            <div className='hours-column-item'></div>
                        </div>
                    </div>
                </div>
            </Content>
        </Wrapper>
    );
};
export default Week;
