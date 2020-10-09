import React from 'react';
import { Select, FormControl, InputLabel } from '@material-ui/core';
import { data } from "../data/dishes";

const getRestaurant = () => {
    const restaurants = data.dishes.map((dish) => {
        return dish.restaurant;
    })
    let convertedRestaurants = restaurants.reduce((unique, restaurant) => unique.includes(restaurant) ? unique : [...unique, restaurant], [])
    return convertedRestaurants;
}

const SelectRestaurantForm = (props) => {
    const listRestaurants = getRestaurant();
    return (
        <>
            <FormControl>
                <InputLabel>Select a restaurant</InputLabel>
                <Select
                    native
                >
                    <option aria-label="None" value="" />
                    {listRestaurants.map((restaurant) => {
                        return <option key={restaurant} value={restaurant}>{restaurant}</option>
                    })}
                </Select>
            </FormControl>
      </>
    )
}

export default SelectRestaurantForm;