import React, {useState} from "react";
import {Icon, Input, Select, InputNumber, Button } from "antd";

const {Option} = Select;

export const Filter = ({people, setFilteredPeople, genders }) => {

    const [valueInput, setValueInput] = useState("");
    const [valueSelect, setValueSelect] = useState("");

    const getFilteredMovies = (arr, {nameVal, genderVal }) => {
        let temp = [...arr];
        if(nameVal.length > 2){
            temp = temp.filter(item => item.first_name.toLowerCase().includes(nameVal.toLowerCase()) || item.last_name.toLowerCase().includes(nameVal.toLowerCase()))
        };
        if(genderVal){
            temp = temp.filter(item => item.gender === genderVal);
        }
        return temp
    };

    // const getFilteredMovies = (valueInput, valueSelect) => {
    //     return people.reduce((acc, item) => {
    //             if (
    //                 valueSelect &&
    //                 item.gender && item.gender.length
    //             ) {
    //                 if (
    //                     item.gender === valueSelect &&
    //                     (item.first_name.toLowerCase().includes(valueInput.toLowerCase()) || item.last_name.toLowerCase().includes(valueInput.toLowerCase()))
    //                 ) {
    //                     acc.push(item);
    //                 }
    //             } else if (
    //                 // valueInput &&
    //                 // !valueSelect &&
    //                 item.first_name.toLowerCase().includes(valueInput.toLowerCase()) || item.last_name.toLowerCase().includes(valueInput.toLowerCase())
    //             ) {
    //                 acc.push(item);
    //             } else if (item.gender && item.gender.length) {
    //                 acc.push(item);
    //             }
    //         return acc;
    //     }, []);
    // };

    const handleChangeInput = (e) => {
        const {value} = e.target;
        setValueInput(value);
        setFilteredPeople(getFilteredMovies(people, {nameVal:value, genderVal: valueSelect}));
    };

    // const handleChangeInput = (e) => {
    //     const {value} = e.target;
    //     setValueInput(value);
    //     // const arr = value.length > 2
    //     //     ? people.filter(item => {
    //     //             return item.first_name.toLowerCase().includes(value.toLowerCase()) || item.last_name.toLowerCase().includes(value.toLowerCase())})
    //     //     : [];
    //     // setFilteredPeople(arr);
    //     const arr = people.reduce((acc, item) => {
    //         if(
    //             value &&
    //             valueSelect &&
    //             item.gender && item.gender.length
    //         ) {
    //             if (
    //                 item.gender  === valueSelect &&
    //                 item.first_name.toLowerCase().includes(value.toLowerCase()) || item.last_name.toLowerCase().includes(value.toLowerCase())
    //             ) {
    //                 acc.push(item);
    //             }
    //         } else if(
    //             value &&
    //             !valueSelect &&
    //             item.first_name.toLowerCase().includes(value.toLowerCase()) || item.last_name.toLowerCase().includes(value.toLowerCase())
    //         ) {
    //             acc.push(item);
    //         } else if (!value && valueSelect && item.gender && item.gender.length){
    //             acc.push(item);
    //         }
    //
    //             // if (item.first_name.toLowerCase().includes(value.toLowerCase()) || item.last_name.toLowerCase().includes(value.toLowerCase())){
    //             //     if (valueSelect && item.gender && item.gender.length) {
    //             //         if(item.gender  === valueSelect){
    //             //             acc.push(item);
    //             //         }
    //             //     } else {
    //             //         acc.push(item);
    //             //     }
    //             // }
    //
    //             return acc;
    //         }, []);
    //     setFilteredPeople(arr);
    // };

    // const handleChangeSelect = (value) => {
    //     // const arr = filteredPeople.length
    //     //     ? filteredPeople.filter(item => (item.gender  === value))
    //     //     : people.filter(item => (item.gender  === value));
    //     const arr = people.reduce((acc, item) => {
    //         if (item.gender.length && item.gender){
    //             if (item.gender === value) {
    //                 if(valueInput &&
    //                     (item.first_name.toLowerCase().includes(valueInput.toLowerCase()) || item.last_name.toLowerCase().includes(valueInput.toLowerCase()))
    //                 ){
    //                     acc.push(item)
    //                 }else {
    //                     acc.push(item)
    //                 }
    //             }
    //         }
    //
    //         return acc;
    //     }, []);
    //     console.log("value", value);
    //     console.log("item.gender", arr);
    //     setValueSelect(value);
    //     setFilteredPeople(arr);
    // };

    const handleChangeSelect = (value) => {
        setValueSelect(value);
        setFilteredPeople(getFilteredMovies(people, {nameVal: valueInput, genderVal: value}));
    };

    const handleReset = (e) => {
        e.preventDefault();
        setValueInput("");
        setValueSelect("");
        setFilteredPeople(people)
    };

    return(
        <div className="filter">
            <Icon type="search"/>
            <Input
                type="text"
                name="filter-name"
                onChange={handleChangeInput}
                value={valueInput}
                placeholder="Name"
            />
            <Select placeholder="gender" onChange={handleChangeSelect} allowClear>
                {genders.map((item, i) => <Option key={i} value={item}>{item}</Option>)}
            </Select>
            {/*<InputNumber min={18} max={100} placeholder="from"/>*/}
            {/*<InputNumber min={18} max={100} placeholder="till"/>*/}
            <Button type="primary" onClick={handleReset}>Reset</Button>
        </div>
    )
};