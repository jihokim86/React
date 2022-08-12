require('dotenv').config();

import Koa from 'koa';
import Router from 'koa-router';
import bodyParser from 'koa-bodyparser';
import mongoose from 'mongoose';


//const Koa = require('koa');
//const Router = require('koa-router');
//const bodyParser = require('koa-bodyparser');
//const mongoose = require('mongoose');

import api from './api';
//const api = require('./api');

//비구조화 할당을 통해 process.env 내부 값에 대한 레퍼런스 만들기
const {PORT,MONGO_URI} = process.env;

mongoose
.connect(MONGO_URI,{useNewUrlParser:true, useUnifiedTopology: true})
.then(()=>{
    console.log('Connected to MongoDB');
})
.catch(e=>{
    console.error(e);
});

const app = new Koa();
const router = new Router();

//라우터 설정
router.use('/api', api.routes());

//라우터 적용 전에 bodyParser적용
app.use(bodyParser());

//app인스턴스에 라우터 적용
app.use(router.routes()).use(router.allowedMethods());

//PORT가 지정되어 있지 않다면 4000을 사용
const port = PORT || 4000;
app.listen(port,()=>{
    console.log('Listening to port %d',port);
});