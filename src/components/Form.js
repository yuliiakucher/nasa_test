import React from "react";
import {Formik} from "formik";
import * as yup from 'yup'
import FormControl from "@material-ui/core/FormControl";
import InputLabel from "@material-ui/core/InputLabel";
import Select from "@material-ui/core/Select";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import FormHelperText from "@material-ui/core/FormHelperText";
import {useStyles} from "./Styles";



const Form = (props)=> {
    const initialValues = {
        name: 'curiosity',
        camera: 'fhaz',
        sol: '',
        page: 1
    }

    const onSubmit = values => {
        console.log(values)
        props.getData(values.name, values.camera, values.sol, values.page)
    }

    const validationSchema = yup.object({
        sol: yup.string().matches(/^(?:(?:[0-9])+,{0,1})*[0-9]+$/, 'Sol can be only numbers').required('Sol is required')
    })

    const classes = useStyles();
    return(
        <Formik initialValues={initialValues} onSubmit={onSubmit} validationSchema={validationSchema}>
            {({handleChange, values, handleSubmit, touched, errors,
              handleBlur}) => {
                return (
                    <form className={classes.form}>
                        <FormControl margin='normal'>
                            <InputLabel id='rover-name'>Rover</InputLabel>
                            <Select
                                native
                                name='name'
                                onChange={handleChange}
                                labelId='rover-name'
                                label='Rover'>
                                <option value={'curiosity'}>Curiosity</option>
                                <option value={'opportunity'}>Opportunity</option>
                                <option value={'spirit'}>Spirit</option>
                            </Select>
                        </FormControl>
                        <FormControl margin='normal'>
                            <InputLabel id='rover-name'>Camera</InputLabel>
                            <Select
                                native
                                onChange={handleChange}
                                name='camera'
                            >
                                <option value={'fhaz'}>Front Hazard Avoidance Camera</option>
                                <option value={'rhaz'}>Rear Hazard Avoidance Camera</option>
                                {values.name === 'curiosity' && <option value={'mast'}>Mast Camera</option>}
                                {values.name === 'curiosity' && <option value={'chemcam'}>Chemistry and Camera Complex</option>}
                                {values.name === 'curiosity' && <option value={'mahli'}>Mars Hand Lens Imager</option>}
                                {values.name === 'curiosity' && <option value={'mardi'}>Mars Descent Imager</option>}
                                <option value={'navcam'}>Navigation Camera</option>
                                {values.name !== 'curiosity' && <option value={'pancam'}>Panoramic Camera</option>}
                                {values.name !== 'curiosity' && <option value={'MINITES'}>Miniature Thermal Emission Spectrometer (Mini-TES)</option>}
                            </Select>
                        </FormControl>
                        <FormControl margin='normal'>
                            <InputLabel id='rover-name'>Sol</InputLabel>
                            <Input
                                placeholder='1000'
                                name='sol'
                                onChange={handleChange}
                                onBlur={handleBlur}
                            />
                            {touched.sol && errors.sol ?
                                <FormHelperText>{errors.sol} </FormHelperText> : null}
                        </FormControl>

                        <Button variant='contained' color='primary' onClick={handleSubmit} disabled={errors.sol && true}>Search</Button>
                    </form>
                )
            }}
        </Formik>
    )
}

export default Form
