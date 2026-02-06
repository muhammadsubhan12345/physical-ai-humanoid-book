import clsx from "clsx";
import Heading from "@theme/Heading";
import styles from "./styles.module.css";

const FeatureList = [

];

function Feature({ Svg, title, description }) {
  return (
    <div className={clsx("col col--4")}>
      <div
        style={{
          background: "linear-gradient(135deg, #f3f4f6, #e0e7ff)",
          borderRadius: "16px",
          padding: "24px",
          margin: "12px",
          textAlign: "center",
          transition: "all 0.3s ease",
          boxShadow: "0 6px 20px rgba(0,0,0,0.1)",
        }}
        className="feature-card"
        onMouseEnter={(e) => {
          e.currentTarget.style.transform = "translateY(-5px) scale(1.02)";
          e.currentTarget.style.boxShadow = "0 12px 25px rgba(0,0,0,0.15)";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.transform = "translateY(0) scale(1)";
          e.currentTarget.style.boxShadow = "0 6px 20px rgba(0,0,0,0.1)";
        }}
      >
        <div className="feature-icon" style={{ marginBottom: "16px" }}>
          <Svg
            className={styles.featureSvg}
            role="img"
            style={{ width: "80px", height: "80px", filter: "drop-shadow(0 2px 6px rgba(0,0,0,0.1))" }}
          />
        </div>
        <Heading as="h3" style={{ fontSize: "1.5rem", color: "#4338CA", marginBottom: "12px" }}>
          {title}
        </Heading>
        <p style={{ color: "#1e293b", fontSize: "1rem", lineHeight: "1.6" }}>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features} style={{ padding: "60px 0", backgroundColor: "#f8fafc" }}>
      <div className="container">
        <div className="row">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
