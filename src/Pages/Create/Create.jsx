import { useState } from 'react';
import NativeSelect from "@mui/material/NativeSelect";
import Input from "@mui/material/Input";
import InputAdornments from "@mui/material/InputAdornment";
import './Create.css';
import NoticeInput from "./NoticeInput/NoticeInput";




const Create = () => {

    return (
        <div className="CreateBox">
            <form className="PostNoticeForm">
                <NoticeInput
                    onSubmit={() => {}}
                />
                <div className='Input'>
                    <h3>내용</h3>
                    <input 
                        type="text" 
                        placeholder='내용을 입력해 주세요' 
                        className='ContentInput'
                    />
                </div>
                <div className='PeriodInput'>
                    <h3>기간</h3>
                    <NativeSelect
                        defaultValue={1}
                        inputProps={{
                            name: 'month'
                        }}
                        className='SelectMonth'
                        style={{
                            fontFamily: "HumanHanbu"
                        }}
                    >
                        <option value={1}>1월</option>
                        <option value={2}>2월</option>
                        <option value={3}>3월</option>
                        <option value={4}>4월</option>
                        <option value={5}>5월</option>
                        <option value={6}>6월</option>
                        <option value={7}>7월</option>
                        <option value={8}>8월</option>
                        <option value={9}>9월</option>
                        <option value={10}>10월</option>
                        <option value={11}>11월</option>
                        <option value={12}>12월</option>
                    </NativeSelect>
                    <Input
                        id="DayInput"
                        endAdornment={<InputAdornments position="end">일</InputAdornments>}
                        aria-describedby="standard-weight-helper-text"
                        inputProps={{
                            'name': 'day'
                        }}
                        style={{
                            width: "70px",
                            borderBottom: "3px solid ##587c54",
                            margin: "4px 8px"
                        }}
                    />
                </div>
            </form>
        </div>
    );
}

export default Create;