import React, { useState } from 'react';
import styled from 'styled-components';
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';
import RadioButton from 'components/atoms/RadioButton';
import { Formik, Form } from 'formik';
import * as Yup from 'yup';
import PropTypes from 'prop-types';

const StyledButton = styled(Button)`
  width: 165px;
  height: 46px;
  padding: 10px 60px;
  margin-top: 15px;
`;

const StyledWrapper = styled.div`
  display: flex;
  margin-bottom: 30px;
`;

const ContactForm = ({ handleSend }) => {
  const validationSchema = Yup.object().shape({
    name: Yup.string().min(3, 'Too short').max(50, 'Too long').required(`Proszę wpisać imię`),
    surname: Yup.string()
      .min(3, 'Too short')
      .max(50, 'Too long')
      .required(`Proszę wpisać nazwisko`),
    email: Yup.string()
      .matches(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
        'Proszę wpisać poprawny adres email',
      )
      .required('Proszę wpisać email'),
    phoneNumber: Yup.string()
      .matches(/^\+48\d{9}$/, 'Proszę podać poprawny numer telefonu')
      .required('Proszę wpisać numer telefonu'),
  });

  const [isMale, setMale] = useState(false);
  const [isFemale, setFemale] = useState(false);

  const handleRadioMale = () => {
    if (!isMale) {
      setMale(true);
    } else {
      setMale(false);
    }
    if (!isMale && isFemale) {
      setMale(true);
      setFemale(false);
    }
  };

  const handleRadioFemale = () => {
    if (!isFemale) {
      setFemale(true);
    } else {
      setFemale(false);
    }
    if (isMale && !isFemale) {
      setMale(false);
      setFemale(true);
    }
  };

  return (
    <Formik
      initialValues={{
        name: '',
        surname: '',
        email: '',
        phoneNumber: '',
      }}
      validationSchema={validationSchema}
      onSubmit={(values, { setSubmitting, resetForm }) => {
        setSubmitting(false);
        handleSend();
        resetForm();
      }}
    >
      {({ values, handleChange, handleBlur, isSubmitting, errors, touched }) => (
        <>
          <Form>
            <StyledWrapper>
              <RadioButton id="male" checked={isMale} handleButton={handleRadioMale}>
                Pan
              </RadioButton>
              <RadioButton id="female" checked={isFemale} handleButton={handleRadioFemale}>
                Pani
              </RadioButton>
            </StyledWrapper>
            {errors.name && touched.name && <div>{errors.name}</div>}
            <Input
              type="text"
              name="name"
              placeholder="Imię*"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.name}
            />
            {errors.surname && touched.surname && <div>{errors.surname}</div>}
            <Input
              type="text"
              name="surname"
              placeholder="Nazwisko*"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.surname}
            />
            {errors.email && touched.email && <div>{errors.email}</div>}
            <Input
              type="text"
              name="email"
              placeholder="E-mail*"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.email}
            />
            {errors.phoneNumber && touched.phoneNumber && <div>{errors.phoneNumber}</div>}
            <Input
              type="text"
              name="phoneNumber"
              placeholder="Numer Telefonu*"
              onChange={handleChange}
              onBlur={handleBlur}
              value={values.phoneNumber}
            />
            <StyledButton type="submit" disabled={isSubmitting}>
              WYŚLIJ
            </StyledButton>
          </Form>
        </>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  handleSend: PropTypes.func.isRequired,
};

export default ContactForm;
