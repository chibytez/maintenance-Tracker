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

  export const getRequestById = (req, res) => {
    const id = parseInt(req.params.requestId, 10);
    const userId = req.body;
    db.query({
      text: 'SELECT * FROM requests WHERE id=$1 AND user_id=$2 ORDER BY id ASC',
      values: [id, userId],
    })
    .then ((request) => {
      if (request.rows.length > 0) {
        return res.status(200)
          .json({
            request: request.rows,
          });
      }
      res.status(404)
        .json({
          message: 'Request not found',
        });
    })
    .catch(error => res.status(500).json({message:error.message}));
  };