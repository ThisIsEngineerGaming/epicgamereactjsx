import { useState } from "react";

const cityData = {
  name: "Ultrakill",
  country: "A fast paced boomer shooter",
  founded: 2020,
  facts: [
    "Can run on a literal potato",
    "Very confusing",
    "Evil",
  ],
  photos: [
    {
      url: "https://geometry-games.io/cache/data/image/game/ultrakill/ultrakill-m320x190.webp",
      caption: "Stupid gopro(playable character)",
    },
    {
      url: "https://encrypted-tbn1.gstatic.com/images?q=tbn:ANd9GcQ_JkYMxNYU2sjdRYMqfCy0UYZT-v7sYsEUpU1xvM6QEpVDZdry",
      caption: "Horrors beyond my scope of comprehension",
    },
  ],
};

function CityHeader(params) {
  return (
    <div style={{ marginBottom: 32 }}>
      <h1 style={{ margin: 0, fontSize: 36, color: "#000" }}>{params.name}</h1>
      <p style={{ margin: "4px 0 0", fontSize: 18, color: "#000" }}>
        {params.country} | Created {params.founded}
      </p>
    </div>
  );
}

function FactList(params) {
  const [visible, setVisible] = useState(true);

  return (
    <div style={{ marginBottom: 32 }}>
      <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
        <h2 style={{ fontSize: 20, margin: 0, color: "#000" }}>Interesting Facts</h2>
        <button onClick={() => setVisible(!visible)}>
          {visible ? "Hide" : "Show"}
        </button>
      </div>
      {visible && (
        <ol style={{ paddingLeft: 20, margin: 0 }}>
          {params.facts.map((f, i) => (
            <li key={i} style={{ marginBottom: 8, color: "#000" }}>
              {f}
            </li>
          ))}
        </ol>
      )}
    </div>
  );
}

function PhotoCard(params) {
  const [likes, setLikes] = useState(0);

  return (
    <div style={{ margin: 0 }}>
      <img
        src={params.photo.url}
        alt={params.photo.caption}
        referrerPolicy="no-referrer"
        style={{
          width: 320,
          height: 200,
          objectFit: "cover",
          display: "block",
        }}
      />
      <p style={{ marginTop: 4, fontSize: 13, color: "#555" }}>
        {params.photo.caption}
      </p>
      <button onClick={() => setLikes(likes + 1)}>
        ❤️ {likes}
      </button>
    </div>
  );
}

function PhotoGallery(params) {
  return (
    <div>
      <h2 style={{ fontSize: 20, marginBottom: 12 }}>Photos</h2>
      <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
        {params.photos.map((p, i) => (
          <PhotoCard key={i} photo={p} />
        ))}
      </div>
    </div>
  );
}

export default function App() {
  return (
    <div
      style={{
        fontFamily: "sans-serif",
        background: "#fff",
        color: "#000",
        maxWidth: 720,
        margin: "40px auto",
        padding: "0 16px",
      }}
    >
      <CityHeader
        name={cityData.name}
        country={cityData.country}
        founded={cityData.founded}
      />
      <FactList facts={cityData.facts} />
      <PhotoGallery photos={cityData.photos} />
    </div>
  );
}
