import express from "express";

import categoryDelete from "../controller/category/categoryDelete";
import categoryGetAll from "../controller/category/categoryGetAll";
import categoryPost from "../controller/category/categoryPost";
import categoryUpdate from "../controller/category/categoryUpdate";
import categoryGetOne from "../controller/category/categoryGetOne";

const router = express.router();

router.get('/category', categoryGetAll )
router.get('/category/:id', categoryGetOne )
router.post('/category', categoryPost )
router.delete('/category/:id', categoryDelete )
router.update('/category/:id', categoryUpdate )