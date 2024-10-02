import style from './Eventdate.module.scss'
const Eventdate = ({ data }) => {
    const formatDate = (dateString) => {
        const date = new Date(dateString);
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday",
            "Thursday", "Friday", "Saturday"];
        const month = monthNames[date.getMonth()];
        const day = date.getDate() || "";
        const weekday = dayNames[date.getDay()];
        console.log({ weekday });
        console.log({ day });
        return { month, day, weekday };
    };
    const { month = "", day = "", weekday = "" } = formatDate(data?.startDate)
    return (
        <div className={style.container}>
            <p className={style.title}>{month + " " + day}</p>
            <p className={style.day}>{weekday}</p>
        </div>
    )
}
export default Eventdate