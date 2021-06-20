import React from "react";
import { Form, Button } from "react-bootstrap";

export default function EmailSettings({ user, setEmail, handleEmail }) {
  return (
    <Form.Group>
      <Form.Label>Email</Form.Label>
      <div className="d-flex align-items-center">
        <Form.Control
          type="email"
          required
          onChange={(event) => setEmail(event.target.value)}
        />
        <Button onClick={(event) => handleEmail(event)}>Update</Button>
      </div>
    </Form.Group>
  );
}
