import "./NoticeItem.css";

const NoticeItem = ({month, day, id, title}) => {
    return (
        <div className="NoticeItem">
            <div className="ItemDay">
                <span>{day}</span>
            </div>
            <p className="ItemTitle">{title}</p>
        </div>
    )
}

export default NoticeItem;