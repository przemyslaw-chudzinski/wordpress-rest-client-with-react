import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Form, Button} from 'semantic-ui-react';

const AddCommentForm = props =>
    <Fragment>
        <Form>
            <Form.TextArea placeholder="Write a comment" />
            <Button content='Dodaj komentarz' labelPosition='left' icon='edit' primary />
        </Form>
    </Fragment>;

AddCommentForm.propTypes = {
    onSubmit: PropTypes.func
};

export default AddCommentForm;