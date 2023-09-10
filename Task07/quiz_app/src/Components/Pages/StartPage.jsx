import React, { useEffect, useState } from 'react'
import Card from 'react-bootstrap/Card';
import './StartPage.css';
import Button from 'react-bootstrap/Button';
import { useDispatch, useSelector } from 'react-redux';
import { toggleStart } from '../Store/Slice/StartSlice';
import { useNavigate } from 'react-router';

export const StartPage = () => {

    const [startPage, setStartPage] = useState(null);
    const dispatch = useDispatch();
    const start = useSelector(state => state.startSlice.Start);
    const Navigator = useNavigate();


    const ToggleStartButton = ()=> {
        if(!start){
            dispatch(toggleStart(true));
            Navigator('/quiz')
        }
        else{
            dispatch(toggleStart(false));
        }
    }

    useEffect(()=>{
        setStartPage(()=>{
            return(
                <div style={{ padding : '3rem', display: 'flex', alignItems: "center", justifyContent: 'center', backgroundColor: '#120911' }}>
                <Card style={{ width: '60%', padding: '3rem', }}>
                    <Card.Body>
                        <Card.Title style={{ display: 'flex', alignItems: "center", justifyContent: 'center' }}><h1>QUIZ APP</h1></Card.Title>
                        <Card.Subtitle style={{ display: 'flex', alignItems: "center", justifyContent: 'center' }} className="mb-2 text-muted"><h3>Developed By Mirza Hassan</h3></Card.Subtitle>
                        <Card.Text className='CardText'>
                            <ul style={{display: 'flex', justifyItems: 'center', alignItems: 'center', flexDirection: 'column', listStyleType: 'none'}}>
                                <li className='LiStyle'>Total questions to attempt: 10</li>
                                <li className='LiStyle'>Score in total: 10</li>
                                <li className='LiStyle'>Total time: 10 minutes</li>
                                <li className='LiStyle'>To save time, you can skip questions.</li>
                                <li className='LiStyle'>Skipped questions will show up at the end of the quiz.</li>
                            </ul>
                            <Button onClick={ToggleStartButton} variant="dark">Start Quiz</Button>
                        </Card.Text>

                    </Card.Body>
                </Card>
            </div>
            )
        })
    })

    return (
        <>
            {startPage}        
        </>
    )
}
