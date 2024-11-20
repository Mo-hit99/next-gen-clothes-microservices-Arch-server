import express from "express";
import {createProductData,DeleteProductData, getAllProductData, getProductDataById, productDeleteReview, productReview, productUpdateReview, UpdateProductData } from "../controller/Product-controller.js"
import { upload } from "../Image_Multer/Image_multer.js";

export const Product_router = express.Router()
// product routes

// get data
Product_router.get('/productData/api/v1',getAllProductData)

// get by id
Product_router.get('/productData/api/v1/:id',getProductDataById)

// create data
Product_router.post('/productData/api/v1',upload.array('image'),createProductData)

// update data
Product_router.put('/productData/api/v1/:id',upload.array('image'),UpdateProductData)

// delete data
Product_router.delete('/productData/api/v1/:id',DeleteProductData)

// review product

Product_router.post('/productData/api/v1/:id/review',productReview);

// delete review product
Product_router.delete('/productData/api/v1/:productId/review/:reviewId', productDeleteReview);

// update review product
Product_router.patch('/productData/api/v1/:productId/review/:reviewId', productUpdateReview);

