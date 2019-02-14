const requests = [{
    id:1,
    requesting: 'engineering',
    name: 'Mario',
    email: 'mario@gmail.com'
},
{
    id:2,
    requesting: 'engineering',
    name: 'Mario',
    email: 'mario@gmail.com'
},
{
    id:3,
    requesting: 'engineering',
    name: 'Mario',
    email: 'mario@gmail.com'
}
];

export const getAllRequest =  (req, res) => {
    res.send(requests);
};

export const getRequestById =(req, res) => {
    const request = requests.find(r => r.id === parseInt(req.params.id));
    if (!request) return res.status(404).send('The request with the given ID was not found.');
    res.send(request);
};

export const createRequest =(req, res) => {
    const request = {
        id: requests.length + 1,
        requesting: req.body.requesting,
        name: req.body.name,
        email: req.body.email
    }
    requests.push(request);
    res.send(request);
};