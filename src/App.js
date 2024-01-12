import React from "react";
import "./App.css";
import header_pic from "./media/header_pic.jpg";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import copy from "copy-to-clipboard";

const styles = {
  app: {
    textAlign: "center",
    backgroundColor: "white",
  },
  header: {
    // backgroundColor: "#282c34",
    // padding: "10px",
    color: "white",
  },
  headerImage: {
    width: "100%",
    height: "auto",
  },
  bioSection: {
    padding: "20px",
    textAlign: "center",

    display: "flex",
    justifyContent: "center",
  },
  musicCards: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    flexDirection: "row",
    flexWrap: "wrap",
  },
  musicCard: {
    borderRadius: "30px",
    background: "#f1f1f1",
    width: "300px",
    // backgroundColor: "rgba(65, 65, 65, 0.308)",
    boxShadow: "10px 10px 2px #bebebe", // Add box shadow for 3D effect
    display: "flex",
    flexDirection: "column",
    justifyContent: "space-around",
    alignItems: "center",
    textAlign: "left",
    padding: "20px",

    // You can add more styles as needed
  },
  cornerWrapper: {
    borderRadius: "30px",
    overflow: "hidden",
    width: "250px",
    height: "200px",
    boxShadow: "5px 5px 2px #bebebe",
  },
};

function App() {
  const songIntrosURL =
    "https://www.youtube.com/embed/17AIi9tqYTY?si=gMPBSjWPwxyfyNPH";

  const songIntroData = [
    {
      title: "Song Intros Demo",
      description:
        "Guitar intros for 'Sweet Child of Mine', 'Save a Horse Ride a Cowboy', 'Country Girl', 'Billie Jean', and 'Tennessee Whiskey'",
      videoId: "17AIi9tqYTY",
    },
    // Add more entries for additional songs
  ];

  const copyToClipboard = (e) => {
    e.preventDefault();
    let copyText = "admrhds92@gmail.com";
    let isCopy = copy(copyText);
    if (isCopy) {
      toast.success("Adam Rhodes email copied to clipboard!");
    }
  };
  return (
    <div style={styles.app}>
      
      <header style={styles.header}>
        <img
          src={header_pic}
          alt="Nashville Skyline"
          style={styles.headerImage}
        />
      </header>

      {/* Bio Section */}
      <section style={styles.bioSection}>
        <p style={{ width: "50%" }}>
          Hey there! I'm Adam Rhodes, a musician in the Nashville area.
          I play lead and rhythm guitar, jamming out in country, blues, rock, jazz, and
          more. Check out my cool tunes below, and if you dig it and want to jam
          together, hit me up on my socials. Let's make some music magic! 🎸✨
        </p>
      </section>

      {/* Cards Section */}
      <section>
        <div style={styles.musicCards}>
          {/* Example Card */}
          <div style={styles.musicCard}>
            <h3>Intros</h3>

            <ul>
              <li>"Sweet Child of Mine" - Guns N' Roses</li>
              <li>"Save a Horse Ride a Cowboy" - Big & Rich</li>
              <li>"Country Girl - Luke bryan"</li>
              <li>"Billie Jean" - Michael Jackson</li>
              <li>"Tennessee Whiskey" - Chris Stapleton</li>
            </ul>
            <div style={styles.cornerWrapper}>
              <iframe
                width="250"
                height="200"
                src={`${songIntrosURL}${songIntroData.videoId}`}
                title={songIntroData.title}
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* <div style={styles.musicCard}>
            <h3>Song Title 1</h3>
            <p>Description of the song or any relevant information.</p>
            <a
              href="https://youtube.com/your_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube
            </a>
          </div>

          <div style={styles.musicCard}>
            <h3>Song Title 1</h3>
            <p>Description of the song or any relevant information.</p>
            <a
              href="https://youtube.com/your_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube
            </a>
          </div>

          <div style={styles.musicCard}>
            <h3>Song Title 1</h3>
            <p>Description of the song or any relevant information.</p>
            <a
              href="https://youtube.com/your_link"
              target="_blank"
              rel="noopener noreferrer"
            >
              Watch on YouTube
            </a>
          </div> */}
        </div>
      </section>
      <section
        style={{ display: "flex", justifyContent: "center", marginTop: "20px" }}
      >
        <div class="socialCard">
          <a
            href="https://www.instagram.com/admrhds92/"
            class="socialContainer containerOne"
          >
            <svg class="socialSvg instagramSvg" viewBox="0 0 16 16">
              {" "}
              <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"></path>{" "}
            </svg>
          </a>
          <a
            href="https://www.facebook.com/adam.rhodes.16547/"
            class="socialContainer containerThree"
          >
            <svg class="socialSvg facebookSvg" viewBox="0 0 50 50">
              {" "}
              <path d="M40,0H10C4.486,0,0,4.486,0,10v30c0,5.514,4.486,10,10,10h30c5.514,0,10-4.486,10-10V10C50,4.486,45.514,0,40,0z M39,17h-3 c-2.145,0-3,0.504-3,2v3h6l-1,6h-5v20h-7V28h-3v-6h3v-3c0-4.677,1.581-8,7-8c2.902,0,6,1,6,1V17z"></path>{" "}
            </svg>
          </a>
          <a
            href="/"
            class="socialContainer containerFour"
            onClick={copyToClipboard}
          >
            <svg class="socialSvg emailSvg" viewBox="0 0 8 6">
              {" "}
              <path d="m0 0h8v6h-8zm.75 .75v4.5h6.5v-4.5zM0 0l4 3 4-3v1l-4 3-4-3z"></path>{" "}
            </svg>
          </a>
        </div>
      </section>
    </div>
  );
}

export default App;
