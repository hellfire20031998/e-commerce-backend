const getStudents = "select * from students";

const getStudentsById="select * from students where id = $1";


const checkEmailExists = "select s from students s where s.email = $1";

const addStudent ="insert into students (name,email,age,dob) values($1,$2,$3,$4)";

const deleteStudent="delete from students where id =$1";

const updateStudent="update students set name=$1 where id =$2";

module.exports={
    updateStudent,
getStudents,
getStudentsById,
deleteStudent,
checkEmailExists,
addStudent,
};