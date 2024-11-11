import {useState, useEffect} from 'react';
import { SubmitButton } from '../components/Button';
import ReusableForm from '../components/FormTemplate';
import { initialValues, fields } from '../resources/forms/newCredentialsContent';
//import { useNavigate } from 'react-router-dom';
//import { TextField } from '@mui/material';
//import { formatDate } from '../utils/formatDate';


function NewCredForm() {   

    //const [currentPage, setCurrentPage] = useState('landingpage');
    const [isLoading, setIsLoading] = useState(true);
    //const navigate = useNavigate();
        
   

    const handleSubmit  = (values) => {
        const sessionId = localStorage.getItem('session_id');
        console.log('Session ID:', sessionId);
        /*
        /// Format the date value before submission
        const formattedValues = {
            ...values,
            dob: formatDate(values.dob),
        };*/
   
        //redacted
        fetch('https://null/api/submit', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Session-ID': sessionId, // Include the session ID in the headers
            },
            body: JSON.stringify(values),
            credentials: 'include',  // Ensure cookies are included in the request
        })
        .then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }
            response.json();
        })
         
        .then((data) => {
            console.log(data);
            console.log(values);

        })
        .catch(error => {
            // Handle errors
            console.error(error);
        });
    };

    useEffect(() => {
        window.addEventListener('load', () => {
            setIsLoading(false);
        });
        return () => {
            window.removeEventListener('load', () => {});
        };
    }, []);


    return (
        <div>
            <h3>Please Complete:</h3>
            <ReusableForm
                initialValues={initialValues}
                onSubmit={handleSubmit}
                fields={fields}
                SubmitButton={(props) => (
                    <SubmitButton {...props} text="SUBMIT" />
                )}
            />
        </div>
    );
}

export default NewCredForm;
