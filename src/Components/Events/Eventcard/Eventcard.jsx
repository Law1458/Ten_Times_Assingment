import style from './Eventcard.module.scss'
import img from '../../../assets/image.png'
const Eventcard = ({ data }) => {
    const formatTime = (dateString) => {
        const date = new Date(dateString);
        let hours = date.getHours();
        let minutes = date.getMinutes();
        const ampm = hours >= 12 ? 'PM' : 'AM';
        hours = hours % 12;
        hours = hours ? hours : 12;
        minutes = minutes < 10 ? '0' + minutes : minutes;
        return `${hours}:${minutes} ${ampm}`;
    }
    return (
        <div className={style.container}>
            <div className={style.text}>
                <p className={style.time}>{formatTime(data.startDate)}</p>
                <p className={style.title}>{data?.title}</p>
                <div className={style.auther}>
                    <i className="fa-regular fa-user"></i>
                    <p>By OctoML</p>
                </div>
                <div className={style.presentedBy}>
                    <i className="fa-solid fa-video"></i>
                    <p>Virtual</p>
                </div>
                <div className={style.invition}>
                    <button>Invited</button>
                </div>
            </div>
            <div className={style.image}>
                <img src={data.banner} />
            </div>
        </div>
    )
}
export default Eventcard