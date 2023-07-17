'use client'
import CompScaleAnimation from "../animations/scale-motion.comp";

const CompFooter = ()=>{
  return (
  <CompScaleAnimation>
  <div className="w-100 h-24 grid justify-center items-center text-center">
    <h3 className="border-b-2">Reservado todos los derechos 2022</h3>
    <h1 className="font-semibold text-lg">Tony Alex</h1>
  </div>
  </CompScaleAnimation>);
}

export default CompFooter;