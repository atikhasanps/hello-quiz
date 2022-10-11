import React from 'react';

const QuizShow = ({question}) => {
    const {name, logo} = question.data;
    return (
        <div>
            <h2>Hello quiz</h2>
        </div>
    );
};

export default QuizShow;