import React, {Component} from "react"
import Button from 'react-bootstrap/Button';
import { Form } from 'react-bootstrap';


class ScoreForm extends Component {
    render () {
        return (
            <Form>
                <Form.Group controlId="formBasicInitial">
                    <Form.Label>Initials</Form.Label>
                    <Form.Control type="text" placeholder="Enter Initials" />
                    <Form.Text className="text-muted">
                        Your name avatar
                    </Form.Text>
                </Form.Group>

                <Button variant="primary" type="submit">
                    Save
                </Button>
            </Form>
        );
    }
}

export default ScoreForm
