const express = require('express'),
bodyParser = require('body-parser'),
CTRL = require('./usersCtrl.js'),
data = require('./userData.json'),
app = express(),
port = 3000;

//middleware
app.use(bodyParser.json());

//endpoints
app.get('/api/users/', CTRL.users);
app.get('/api/users/:id', CTRL.usersID);
app.get('/api/admins/', CTRL.admins);
app.get('/api/nonadmins/', CTRL.nonAdmins);
app.get('/api/user_type/:type', CTRL.userType);
app.put('/api/users/:id', CTRL.updateUser);
app.post('/api/users/', CTRL.addUser);
app.delete('/api/users/:id', CTRL.deleteUser);

//listen 
app.listen(port, () => console.log(`listening on port ${port}`));