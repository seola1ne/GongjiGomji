import './Notice.css';
import { JuneNoticeData, JulyNoticeData, AugustNoticeData } from "../../mocks/dummy";
import NoticeItem from "./NoticeItem/NoticeItem";
import Button from '../Button/Button';

const Notice = () => {
    return (
        <div className='NoticeBox'>
            <div className='TopBox'>
                {JuneNoticeData && (
                    <div>
                        <h2 className='Month'>5월</h2>
                        <a href='/create'>
                            <Button Title="추가" Type="ADD"/>
                        </a>
                        <div className='NoticeList'>
                            {JuneNoticeData && JuneNoticeData.map((item) => (
                                <NoticeItem
                                    day={item.day} id={item.id} title={item.title}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {JulyNoticeData && (
                    <div>
                        <h2 className='Month'>6월</h2>
                        <a href='/create'>
                            <Button Title="추가" Type="ADD"/>
                        </a>
                        <div className='NoticeList'>
                            {JulyNoticeData && JulyNoticeData.map((item) => (
                                <NoticeItem
                                    day={item.day} id={item.id} title={item.title}
                                />
                            ))}
                        </div>
                    </div>
                )}

                {AugustNoticeData && (
                    <div>
                        <h2 className='Month'>7월</h2>
                        <a href='/create'>
                            <Button Title="추가" Type="ADD"/>
                        </a>
                        <div className='NoticeList'>
                            {AugustNoticeData && AugustNoticeData.map((item) => (
                                <NoticeItem
                                    day={item.day} id={item.id} title={item.title}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        <div>
        </div>
    </div>
    );
}

export default Notice;

