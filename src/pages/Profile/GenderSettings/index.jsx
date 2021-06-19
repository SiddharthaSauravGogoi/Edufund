import React from "react";
import { Form, Button } from "react-bootstrap";

export default function GenderSettings({ user, setGender, handleGender }) {
  return (
    <Form.Group>
      <Form.Label>Gender</Form.Label>
      <div className="d-flex align-items-center">
        <Form.Control
          type="text"
          defaultValue={user.gender}
          onChange={(event) => setGender(event.target.value)}
          required
        />
        <Button onClick={(event) => handleGender(event)}>Update</Button>
      </div>
    </Form.Group>
  );
}
