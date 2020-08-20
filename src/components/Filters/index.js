import React from 'react';
import Alert from 'react-bootstrap/Alert'
import Form from 'react-bootstrap/Form'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Button from 'react-bootstrap/Button'

const temp = () => (
    <Container>

<Alert variant="secondary">
        Filter your results
        </Alert>

        <Row>
            <Col>home
        <Form>
                    <Form.Check
                        type='checkbox'
                        id='house'
                        label='house'
                    />
                    <Form.Check
                        type='checkbox'
                        id='apt'
                        label='apartment'
                    />

                    <hr />
                </Form>
            </Col>

            <Col>room
        <Form>
                    <Form.Check
                        type='checkbox'
                        id='shared'
                        label='shared'
                    />
                    <Form.Check
                        type='checkbox'
                        id='private'
                        label='private'
                    />

                    <hr />
                </Form>
            </Col>

            <Col>bathroom
        <Form>
                    <Form.Check
                        type='checkbox'
                        id='shared'
                        label='shared'
                    />
                    <Form.Check
                        type='checkbox'
                        id='private'
                        label='private'
                    />

                    <hr />
                </Form>
            </Col>
        </Row>

        <Row>
            <Col>parking

        <Form>
                    <Form.Check
                        type='checkbox'
                        id='onsite'
                        label='onsite'
                    />
                    <Form.Check
                        type='checkbox'
                        id='street'
                        label='street'
                    />
                </Form>
            </Col>


            <Col>pets
        <Form>
                    <Form.Check
                        type='checkbox'
                        id='dogs'
                        label='dogs ok'
                    />
                    <Form.Check
                        type='checkbox'
                        id='cats'
                        label='cats ok'
                    />
                </Form>
            </Col>


            <Col>smoking

        <Form>
                    <Form.Check
                        type='checkbox'
                        id='not allowed'
                        label='not allowed'
                    />
                    <Form.Check
                        type='checkbox'
                        id='allowed'
                        label='allowed'
                    />
                </Form></Col>
        </Row>
        <p>  </p>

        <Button variant="info" size="sm">
            Save
    </Button>{' '}
        <Button variant="secondary" size="sm">
            Clear Filters
    </Button>
    </Container>
);


export default temp;