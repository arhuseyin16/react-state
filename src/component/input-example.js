import {useState} from "react";

function InputExample() {
    const [form, setForm] = useState({name: "", surname: ""});
    function onChangeInput(event) {
        setForm({...form, [event.target.name]: event.target.value});
    }
    return (
        <div>
            <h1> name</h1>
            <input name="name" value={form.name} onChange={onChangeInput}/>
            <br/>
            <h1> surname</h1>
            <input name="surname" value={form.surname} onChange={onChangeInput}/>
            <br/>
            {form.name} { form.surname}

        </div>
    )
}

export default InputExample;