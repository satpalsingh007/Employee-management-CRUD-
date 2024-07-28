import { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
let User = () => {
    const [users, setUsers] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:3000/")
            .then((result) => {
                console.log("data retrieved succesfully");
                setUsers(result.data);
            })
            .catch((err) => console.log(err));
    }, []);
    const handleDelete = (id) => {
        axios
            .delete("http://localhost:3000/deleteUser/" + id)
            .then((res) => {
                console.log(res);
                window.location.reload();
            })
            .catch((err) => console.log(err));
    };
    return (
        <div>
            <Link to={"/create"} className="createButton">
                Add +
            </Link>
            <table className="table">
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Age</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {users.map((user) => {
                        return (
                            <tr key={user._id}>
                                <td>{user.name}</td>
                                <td>{user.email}</td>
                                <td>{user.age}</td>
                                <td>
                                    <Link
                                        to={`/update/${user._id}`}
                                        className="updateButton"
                                    >
                                        Update
                                    </Link>
                                    <button
                                        onClick={(e) => {
                                            handleDelete(user._id);
                                        }}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        );
                    })}
                </tbody>
            </table>
        </div>
    );
};

export default User;
