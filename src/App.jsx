const cityData = {
  name: "Terziiev Tymofii",
  country: "A student somewhere not sure",
  founded: 1300,
  facts: [
    "Like programming :)",
    "Likes sleeping",
    "Toaster",
  ],
  photos: [
    {
      url: "https://media.gettyimages.com/id/2043382008/photo/top-view-apartment-bedroom-handsome-young-man-sleeping-cozily-on-a-bed-in-his-bedroom-in-the.jpg?s=612x612&w=gi&k=20&c=UhgruduuCTSOTjJsD6TD2DtZsKvqngGOBrN5hykKABk=",
      caption: "Eep",
    },
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRXMnvCPV2V10t3jULRA0vMrCH8TmWJUTa8fKxKP-NU2_VB2LrNG2a85yw&s=10",
      caption: "Toaster",
    },
  ],
};

function CityHeader({ name, country, founded }) {
  return (
      <div style={{ marginBottom: 32 }}>
        <h1 style={{ margin: 0, fontSize: 36, color: "#000" }}>{name}</h1>
        <p style={{ margin: "4px 0 0", fontSize: 18, color: "#000" }}>
          {country} · Founded {founded}
        </p>
      </div>
  );
}

function FactList({ facts }) {
  return (
      <div style={{ marginBottom: 32 }}>
        <h2 style={{ fontSize: 20, marginBottom: 12, color: "#000" }}>Interesting Facts</h2>
        <ol style={{ paddingLeft: 20, margin: 0 }}>
          {facts.map((f, i) => (
              <li key={i} style={{ marginBottom: 8, color: "#000" }}>
                {f}
              </li>
          ))}
        </ol>
      </div>
  );
}

function PhotoGallery({ photos }) {
  return (
      <div>
        <h2 style={{ fontSize: 20, marginBottom: 12 }}>Photos</h2>
        <div style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
          {photos.map((p, i) => (
              <div key={i} style={{ margin: 0 }}>
                <img
                    src={p.url}
                    alt={p.caption}
                    style={{ width: 320, height: 200, objectFit: "cover", display: "block" }}
                />
                <p style={{ marginTop: 4, fontSize: 13, color: "#555" }}>
                  {p.caption}
                </p>
              </div>
          ))}
        </div>
      </div>
  );
}

export default function App() {
  const { name, country, founded, facts, photos } = cityData;
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
        <CityHeader name={name} country={country} founded={founded} />
        <FactList facts={facts} />
        <PhotoGallery photos={photos} />
      </div>
  );
}