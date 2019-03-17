import db from '../models/database';

export const getAllUsersRequests = (req, res) => {
    const { userId } = req.body;
    db.query('SELECT * FROM requests WHERE user_id=$1 ORDER BY id ASC', [userId])
      .then((request) => {
        if (request.rowCount >= 1) {
          res.status(200).json({
            success: true,
            message: 'request successfully retrieved',
            request: request.rows,
            count: request.rows[0].full_count,
          });
        }
        res.status(404).json({
          success: false,
          message: 'Yet to create any request',
        });
      })
      .catch(error => res.status(500).json({ message: error.message }));
  }