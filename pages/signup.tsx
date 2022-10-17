import { useRouter } from "next/router";
import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useAuth } from "../context/AuthContext";

const Signup = () => {
  const { user, signup } = useAuth();
  const router = useRouter();
  console.log(user);
  const [data, setData] = useState({
    email: "",
    password: "",
    leeftijd: "",
    geslacht: "",
  });

  const ValidateEmail = (email: String) => {
    if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(data.email)) {
      return true;
    }
    alert("You have entered an invalid email address!");
    return false;
  };

  const handleSignup = async (e: any) => {
    e.preventDefault();
    try {
      if (ValidateEmail(data.email) == true) {
        await signup(data.email, data.password);
        alert("Account created");
        router.push("/dashboard");
      } else {
        alert("Wrong email");
      }
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div
      style={{
        width: "40%",
        margin: "auto",
      }}
    >
      <h1 className="text-center my-3 ">Signup</h1>
      <Form onSubmit={handleSignup}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control
            type="email"
            placeholder="Enter email"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                email: e.target.value,
              })
            }
            value={data.email}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            placeholder="Password"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                password: e.target.value,
              })
            }
            value={data.password}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicAge">
          <Form.Label>Leeftijd</Form.Label>
          <Form.Control
            type="Leeftijd"
            placeholder="Leeftijd"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                leeftijd: e.target.value,
              })
            }
            value={data.leeftijd}
          />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicSex">
          <Form.Label>Geslacht</Form.Label>
          <Form.Control
            type="Geslacht"
            placeholder="Geslacht"
            required
            onChange={(e: any) =>
              setData({
                ...data,
                geslacht: e.target.value,
              })
            }
            value={data.geslacht}
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Signup
        </Button>
      </Form>
    </div>
  );
};

export default Signup;
