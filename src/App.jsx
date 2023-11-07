import InputGroup from "./components/input-group/InputGroup";
import Button from "./components/button/Button";

function App() {
  return (
    <div
      style={{
        width: "60%",
        margin: "2rem auto",
        backgroundColor: "white",
        padding: "2rem",
      }}
    >
      <div
        style={{
          textAlign: "center",
          display: "flex",
          flexDirection: "column",
          gap: "0.5rem",
          marginBottom: "1rem",
        }}
      >
        <h3 style={{ fontFamily: "Arial", fontSize: "2rem", color: "#222" }}>
          Sign Up
        </h3>
        <p
          style={{
            fontFamily: "Arial",
            fontSize: "1rem",
            color: "#666",
          }}
        >
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Deserunt,
          cumque
        </p>
      </div>
      <form>
        <InputGroup
          text="What is Your Name?"
          inputType="text"
          fieldFor="name"
        />
        <InputGroup
          text="What is Your Email?"
          inputType="text"
          fieldFor="email"
        />
        <InputGroup
          text="What is Your Password?"
          inputType="password"
          fieldFor="password"
        />
        <div>
          <Button type="reset" text="Reset" variant="warning" size="medium" />
          <Button type="submit" text="Submit" variant="success" size="small" />
          <Button type="button" text="Cancel" variant="error" size="large" />
        </div>
      </form>
    </div>
  );
}

export default App;

/**
 * When should we decide creating a new component ?
 * 1. When we need to write duplicate code
 * 2. Where only data is different
 */

/**
 * When you see any duplicate structure just make it a component
 */
