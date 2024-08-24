// src/components/RegistrationForm/RegistrationForm.js
import React, { useState } from "react";
import styles from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const [formData, setFormData] = useState({
    teamName: "",
    captainName: "",
    contactPhone: "",
    players: Array(11).fill(""), // 11 player fields
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name.startsWith("player")) {
      const index = parseInt(name.split("-")[1], 10);
      const updatedPlayers = [...formData.players];
      updatedPlayers[index] = value;
      setFormData({ ...formData, players: updatedPlayers });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <section className={styles.container}>
      <h2 className={styles.heading}>Team Registration</h2>
      <form onSubmit={handleSubmit} className={styles.form}>
        <label className={styles.label}>
          Team Name:
          <input
            type="text"
            name="teamName"
            value={formData.teamName}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </label>

        <label className={styles.label}>
          Captain Name:
          <input
            type="text"
            name="captainName"
            value={formData.captainName}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </label>

        <label className={styles.label}>
          Contact Phone:
          <input
            type="tel"
            name="contactPhone"
            value={formData.contactPhone}
            onChange={handleChange}
            className={styles.input}
            required
          />
        </label>

        {formData.players.map((player, index) => (
          <label key={index} className={styles.label}>
            Player {index + 1}:
            <input
              type="text"
              name={`player-${index}`}
              value={formData.players[index]}
              onChange={handleChange}
              className={styles.input}
              required
            />
          </label>
        ))}

        <button type="submit" className={styles.button}>
          Submit
        </button>
      </form>
    </section>
  );
};

export default RegistrationForm;
