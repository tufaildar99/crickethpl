// src/components/Register/Register.js
import React from "react";
import { Link } from "react-router-dom";
import styles from "./Register.module.css";

const Register = () => {
  return (
    <div className={styles.container}>
      <Link to="./registration" className={styles.button}>
        Register Now
      </Link>
    </div>
  );
};

export default Register;
