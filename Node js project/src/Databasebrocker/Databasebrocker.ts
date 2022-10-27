import {createConnection} from 'mysql';

//connection with mysql
const connection = createConnection({
    host:"localhost",
    user:"root1",
    password:"root1"
})
export default connection;