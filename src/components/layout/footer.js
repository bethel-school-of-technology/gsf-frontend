import React from 'react'
import 'react-materialize';
import '../../App.css'

function Footer() {
    return (
        <div>
        <footer className="text-white mt-5 p-10">
      Copyright &copy; {new Date().getFullYear()} Genesis Strength and Fitness
    </footer>
    </div>
    )
}

export default Footer;
