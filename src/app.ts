import {Express} from 'express';
import {Request, Response} from 'express'
import express from 'express';
import apiRoute from './api.route'


export default function (app :Express) {
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use("/api", apiRoute)

    app.use("*", (req, res) => {
res.status(404).json({
    status: false,
    message: "Not found"
})
    })

app.use((err: any, req: any, res: any, next: any) => {
    if(err){ 
        res.status(500).json({
            status: false,
            message: "Something went wrong",
            error : err
        });
    }
    if (res.headersSent) {
        return next(err);
    }
    res.status(500).json({
        status: false,
        message: "Unexpected Error Occurred. Please contact our support team."
    });
})};