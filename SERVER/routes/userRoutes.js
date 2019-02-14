    import {getAllRequest, 
    getRequestById, 
} from '../Controller/userControllers';

const userRoutes = (app) => {
    app.get('/api/v1/requests', getAllRequest );
    app.get('/api/v1/requests/:id', getRequestById)
}

    export default userRoutes;