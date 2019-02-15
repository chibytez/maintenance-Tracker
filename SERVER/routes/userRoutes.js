    import {getAllRequest, 
    getRequestById,
    createRequest,
    modifyRequest
} from '../Controller/userControllers';

const userRoutes = (app) => {
    app.get('/api/v1/users/requests', getAllRequest );
    app.get('/api/v1/users/requests/:id', getRequestById);
    app.post('/api/v1/users/requests', createRequest);
    app.put('/api/v1/users/requests/:id',modifyRequest)
}

    export default userRoutes;