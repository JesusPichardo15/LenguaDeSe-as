import Image1 from "../assets/nivelAudicion.jpeg";
import Image2 from "../assets/perAuditiva.jpeg";

export const LSM_CONTENT = {
  title: "¿QUE ES LSM?",
  content: `La lengua de señas es la lengua natural de las personas sordas. A diferencia del lenguaje oral, 
    la lengua de señas se basa en las expresiones faciales y en diversos movimientos de las manos, los brazos y el cuerpo.

    Cada país tiene su propia lengua de señas, y en el caso de nuestro país, la Lengua de Señas Mexicana (LSM), 
    es la que utilizan las personas sordas. Cabe mencionar que, debido a la diversidad de lenguas del país, han 
    surgido lenguas de señas emergentes en diversas comunidades indígenas.

    La LSM, como todo lenguaje, posee su propia gramática. Está compuesta por signos visuales con estructura lingulāšística
    propia con la cual la comunidad sorda comunica, articula y expresa sus pensamientos y emociones. Esto les permite 
    desarrollar sus capacidades cognitivas y de sociabilización, no solamente con su comunidad, sino con las personas 
    oyentes que tengan la disposición de aprender un poco de su lenguaje.`,
};

export const MITOS_CONTENT = {
  title: "MITOS Y REALIDADES SOBRE LAS PERSONAS SORDAS",
  content: `Los sordos no son sordomudos.
    La comunidad sorda no debe usar las manos para comunicarse.
    No toda la gente sorda sabe leer los labios.
    No toda las personas sordas sabe comunicarse mediante lengua de señas.`,
};

export const TERMINO_CONTENT = {
    title: "TERMINO CORRECTO PARA REFERIRSE A PERSONAS CON DISCAPACIDAD AUDITIVA",
    content: `El termino correcto para referirse a las personas con discapacidad auditiva 
    es persona sorda" no "sordomuda" se suele expresar de esta manera pero es incorrecto 
    ya que las personas sordas no pierden la capacidad de comunicarse oralmente sino que no 
    aprenden de la manera habitual.`,
    image : Image2,
};

export const NIVELES_CONTENT = {
    title: "NIVELES DE AUDICIÓN",
    content: `frecuencias que van desde los 20 hasta los 20.000 Hz (ciclos por segundo). Las frecuencias por debajo de 250 Hz 
    corresponden a sonidos ambientales y los sonidos del habla se localizan entre 250 y 6000 Hz. Mientras la frecuencia de la 
    onda determina su tono, la intensidad de la misma está definida por su amplitud también llamada nivel sonoro.

    En nivel sonoro se mide en decibelios (dB). Al susurrar se usa una intensidad de 30 dB y el nivel normal de una conversación 
    se ubica entre 45 a 60 dB. Un concierto de rock puede superar los 100 dB.`,
    image : Image1,
};

export const tabs = [
  { name: 'Colores', borderColor: 'border-yellow-300', path: '/colores'},
  { name: 'Números', borderColor: 'border-pink-300',  path: '/numeros'},
  { name: 'Saludos', borderColor: 'border-orange-500', path: '/saludos' },
  { name: 'Estaciones', borderColor: 'border-blue-500', path: '/estaciones' },
  { name: 'Animales', borderColor: 'border-green-500', path: '/animales' },
  { name: 'Abecedario', borderColor: 'border-yellow-300', path: '/abecedario' },
  { name: 'Fecha', borderColor: 'border-pink-300', path: '/fecha' },
  { name: 'Tiempo', borderColor: 'border-orange-500', path: '/tiempo' },
  { name: 'Material Escolar', borderColor: 'border-blue-500', path: '/material-escolar' },
  { name: 'Algunas Acciones', borderColor: 'border-green-500', path: '/algunas-acciones' },
];

import primaveraImg from '../assets/estaciones/primavera.png'
import veranoImg from '../assets/estaciones/verano.png'
import otoñoImg from '../assets/estaciones/otoño.png'
import inviernoImg from '../assets/estaciones/invierno.png'

export const est = [
  {name: "Primavera", img: primaveraImg},
  {name: "verano", img: veranoImg},
  {name: "Otoño", img:otoñoImg },
  {name: "Invierno", img: inviernoImg },
]