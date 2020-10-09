import React from 'react';
import { Select, FormControl, InputLabel, TextField } from '@material-ui/core';
import { data } from "../data/dishes";

const SelectDishForm = (props) => {
    return (
        <>
            <FormControl>
                <InputLabel>Select a dish</InputLabel>
                <Select
                    native
                    required
                >
                    <option aria-label="None" value="" />
                    {data.dishes.map((dish) => {
                        return <option key={dish.id} value={dish.id}>{dish.name}</option>
                    })}
                </Select>
                <TextField
                    type="number"
                    required
                    inputProps={{ min: 1, max: 10 }}
                />
            </FormControl>
      </>
    )
}

export default SelectDishForm;