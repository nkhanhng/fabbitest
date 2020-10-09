import React from 'react';
import { Select, FormControl, InputLabel, TextField, FormHelperText } from '@material-ui/core';

const meals = [
    { value: 'breakfast', name: 'Breakfast' },
    { value: 'lunch', name: 'Lunch' },
    { value: 'Dinner', name: 'Dinner' }
]

const SelectMealForm = (props) => {
    const { isFormValid, onChange, value } = props;
    return (
        <>
            <FormControl>
                <InputLabel htmlFor="age-native-simple">Select a meal</InputLabel>
                <Select
                    native
                    required
                    onChange={onChange}
                    name="meal"
                    value={value.meal}
                >
                    <option aria-label="None" value="" />
                    {meals.map((meal) => {
                        return <option key={meal.value} value={meal.value}>{meal.name}</option>
                    })}
                </Select>
                {!isFormValid && <FormHelperText error>Error</FormHelperText>}
                
                <TextField
                    type="number"
                    name="numberPeople"
                    onChange={onChange}
                    value={value.numberPeople}
                    required
                    inputProps={{ min: 1, max: 10 }}
                />
            </FormControl>
      </>
    )
}

export default SelectMealForm;