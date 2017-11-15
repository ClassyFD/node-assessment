let data = require('./userData.json');
module.exports = {
    users: (req, res)=> {
        if (req.query.favorites) {
            let newData = data.filter((e)=>{
                if (e.favorites.indexOf(req.query.favorites) > -1) {
                    return e;
                }
            })
            res.status(200).send(newData);
        } else if (req.query.age){
            let newData = data.filter((e)=>{
                if (e.age < req.query.age) {
                    return e;
                }
            })
            res.status(200).send(newData);
        } else if (req.query.lastname) {
            let newData = data.filter((e)=>{
                if (e.last_name === req.query.lastname) {
                    return e;
                }
            })
            res.status(200).send(newData);
        } else if (req.query.email) {
            let newData = data.filter((e)=>{
                if (e.email === req.query.email) {
                    return e;
                }
            })
            res.status(200).send(newData);
        } else {
            res.status(200).send(data);
        }
    },
    usersID: (req, res)=>{
        if (req.params.id) {
            let newData = data.filter((e)=>{
                return e.id === Number(req.params.id)
            })
            newData.length > 0?
            res.status(200).send(newData[0]) :
            res.status(404).json(null)
        }
    },
    admins: (req, res)=>{
        let newData = data.filter((e)=>{
            return e.type==='admin';
        })
        res.status(200).send(newData)
    },
    nonAdmins: (req, res)=>{
        let newData = data.filter((e)=>{
            return e.type !== 'admin';
        })
        res.status(200).send(newData)
    },
    userType: (req, res)=>{
        if (req.params.type) {
            let newData = data.filter((e)=>{
                return e.type === req.params.type;
            })
            res.status(200).send(newData);
        } else {
            res.status(404).json(null);
        }
    },
    updateUser: (req, res)=> {
        if (req.params.id) {
            data = data.map((e)=>{
                if (req.params.id == e.id) {
                    return req.body;
                } else {
                    return e;
                }
            })
        }
        res.status(200).send(data);
    },
    addUser: (req, res)=>{
        let newObj = req.body;
        newObj.id = data[data.length - 1].id + 1;
        data.push(newObj);
        res.send(data)
    },
    deleteUser: (req, res)=>{
        if (req.params.id) {
            data = data.filter((e)=>{
                return e.id != req.params.id;
            })
        }
        res.status(200).send(data)
    }
}