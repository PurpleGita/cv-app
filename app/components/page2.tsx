'use client';

import { useState } from "react";

export default function Page2({ setPolaroidImage }: { setPolaroidImage: (image: string) => void }) {
    const [currentProject, setCurrentProject] = useState('Hover over the names to see some of the projects i have done. Click to view on github');
    const [currentTitle, setCurrentTitle] = useState('What have i done?');
    
  return (
    <div className="w-full h-full relative">
      {/* Title */}
      <div className="absolute top-[15%] left-[20%]">
        <p className="opacity-80 text-[2vw] font-['PixelifySans']">{currentTitle}</p>
      </div>
      <div className="absolute top-[20%] left-[20%] right-[19%]">
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans']">
            {currentProject}
        </p>
      </div>

      {/* Left side text blocks */}
      <div className="absolute top-[50%] left-[20%] ">
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans'] mb-4 cursor-pointer pointer-events-auto hover:underline" 
              onMouseEnter={() => {
                setCurrentProject('a turn based video game where you block the enemies attacks by matching a ryhtem by tapping your charcters, made in Unity, and connected to a react website displaying highscores via a selfmade ASP.NET API. Click to view youtube video demonstration.');
                setPolaroidImage('/MauvePolaroid.png');
                setCurrentTitle('Mauve-Step');
         }}
         onClick={() => window.open('https://www.youtube.com/watch?v=4OLvK8UaJFg', '_blank')}
         > 
            
        Mauve-Step </p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans'] mb-4 cursor-pointer pointer-events-auto hover:underline"
              onMouseEnter={() => {
                setCurrentProject('a music app. Made in angular using a custom made ASP.NET API connected to a SQL database that fetches music data and login. Useres are able to like songs and view those songs on a diffrent playlist. Basicly spotify, but a little worse. Click to view github repository.');
                setPolaroidImage('/TempoTunePolariod.png');
                setCurrentTitle('TempoTune');
              }}
              onClick={() => window.open('https://github.com/TempoTuneCorp/TempoTuneCorp.github.io', '_blank')}
              >
          TempoTune
        </p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans'] mb-4 cursor-pointer pointer-events-auto hover:underline"
              onMouseEnter={() => {
                setCurrentProject('An Android/IOS app for plant care, made in React Native. The app allows users to create a profile for each of their plants, set watering reminders, and set picutures of the plants. Click to view github repository.');
                setPolaroidImage('/PlantApp.png');
                setCurrentTitle('Plant APP');
              }}
              onClick={() => window.open('https://github.com/PurpleGita/PlantApp', '_blank')}
              >
          Plant APP
        </p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans'] mb-4 cursor-pointer pointer-events-auto hover:underline" 
              onMouseEnter={() => {
                setCurrentProject('An android app that displays the hypothetical witch resturants menu and allows users to add items to their menu and make purchases, made in androidSDK. Click to view github repository.');
                setPolaroidImage('/moondFoodPolariod.png');
                setCurrentTitle('FullMoonsAndMeals');
              }}
              onClick={() => { window.open('https://github.com/PurpleGita/AndroidSDKProject', '_blank');}}
              >
          FullMoonsAndMeals
        </p>

      </div>

      {/* Right side text blocks */}
      <div className="absolute top-[50%] right-[30%]">
                <p className="opacity-80 text-[1.5vw] font-['PixelifySans'] mb-4 cursor-pointer pointer-events-auto hover:underline" 
              onMouseEnter={() => {
                setCurrentProject('A massive project made in a group of 5 classmates. We made a quiestionare service that is to be used by NEXT teachers to asses students, and view their progress overtime. I worked on the graphs shown on the frontend and i worked on the API backend. Click to view github repository.');
                setPolaroidImage('/quest1Polariod.png');
                setCurrentTitle('Next Project');
              }}
              onClick={() => window.open('https://github.com/LobaDK/Next-Project', '_blank')}
              >

          Next Project</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans'] mb-4 cursor-pointer pointer-events-auto hover:underline"
              onMouseEnter={() => {
                setCurrentProject('A web app made in angular a cookie clicker clone but clicking pumpkins instead. Connected to a .NET API and SQL database. Click to view github repository.');
                setPolaroidImage('/PumpkinPolaroid.png');
                setCurrentTitle('Pumpkin Clicker');
              }}
              onClick={() => window.open('https://github.com/PurpleGita/Pumpkin-Clicker', '_blank')}
              >
          Pumpkin Clicker</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans'] mb-4 cursor-pointer pointer-events-auto hover:underline"
              onMouseEnter={() => {
                setCurrentProject('a web app for collecting purple items, made in React. Click to view github repository.');
                setPolaroidImage('/cardGamePolaroid.png');
                setCurrentTitle('Purple-Collector');
              }}
              onClick={() => window.open('https://github.com/PurpleGita/Purple-Collector', '_blank')}
              >
          Purple-Collector</p>
        <p className="opacity-80 text-[1.5vw] font-['PixelifySans'] mb-4 cursor-pointer pointer-events-auto hover:underline"
              onMouseEnter={() => {
                setCurrentProject('your on it right now! Click to view github repository.');
                setPolaroidImage('/polaroidPolaroid.png');
                setCurrentTitle('Online CV');
              }}
              onClick={() => window.open('https://github.com/PurpleGita/cv-app', '_blank')}
              >
          Online CV</p>
      </div>
    </div>
  );
}
