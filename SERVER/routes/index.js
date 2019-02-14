import userRoutes from './userRoutes';

const routes = (app) => {

    userRoutes(app);

    app.get('/', (request, response) => response.status(200).json({
        message: 'My Maintenance Tracker',
      }));

      app.get('/api/v1', (request, response) => response.status(200).json({
        message: 'Welcome to My Maintenance-Tracker App Api, Version 1',
      }));

      app.use((req, res, next) => {
        const error = new Error('Not Found');
        error.status = 404;
        next(error);
      });  
    };
    
    export default routes;