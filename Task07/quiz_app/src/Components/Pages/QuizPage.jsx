import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import './QuizPage.css';
import QuizData from '../../Data/Data.json';
import { addCorrectAnswer, addWrongAnswer, prepareResult, resetData } from '../Store/Slice/StartSlice';
import { useNavigate } from 'react-router';


export const QuizPage = () => {

    const dispatch = useDispatch();

    const [quizPage, setQuizPage] = useState();
    const [counter, setCounter] = useState(0);
    const [saveClicked, setSaveClicked] = useState(false);
    const [prevclicked, setIsPrevClicked] = useState(false);
    const [nextclicked, setIsNextClicked] = useState(false);
    const [selectedOption, setSelectedOption] = useState("");
    const [isChecked, setIsChecked] = useState([false, false, false, false]);
    const [result, setResult] = useState(false);
    const [status, setStatus] = useState(false);
    const Navigator = useNavigate();

    const correctAnswers = useSelector(state => state.startSlice.CorrectAnswers);
    const WrongAnswers = useSelector(state => state.startSlice.WrongAnswers);
    const preparedResult = useSelector(state => state.startSlice.result);


    const handleNext = () => {
        if(counter === QuizData.questions.length - 1){
            dispatch(prepareResult());
            if(prepareResult >= 50){
                setStatus(true);
            }
            setResult(true);
        }
        if(saveClicked){
            setIsNextClicked(true);
            setCounter(counter + 1);
        }
        else{
            alert('Please Click on Save Button First')
        }
    }

    const handlePrev = () => {
        if (counter > 0) {
            setIsPrevClicked(true);
            setCounter(counter - 1);
        }
    }
    

    const handleselection = (e) => {
        let value = e.target.value;
        setSelectedOption(value);
    }

    const handleRadioChange = () => {
        setIsChecked(true);
    }

    const handleSave = () => {
        setSaveClicked(true);
        if(QuizData.questions[counter].correctAnswer === selectedOption){
            dispatch(addCorrectAnswer());
        }
        else if(QuizData.questions[counter].correctAnswer !== selectedOption){
            dispatch(addWrongAnswer());
        }
    }

    const handleTryAgain = () => {
        dispatch(resetData());
        Navigator('/');
    }

    const handleExit = () => {
        window.close();
    }


    useEffect(() => {
        (!result) ? (
            setQuizPage((key) => {
                return (
                    <div key={key} style={{ padding: '3rem', display: 'flex', alignItems: "center", justifyContent: 'center', backgroundColor: '#120911' }}>
                        <Card style={{ width: '60%', padding: '3rem', }}>
                            <Card.Body>
                                <Card.Title className='card-title'>{QuizData.questions[counter].questionText}</Card.Title>
                                <Card.Text>
                                    <ul className='ListStyleUL' style={{ listStyleType: 'none' }}>
                                        {QuizData.questions[counter].options.map((option) => {
                                            return <li className='ListStyle'><input onClick={(e) => {handleselection(e)}} value={option}  className='InputRadio' type='radio' name='QuestionOption' /><label htmlFor='QuestionOption' className='OptionLabel'>{option}</label></li>
                                        })}
                                    </ul>
                                    <div className='ButtonDiv'>
                                        <Button onClick={handlePrev} variant="dark">Previous</Button>
                                        <Button variant="dark" onClick={handleSave}>Save</Button>
                                        <Button onClick={handleNext} variant="dark">Next</Button>
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })
        ) : (
            setQuizPage((key) => {
                return (
                    <div key={key} style={{ padding: '3rem', display: 'flex', alignItems: "center", justifyContent: 'center', backgroundColor: '#120911' }}>
                        <Card style={{ width: '40%', padding: '3rem', }}>
                            <Card.Body>
                                <Card.Title className='card-title'>Result</Card.Title>
                                <Card.Text>
                                    <ul className='List-Style-Type'>
                                        <li>Total Qustions : {QuizData.questions.length}</li>
                                        <li>Total Correct Answers : {correctAnswers}</li>
                                        <li>Total Wrong Answers : {WrongAnswers}</li>
                                        <li>Percentage Achived : {preparedResult}%</li>
                                        <li>Status : <b>{(status) ? "Fail" : "Pass"}</b></li>
                                    </ul>
                                    <div className='ButtonDiv'>
                                        {
                                            (!status) ? (
                                                <>
                                                    <Button onClick={handleTryAgain} variant="dark">Try Again</Button>
                                                    <Button onClick={handleExit} variant="dark">Exit</Button>
                                                </>
                                            ) : (
                                                <>
                                                    <Button onClick={handleTryAgain} variant="dark">Take Again</Button>
                                                    <Button onClick={handleExit} variant="dark">Exit</Button>
                                                </>
                                            )
                                        }
                                    </div>
                                </Card.Text>
                            </Card.Body>
                        </Card>
                    </div>
                )
            })
        )
    }, [selectedOption, handleSave, handleNext, counter, result])

    return (
        <>
            {quizPage}
            {/* <Toaster /> */}
        </>
    )
}
