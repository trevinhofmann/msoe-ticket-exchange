import express from 'express';
import student from './api/model';

let app = express();

app.use((req, res, next) => {
    res.successJson = data => {
        let response = {
            success: true
        };
        if (typeof data === 'object') {
            response.data = data;
        }
        res.json(response);
    };
    res.failureJson = message => {
        let response = {
            success: false
        };
        if (typeof message === 'string') {
            response.message = message;
        }
        res.json(response);
    };
    next();
});

app.use('/student', student);

export default app;