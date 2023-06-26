import './Notice.css';
import Button from '../Button/Button';

const Notice = () => {
    return (
        <div className='NoticeBox'>
            <div className='TopBox'>
                <h2 className='Month'>6월</h2>
                <a href='/create' className='AddBtn'>
                    <Button Title="추가" Type="ADD" style={{right: "20px"}}/>
                </a>
            </div>
            <div className='NoticeList'>
                <div>
                    원원
                </div>
                <div>
                    투투
                </div>
                <div>
                    쓰리쓰리
                </div>
            </div>
        <div>

        </div>
    </div>
    );
}

export default Notice;