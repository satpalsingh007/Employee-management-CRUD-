import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
let CreateUser = () => {
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();
    const Submit = (e) => {
        e.preventDefault();
        axios
            .post("http://localhost:3000/createUser", { name, email, age })
            .then((result) => {
                console.log(result);
                navigate("/");
            })
            .catch((err) => console.log("hello"));
    };
    return (
        <form className="form" onSubmit={Submit}>
            <h2> Add User</h2>
            <div className="inputElement">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="formElement"
                    placeholder="name..."
                    id="name"
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="inputElement">
                <label htmlFor="email">Email</label>
                <input
                    type="email"
                    className="formElement"
                    placeholder="email..."
                    id="email"
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="inputElement">
                <label htmlFor="age">Age</label>
                <input
                    type="number"
                    className="formElement"
                    placeholder="age..."
                    id="age"
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <button>Submit</button>
        </form>
    );
};
export default CreateUser;
