import { useState } from "react";

const TodoItemInputField = (props) => {
    const onSubmit = () => {
        return (
            <></>
        )
    }
    const [input, setInput] = useState("");    

    return (
        <div className='Input'>
            <h3>제목</h3>
            <input 
                type="text" 
                placeholder='제목을 입력해 주세요' 
                className='TitleInput'
                onChange={(e) => setInput(e.target.value)} value={input}
            />
            <div className='FormButton'>
                    <button type="submit" className='PostBtn' onClick={onSubmit}>추가</button>
                    {/* <button type="reset" className='DeleteBtn'>다시 쓰기</button> */}
                </div>
        </div>
    );
};

export default TodoItemInputField;