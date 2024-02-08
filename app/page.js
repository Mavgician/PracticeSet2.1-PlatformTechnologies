"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input, Label, Button, FormFeedback } from "reactstrap";

export default function Home() {
  const router = useRouter()

  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [fnameInv, setFnameInv] = useState(false)
  const [lnameInv, setLnameInv] = useState(false)
  const [passInv, setPassInv] = useState(false)
  const [emailInv, setEmailInv] = useState(false)

  const [passConfInv, setPassConfInv] = useState(false)

  const fnameHandler = (e) => {
    setFirstName(e.target.value.replace(/[^a-zA-Z\s]/g, ""));
    setFnameInv(e.target.value.length === 0 ? true : false)
  };

  const lnameHandler = (e) => {
    setLastName(e.target.value.replace(/[^a-zA-Z\s]/g, ""));
    setLnameInv(e.target.value.length === 0 ? true : false)
  };

  const emailHandler = (e) => {
    setEmail(e.target.value)
    setEmailInv(e.target.value.length === 0 ? true : false)
  }

  const passwordHandler = (e) => {
    setPassword(e.target.value);
    setPassInv(e.target.value.length === 0 ? true : false)
  };

  const confPasswordHandler = (e) => {
    setConfirmPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) {
      setPassConfInv(true)
    } else {
      setPassConfInv(false)
    }
    if (password.length < 8) {
      setPassInv(true)
    }
    if (password.length === 0 || confirmPassword.length === 0 || firstName.length === 0 || lastName.length === 0 || email.length === 0) {
      setFnameInv(firstName.length === 0 ? true : false)
      setLnameInv(lastName.length === 0 ? true : false)
      setPassInv(password.length === 0 ? true : false)
      setEmailInv(email.length === 0 ? true : false)
      return;
    }
    if (!fnameInv && !lnameInv && !passInv && !passConfInv && !emailInv) {
      router.push('/success')
    }
  };

  return (
    <main>
      <Container className="py-5">
        <div>
          <h1>Create a new account</h1>
          <p>
            Already a member? <Link href={"/somewhere"}>Log in.</Link>
          </p>
        </div>
        <Row className="mt-5">
          <Col md="6" className="pb-5">
            <Form onSubmit={handleSubmit}>
              <Row>
                <Col>
                  <FormGroup floating>
                    <Input
                      id="user-fname"
                      placeholder="Name"
                      type="text"
                      value={firstName}
                      onChange={fnameHandler}
                      invalid={fnameInv}
                    />
                    <Label>First Name</Label>
                    <FormFeedback>
                      *Form is required
                    </FormFeedback>
                  </FormGroup>
                </Col>
                <Col>
                  <FormGroup floating>
                    <Input
                      id="user-lname"
                      placeholder="Last Name"
                      type="text"
                      value={lastName}
                      onChange={lnameHandler}
                      invalid={lnameInv}
                    />
                    <Label>Last Name</Label>
                    <FormFeedback>
                      *Form is required
                    </FormFeedback>
                  </FormGroup>
                </Col>
              </Row>
              <FormGroup>
                <Label>Email</Label>
                <Input id="user-email" type="email" invalid={emailInv} onChange={emailHandler} value={email}/>
                <FormFeedback>
                  *Email is required
                </FormFeedback>
              </FormGroup>
              <FormGroup className="mt-5">
                <Label>Password</Label>
                <Input
                  id="user-password"
                  type="password"
                  value={password}
                  onChange={passwordHandler}
                  invalid={passInv}
                />
                <FormFeedback>
                  *Invalid Password
                </FormFeedback>
              </FormGroup>
              <FormGroup>
                <Label>Confirm Password</Label>
                <Input
                  id="user-conf-password"
                  type="password"
                  value={confirmPassword}
                  onChange={confPasswordHandler}
                  invalid={passConfInv}
                />
                <FormFeedback>
                  *Passwords do not match!
                </FormFeedback>
              </FormGroup>
              <div className="d-flex mt-5">
                <Button className="px-5" size="lg" color="primary" type="submit">
                  Confirm
                </Button>
                <div className="flex-grow-1 px-2 d-flex justify-content-center">
                  <FormGroup check>
                    <Input type="checkbox" />{" "}
                    <Label check>I have read the terms & conditions.</Label>
                  </FormGroup>
                </div>
              </div>
            </Form>
          </Col>
          <Col md="6" className="bg-dark d-flex justify-content-center align-items-center text-center">
            <h1 className="m-0 p-0">Some text or graphic about motivation in our website.</h1>
          </Col>
        </Row>
      </Container>
    </main>
  );
}