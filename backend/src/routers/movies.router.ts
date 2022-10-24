import { Router } from "express";
import {create, fetch,remove, update} from '../controllers/movies.controller'

const moviesRouter=Router()
moviesRouter.post('/', create)
moviesRouter.get('/', fetch)
moviesRouter.delete('/:id', remove)
moviesRouter.patch('/', update)

export default moviesRouter