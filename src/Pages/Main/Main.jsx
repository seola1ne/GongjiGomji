import './Main.css';

// 파이어베이스 파일에서 import 해 온 db
import { db } from "../../firebase"; 
// db에 접근해서 데이터를 꺼내게 도와줄 친구들
import { addDoc, collection, getDocs, updateDoc, doc, deleteDoc } from 'firebase/firestore';
import { useEffect } from 'react';
import { useState } from 'react';
import Notice from '../../components/Notice/Notice';
import { async } from '@firebase/util';
import { useId } from 'react';

const Main = () => {
    // 이따가 users 추가하고 삭제하는 거 진행을 도와줄 state
    const [Notices, setNotices] = useState([]);
    // db의 Notice 컬렉션을 가져옴
    const NoticesCollectionRef = collection(db, "notice");

    const [newTitle, setNewTitle] = useState("");

    // 유니크 id를 만들기 위한 useId()
    const uniqueId = useId();
    console.log(uniqueId);

    useEffect(() => {
        // 비동기로 데이터 받을 준비
        const getNotice = async () => {
            // getDocs로 컬렉션 안에 있는 데이터 가져오기
            const data = await getDocs(NoticesCollectionRef);
            setNotices(data.docs.map((doc) => ({...doc.data(), id: doc.id})))
            console.log(data);
        }
        getNotice();
    }, [])

    // 생성 - C
    const createNotice = async () => {
        await addDoc(NoticesCollectionRef, {title: newTitle});
    }

    // 업데이트 - U
    const updateUser = async(id, title) => {
        // 내가 업데이트 하고자 하는 db의 컬렉션의 id를 뒤지면서 내가 수정하고자 하는 id랑 같은 id값을 가진 데이터를 찾는다
        const noticeDoc = doc(db, "notice", id)
        // 내가 업데이트 하고자 하는 key를 어떻게 업데이트할지 준비
        const newField = "수정된 title"
        await updateDoc(noticeDoc, newField);
    }

    const deleteNotice = async (id) => {
        const noticeDoc = doc(db, "notice", id);
        await deleteDoc(noticeDoc);
    }

    const showNotices = Notices.map((value) => (
        <div key={uniqueId}>
            <h1>{value.title}</h1>
        </div>
    ))

    return (
        <div className='Container'>
            <div className='Notices'>
                <Notice />
                {/* {showNotices} */}
            </div>
        </div>
    );
}

export default Main;