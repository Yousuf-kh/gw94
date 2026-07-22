import React, { useState } from "react";
const Form = () => {
    // State-larni to'g'ri e'lon qilish (oddiy qavslar bilan)
    const [name, setName] = useState("");
    const [age, setAge] = useState("");
    const [email, setEmail] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault(); // Sahifa qayta yuklanishini oldini oladi
        console.log("Form ma'lumotlari:", { name, age, email });
        alert("Ma'lumotlar jo'natildi!");
    };
    return (
        <form onSubmit={onFormSubmit}>
            <div>
                <label>Ismingiz Nima:</label>
                <input
                    type="text"
                    placeholder="Ismingizni kiriting"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div>
                <label>Yoshingiz Nechida:</label>
                <input
                    type="number"
                    placeholder="Yoshingiz nechida"
                    value={age}
                    onChange={(e) => setAge(e.target.value)}
                />
            </div>
            <div>
                <label>Emailingizni Kiriting:</label>
                <input
                    type="email"
                    placeholder="Emailingizni kiriting"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                />
            </div>
            {/* button tipi "submit" bo'lishi kerak, shunda form onSubmit ishlaydi */}
            <button type="submit">Jo'natish</button>
        </form>
    );
};

export default Form;