import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
let UpdateUser = () => {
    const { id } = useParams();
    const [name, setName] = useState();
    const [email, setEmail] = useState();
    const [age, setAge] = useState();
    const navigate = useNavigate();
    useEffect(() => {
        axios
            .get("http://localhost:3000/getUser/" + id)
            .then((result) => {
                console.log(result);
                setName(result.data.name);
                setEmail(result.data.email);
                setAge(result.data.age);
            })
            .catch((err) => console.log(err));
    }, []);

    const Update = (e) => {
        e.preventDefault();
        axios
            .put("http://localhost:3000/updateUser/" + id, { name, email, age })
            .then((result) => {
                console.log(result);
                navigate("/");
            })
            .catch((err) => console.log("hello"));
    };
    return (
        <form className="form" onSubmit={Update}>
            <h2> Update User</h2>
            <div className="inputElement">
                <label htmlFor="name">Name</label>
                <input
                    type="text"
                    className="formElement"
                    placeholder="name..."
                    id="name"
                    value={name}
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
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            <div className="inputElement">
                <label htmlFor="age">Age</label>
                <input
                    typeof="number"
                    className="formElement"
                    placeholder="age..."
                    id="age"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <button>Update</button>
        </form>
    );
};
export default UpdateUser;
