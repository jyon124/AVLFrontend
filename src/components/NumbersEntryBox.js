import React, { useState, useEffect } from 'react';
import '../Styles/NumbersEntryBox.css';

const NumbersEntryBox = () => {

    const [ firstNumberBoxInput, setFirstNumberBoxInput ] = useState('');
    const [ secondNumberBoxInput, setSecondNumberBoxInput ] = useState('');
    const [ thirdNumberBoxInput, setThirdNumberBoxInput ] = useState('');
    const [ fourthNumberBoxInput, setFourthNumberBoxInput ] = useState('');

    useEffect(() => {
        handleAutoFocus();
    })

    function handleSubmit(e){
        e.preventDefault();
        let text = "Form Submitted with: " + firstNumberBoxInput + secondNumberBoxInput + thirdNumberBoxInput + fourthNumberBoxInput;
        alert(text);
        setFirstNumberBoxInput('');
        setSecondNumberBoxInput('');
        setThirdNumberBoxInput('');
        setFourthNumberBoxInput('');
        handleAutoFocus();
    }

    function handleFirstNumInput(e){
        const re = /^[0-9.\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setFirstNumberBoxInput(e.target.value);
        }
        if(e.key === 'delete'){
            console.log("BACK")
        }
    }

    function handleSecondNumInput(e){
        const re = /^[0-9.\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setSecondNumberBoxInput(e.target.value);
        }
    }

    function handleThirdNumInput(e){
        const re = /^[0-9.\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setThirdNumberBoxInput(e.target.value);
        }
    }

    function handleFourthNumInput(e){
        const re = /^[0-9.\b]+$/;
        if (e.target.value === '' || re.test(e.target.value)) {
            setFourthNumberBoxInput(e.target.value);
        }
    }

    function handleAutoFocus(){
        let focus = document.querySelectorAll('input');
        focus.forEach(input => {
            if(focus[0] === input) {
                input.focus();
            } else {
                input.disabled = true;
            }
        })
        if(firstNumberBoxInput.length > 0){
            focus[1].disabled = false;
            focus[1].focus();
        }
        if(firstNumberBoxInput.length > 0 &&
            secondNumberBoxInput.length > 0){
            focus[2].disabled = false;
            focus[2].focus();
        }
        if(firstNumberBoxInput.length > 0 &&
        secondNumberBoxInput.length > 0 &&
        thirdNumberBoxInput.length > 0){
            focus[3].disabled = false;
            focus[3].focus();
        }
        if(firstNumberBoxInput.length > 0 &&
            secondNumberBoxInput.length > 0 &&
            thirdNumberBoxInput.length > 0 &&
            fourthNumberBoxInput.length > 0){
            focus[4].disabled = false;
            focus[4].focus();
        }
    }

    return (
        <div className="form-inputs-wrapper">
            <form onSubmit={(e) => {handleSubmit(e)}}>
                <label>
                    <input className="input" type="text" placeholder="1" autoFocus value={firstNumberBoxInput} onChange={(e) => handleFirstNumInput(e)}/>
                </label>
                <label>
                    <input className="input" type="text" placeholder="2" value={secondNumberBoxInput} onChange={(e) => handleSecondNumInput(e)}/>
                </label>
                <label>
                    <input className="input" type="text" placeholder="3" value={thirdNumberBoxInput} onChange={(e) => handleThirdNumInput(e)}/>
                </label>
                <label>
                    <input className="input" type="text" placeholder="4" value={fourthNumberBoxInput} onChange={(e) => handleFourthNumInput(e)}/>
                </label>
                <input className="submit" type="submit" value="Press Enter" />
            </form>
        </div>
    )
}
export default NumbersEntryBox;