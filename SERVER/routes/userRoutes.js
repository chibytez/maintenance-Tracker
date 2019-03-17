    import {getAllUsersRequests, 
    // getRequestById,
    // createRequest,
    // modifyRequest,
    // cancelRequest
} from '../Controller/requestController';

const userRoutes = (app) => {
    app.get('/api/v1/users/requests', getAllUsersRequests );
//     app.get('/api/v1/users/requests/:id', getRequestById);
//     app.post('/api/v1/users/requests', createRequest);
//     app.put('/api/v1/users/requests/:id',modifyRequest);
//     app.delete('/api/v1/users/requests/:id', cancelRequest)
 }

    export default userRoutes;