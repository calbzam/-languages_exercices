
import {getAvg} from "./averageService";
const logoImg = require('./content/lemoncode.png');

$('body').css('background-corm .gi  lor', 'lightSkyBlue');


const scores: number[] = [90, 75, 60, 99, 94, 30];

const averageScore: number = getAvg(scores);


const messageToDisplay: string = `average score ${averageScore}`;

document.write(messageToDisplay);

const img = document.createElement('img');
img.src = logoImg;

document.getElementById('imgContainer').appendChild(img);
