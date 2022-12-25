import React, { useState } from "react";
import Data from "./Data";
import shortid from "shortid";

let list = [];
let listItems;
let initialData = {
    date: '',
    distance: '',
}
function Steps() {
    let [data, setForm] = useState(initialData);
    let handleEvent = (event) => {
        event.preventDefault();
        let { name } = event.target;

        setForm((prevForm) => ({
            ...prevForm,
            [name]: event.target.value
        }));

    };

    function addDistance(event) {
        event.preventDefault();
        let dt;
        if (data.date.trim() === '' || data.distance.trim() === '') {
            return 
        } else if (dt = list.find((item) => item.date === data.date)) {
            dt.distance = Number(data.distance) + Number(dt.distance)
            setForm(initialData);
            return
        }
        list.unshift(data);
        setForm(initialData);

    }

    function deleteEvent(event) {
        for (let i = 0; i < list.length; i++) {
            if (list[i].date === event.target.closest('ul').firstChild.textContent) {
                list.splice(i, 1);
            }
        } 
        setForm((prevForm) => ({
            ...prevForm
        }))
    }

    return (
        <div className="container">
            <div className="input-container">
                <form className="input-form" onSubmit={addDistance}>
                    <label className="date">
                        <span className="date-span">Дата (ДД.ММ.ГГ)</span>
                        <input name='date' maxLength={8} placeholder='ДД.ММ.ГГ' className="date-input" value={data.date} onChange={handleEvent}></input>
                    </label>
                    <label className="distance">
                        <span className="distance-span">Пройдено км</span>
                        <input name="distance" type="number" className="distance-input" placeholder='км' value={data.distance} onChange={handleEvent}></input>
                    </label>
                    <button className="submit" type="submit" >ОК</button>
                </form>
            </div>
            <div className="data-container">
                <div className="data-titles">
                    <span className="title date-title">Дата (ДД.ММ.ГГ)</span>
                    <span className="title distance-title">Пройдено км</span>
                    <span className="title action-title">Действия</span>
                </div>
                <div>
                    {listItems = list.map((item) => <Data props={item} key={shortid.generate()} delete={deleteEvent} />)}
                </div>
            </div>

        </div>
    )
}



export default Steps