"use client";

import Link from "next/link";
import { Container, Row, Col, Form, FormGroup, Input, Label, Button, FormFeedback } from "reactstrap";

export default function Success() {
  
  return (
    <main>
      <Container className="py-5">
        <h1>You are logged in!</h1>
      </Container>
    </main>
  );
}