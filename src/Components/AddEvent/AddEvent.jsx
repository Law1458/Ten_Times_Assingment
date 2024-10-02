import { useRef, useState } from 'react'
import style from './AddEvent.module.scss'
import { useNavigate } from 'react-router-dom'
// eslint-disable-next-line react/prop-types
const AddEvent = ({ setEvents }) => {
    const fileInputBox = useRef(null)
    const navigate = useNavigate()
    const [formData, setFormData] = useState({
        title: "",
        startDate: "",
        endDate: "",
        location: "",
        banner: ""
    })

    const onChangeHandler = (e) => {
        setFormData((prev) => ({
            ...prev,
            [e.target.name]: e.target.value
        }))
    }

    const onChangeFilehandler = (event) => {
        const file = event.target.files[0]; // Get the selected file
        if (file) {
            const url = URL.createObjectURL(file);
            setFormData((prev) => ({
                ...prev,
                banner: url
            }))
        }
    };

    const onClickSumbitHandler = () => {
        if (isValid(formData)) {
            alert("Please fill all fields")
            return
        }
        if (new Date(formData.startDate) >= new Date(formData.endDate)) {
            alert("Invalid Date")
            return
        }
        setEvents((prev) => ([...prev, formData]))
        navigate('/')
    }

    const onClickChooseFile = () => {
        fileInputBox.current.click()
    }

    const getDayAndMonth = (dateString = "") => {
        const date = dateString ? new Date(dateString) : new Date();
        const day = date.getDate();
        const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
            "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
        const month = monthNames[date.getMonth()];
        console.log({ day, month });
        return { day, month };
    }

    const isValid = (eventObject) => {
        return Object.keys(eventObject).some((item) => {
            return eventObject[item] === ""
        })
    }
    return (
        <div className={style.container}>
            <div className={style.cardBox}>
                <div className={style.left}>
                    <div className={style.title}>
                        <input type='text' placeholder='Enter Name' name='title' onChange={e => onChangeHandler(e)} value={formData.title} />
                    </div>
                    <div className={style.date}>
                        <div className={style.calender}>
                            <p className={style.month}>{getDayAndMonth(formData.startDate).month}</p>
                            <p className={style.days}>{getDayAndMonth(formData.startDate).day}</p>
                        </div>
                        <div className={style.dateWrapper}>
                            <div className={style.start}>
                                <label>Start</label>
                                <input type='datetime-local' name='startDate' onChange={e => onChangeHandler(e)} value={formData.startDate} />
                            </div>
                            <div className={style.end}>
                                <label>End</label>
                                <input type='datetime-local' name='endDate' onChange={e => onChangeHandler(e)} value={formData.endDate} />
                            </div>
                            <div className={style.timeZone}>
                                <i className="fa-solid fa-globe"></i>
                                <p>GMT+05:30 Calcutta</p>
                            </div>
                            <div className={style.sessionType}>
                                <i className="fa-solid fa-layer-group"></i>
                                <p>Created Multi-Session Event</p>
                            </div>
                        </div>
                    </div>
                    <div className={style.location}>
                        <i className="fa-solid fa-location-dot"></i>
                        <div className={style.locationBox}>
                            {/* <p>Add Event Location</p> */}
                            <input type='text' placeholder='Add Event Location' name='location' onChange={e => onChangeHandler(e)} value={formData.location} />
                            <p className={style.subTitle}>Offline location or virtual link</p>
                        </div>
                    </div>
                    <div className={style.eventoption}>
                        <p>Event options</p>
                    </div>
                    <div className={style.button}>
                        <button type='submit' onClick={onClickSumbitHandler}>Create Event</button>
                    </div>
                </div>
                <div className={style.right}>
                    <div className={style.banner} onClick={onClickChooseFile}>
                        {formData?.banner ? <img src={formData.banner} /> : <p className="title">Choose Banner</p>}
                    </div>
                    <input type='file' style={{ display: "none" }} ref={fileInputBox} onChange={e => onChangeFilehandler(e)} />
                </div>
            </div>
        </div>
    )
}

export default AddEvent