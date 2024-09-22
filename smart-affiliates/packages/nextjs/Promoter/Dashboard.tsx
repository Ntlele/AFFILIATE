// pages/index.tsx
"use client";

import { useEffect } from "react";
import Head from "next/head";
import { tsParticles } from "particles.js";

// pages/index.tsx

// pages/index.tsx

// pages/index.tsx

// pages/index.tsx

// pages/index.tsx

// pages/index.tsx

// pages/index.tsx

// pages/index.tsx

// pages/index.tsx

// pages/index.tsx

// pages/index.tsx

// pages/index.tsx

const Dashboard = () => {
  useEffect(() => {
    // Load particles.js script dynamically
    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/particles.js/2.0.0/particles.min.js";
    script.onload = () => {
      tsParticles.load("particles-js", {
        particles: {
          number: { value: 100, density: { enable: true, value_area: 800 } },
          color: { value: "#00ffcc" },
          shape: { type: "circle", polygon: { nb_sides: 5 } },
          opacity: { value: 0.5 },
          size: { value: 3, random: true },
          line_linked: { enable: true, distance: 150, color: "#00ffcc", opacity: 0.4, width: 1 },
          move: { enable: true, speed: 6 },
        },
        interactivity: {
          detect_on: "canvas",
          events: {
            onhover: { enable: true, mode: "repulse" },
            onclick: { enable: true, mode: "push" },
          },
        },
        retina_detect: true,
      });
    };
    document.body.appendChild(script);

    // Event listener for buttons
    const buttons = document.querySelectorAll(".buy-button");
    buttons.forEach(button => {
      button.addEventListener("click", () => {
        alert("Thank you for your purchase!");
      });
    });
  }, []);

  const promoters = [
    {
      name: "Promoter 1",
      image: "/man2.jpg", // Replace with actual image path
      description: "Hello, My name is John Doe and I am ready to link!",
    },
    {
      name: "Promoter 2",
      image: "/woman.jpeg", // Replace with actual image path
      description: "Hello, My name is Jane Doe and I am ready to link!",
    },
    {
      name: "Promoter 3",
      image: "/man.jpeg", // Replace with actual image path
      description: "Hello, My name is Alice and I am ready to link!",
    },
    {
      name: "Promoter 4",
      image: "/woman2.jpg", // Replace with actual image path
      description: "Hello, My name is Bob and I am ready to link!",
    },
  ];

  return (
    <>
      <div id="particles-js" className="fixed top-0 left-0 w-full h-full -z-10 opacity-60"></div>
      <div className="gradient"></div>
      <main className="px-4">
        <section id="products" className="products py-8 backdrop-blur-md">
          <h2 className="text-8xl sm:text-3xl font-bold text-center text-white mb-6">Promoters</h2>

          <div className="flex flex-wrap justify-center gap-6">
            {promoters.map((promoter, index) => (
              <div
                key={index}
                className="product-box bg-white/10 w-72 p-10 rounded-lg text-center hover:transform hover:-translate-y-2 hover:scale-105 transition-all duration-300 shadow-lg"
              >
                <div className="w-72 h-72 rounded-full overflow-hidden mb-4">
                  <img src={promoter.image} alt={`${promoter.name} Image`} className="w-24 h-auto object-cover" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{promoter.name}</h3>
                <p className="text-white">{promoter.description}</p>
                <button className="buy-button bg-gradient-to-r from-teal-400 to-teal-600 text-black font-bold py-2 px-4 rounded-lg mt-4 hover:scale-105 transition-transform">
                  Connect
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      <footer className="text-center py-4 bg-black/70 text-white">
        <p>&copy; 2023 Discord Token Store - All Rights Reserved</p>
      </footer>

      <style jsx>{`
        .gradient {
          --size: 750px;
          --speed: 50s;
          --easing: cubic-bezier(0.8, 0.2, 0.2, 0.8);
          width: var(--size);
          height: var(--size);
          filter: blur(calc(var(--size) / 5));
          background-image: linear-gradient(135deg, rgba(34, 193, 195, 0.5), rgba(253, 187, 45, 0.5));
          animation: rotate var(--speed) var(--easing) alternate infinite;
          border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
          position: absolute;
          top: 50%;
          left: 50%;
          transform: translate(-50%, -50%);
          z-index: -1;
        }

        @keyframes rotate {
          0% {
            transform: translate(-50%, -50%) rotate(0deg);
          }
          100% {
            transform: translate(-50%, -50%) rotate(360deg);
          }
        }

        @media (min-width: 720px) {
          .gradient {
            --size: 500px;
          }
        }
      `}</style>
    </>
  );
};

export default Dashboard;
