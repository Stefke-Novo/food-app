import {createPool} from 'mysql';

//connection with mysql
const pool = createPool({
    host:"localhost",
    user:'root1',
    password:'root1'
})
export default pool;