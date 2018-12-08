import React, {Fragment} from 'react';
import PropTypes from 'prop-types';
import {Form, Button} from 'semantic-ui-react';

const AddCommentForm = props =>
    <Fragment>
        <Form.TextArea />
        <Button content='Dodaj komentarz' labelPosition='left' icon='edit' primary />
    </Fragment>;

AddCommentForm.propTypes = {
    onSubmit: PropTypes.func
};

export default AddCommentForm;