import React, { useState } from 'react';
import InputField from './InputField';
import TextAreaField from './TextAreaField';
import SelectField from './SelectField';
import CheckboxField from './CheckboxField';
import SubmitButton from './SubmitButton';

const PatientForm = () => {
    const [formData, setFormData] = useState({
        fullName: '',
        passportNumber: '',
        gender: '',
        age: '',
        email: '',
        phone: '',
        symptoms: '',
        isFollowUp: false,
    });

    const handleChange = (e) => {
        const { name, value, type, checked } = e.target;
        setFormData({
            ...formData,
            [name]: type === 'checkbox' ? checked : value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Xəstə haqqında məlumat:', formData);
        alert('Kart qeydiyyatdan keçdi');
    };

    return (
        <form className="patient-form" onSubmit={handleSubmit}>
            <label htmlFor="name"> Xəstənin tam adı: </label>
            <InputField
                type="text"
                name="fullName"

                value={formData.fullName}
                onChange={handleChange}
                required
            />
            <label htmlFor="name"> Seriya və pasport nömrəsi: </label>
            <InputField
                type="text"
                name="passportNumber"
                value={formData.passportNumber}
                onChange={handleChange}
                required
            />



            <SelectField
                name="gender"
                value={formData.gender}
                onChange={handleChange}
                options={[
                    { value: 'Kişi', label: 'Kişi' },
                    { value: 'Qadın', label: 'Qadın' },
                ]}
            />

            <label htmlFor="name"> Yaş: </label>
            <InputField
                type="number"
                name="age"

                value={formData.age}
                onChange={handleChange}
                required
            />
            <label htmlFor="name"> E-mail: </label>

            <InputField
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
            />

            <label htmlFor="name"> Telefon nömrəsi: </label>

            <InputField
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
            />
            <label htmlFor="name"> Simptomların təsviri: </label>

            <TextAreaField
                name="symptoms"
                value={formData.symptoms}
                onChange={handleChange}
                required
            />
            <CheckboxField
                name="isFollowUp"
                checked={formData.isFollowUp}
                onChange={handleChange}
                label="Təkrar qəbul"
            />
            <SubmitButton label="Göndər" />
        </form>
    );
};

export default PatientForm;
