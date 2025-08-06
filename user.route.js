import express from 'express';

const userRoute = express.Router();

userRoute.get('/', (req, res) => {
    res.send(JSON.stringify([{id: 1, name:pepe},{id:2, name:juan}]));
});


export default userRoute;