import { useNavigate } from 'react-router-dom'
import style from './Event.module.scss'
import Eventcard from './Eventcard/Eventcard'
import Eventdate from './Eventdate/Eventdate'
const Events = ({ events }) => {
    const navitage = useNavigate()

    const removeDuplicatesByStartDate = (eventsArray) => {
        const seenDates = [];
        return eventsArray.filter(event => {
            if (seenDates.includes(event.startDate)) return false;
            seenDates.push(event.startDate);
            return true;
        });
    };

    return (
        <div className={style.container}>
            <div className={style.heading}>
                <div className={style.title}>
                    <h1>Events</h1>
                </div>
                <div className={style.toggle}>
                    <button className={style.active}>
                        Upcoming
                    </button>
                    <button>
                        Past
                    </button>
                </div>
            </div>
            <div className={style.addEvents}>
                <button onClick={() => navitage('/add-event')}>Add Events</button>
            </div>
            <div className={style.body}>
                <div className={style.date}>
                    {
                        removeDuplicatesByStartDate(events)?.map((item) => <Eventdate data={item} />)
                    }
                </div>
                <div className={style.cards}>
                    {
                        events?.map((item) => <Eventcard data={item} />)
                    }
                </div>
            </div>
        </div>
    )
}
export default Events