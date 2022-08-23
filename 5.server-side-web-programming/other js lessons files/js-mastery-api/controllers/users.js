import { v4 as uuidv4} from 'uuid';
let users = [];

//get all users function
export const getAllUsers = (req,res) => {
    res.send(users);
} 

//post a user function
export const postUser = (req,res) => {

    const user = req.body;
    //const userId = uuidv4();
    //spread all property with ...
    users.push({ ...user ,"id" : uuidv4() });

    res.send(`User with the name ${user.firstName} added to the database`);
}

// get a user by id
export const getUserById =  (req,res) => {
    const { id } = req.params;
    const foundUser = users.find((user) => user.id == id);
    res.send(foundUser);
}

// delete  a user
 export const deleteUser = (req,res) => {
    const { id } = req.params;

    // only remove user when callback function returns false
    users = users.filter((user) => user.id != id);

    res.send(`User with the id ${id} deleted from the database`);
}

// update a user
export const updateUser = (req,res) => {
    const { id } = req.params;
    const { firstName, lastName, age} = req.body;
    console.log(req.body);
    const user = users.find((user) => user.id == id);

    if(firstName){
        user.firstName = firstName;
    }
    
    if(lastName){
        user.lastName = lastName;
    }
    
    if(age){
        user.age = age;
    }

    res.send(`User with the  id ${id} has been updated`);
}
