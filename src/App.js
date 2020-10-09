import React, { useCallback, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Stepper, Step, StepLabel, Button, Typography, Container } from '@material-ui/core';
import SelectMealForm from './pages/SelectMealForm';
import SelectRestaurantForm from './pages/SelectRestaurant';
import SelectDishForm from './pages/SelectDishForm';
import { useForm } from './customHooks/useForm';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ['Step 1', 'Step 2', 'Step 3'];
}

export default function Main() {
  const classes = useStyles();
  const { inputs, change, error, setError } = useForm();
  console.log(inputs);
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = useCallback((activeStep) => {
    switch (activeStep) {
      case 0:
        if (!inputs.meal && !inputs.numberPeople) {
          setError(true);
        } else {
          setError(false)
          setActiveStep((prevActiveStep) => prevActiveStep + 1);
        }
        break;
      default:
        break;
    }
  }, [inputs.meal, inputs.numberPeople, setError]);

  const handleBack = useCallback(() => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  }, []);

  const handleReset = useCallback(() => {
    setActiveStep(0);
  }, []);

  const getStepContent = useCallback((step) => {
    switch (step) {
      case 0:
        return <SelectMealForm isFormInvalid={error} value={inputs} onChange={change}/>;
      case 1:
        return <SelectRestaurantForm/>;
      case 2:
        return <SelectDishForm/>;
      default:
        break;
    }
  }, [change, error, inputs]);

  return (
    <Container>
        <Stepper activeStep={activeStep}>
          {steps.map((label, index) => {
            const stepProps = {};
            const labelProps = {};
            return (
              <Step key={label} {...stepProps}>
                <StepLabel {...labelProps}>{label}</StepLabel>
              </Step>
            );
          })}
        </Stepper>
        <div>
          {activeStep === steps.length ? (
            <div>
              <Typography className={classes.instructions}>
                All steps completed - you&apos;re finished
              </Typography>
              <Button onClick={handleReset} className={classes.button}>
                Submit
              </Button>
            </div>
          ) : (
            <div>
              <form>
                {getStepContent(activeStep)}
                <div>
                  <Button disabled={activeStep === 0} onClick={handleBack} className={classes.button}>
                    Back
                  </Button>

                  <Button
                    variant="contained"
                    color="primary"
                    onClick={() => handleNext(activeStep)}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </form>
            </div>
          )}
        </div>
    </Container>
  );
}
