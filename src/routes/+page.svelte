<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
<style>
  * {
    --bgColor: #03041c;
  }
  main {
    background-color: var(--bgColor);
    overflow: hidden;
    display: flex;
  }
  .con-canvas {
    height: 100vh;
    width: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  header {
    padding: 0 4rem;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 50%;
  }
  header > * {
    margin: 0.64rem 0;
    color: white;
  }
  header > h1 {
    font-family: system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI",
      Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
      sans-serif;
    letter-spacing: 2px;
  }
  header > p {
    font-family: "PT Sans", sans-serif;
    line-height: 1.75rem;
    font-size: 1rem;
    display: flex;
    justify-content: flex-end;
    /* text-align: justify;
      text-justify: inter-character; */
  }
  header > h1 span {
    font-weight: 900;
    background: -webkit-linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  header > button {
    align-items: center;
    background-image: linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
    border: 0;
    border-radius: 0.25rem;
    box-shadow: rgba(151, 65, 252, 0.2) 0 15px 30px -5px;
    box-sizing: border-box;
    color: #ffffff;
    display: flex;
    font-family: "Gruppo", cursive;
    font-weight: bold;
    font-size: 1.2rem;
    justify-content: center;
    line-height: 0.77em;
    max-width: 100%;
    min-width: 200px;
    width: 35%;
    padding: 3px;
    margin-top: 1rem;
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    touch-action: manipulation;
    white-space: nowrap;
    cursor: pointer;
  }
  button:active,
  header > button:hover {
    outline: 0;
  }
  header > button span {
    background-color: rgb(5, 6, 45);
    padding: 1rem 24px;
    border-radius: 6px;
    width: 100%;
    height: 100%;
    transition: 300ms;
  }
  header > button:hover span {
    background: none;
  }
  nav {
    display: none;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100vh;
  }
  nav ol {
    display: none;
    align-items: flex-start;
    justify-content: center;
    flex-direction: column;
    width: 50%;
  }
  nav ol li {
    opacity: 1;
    display: list-item;
    list-style-position: inside;
    color: white;
    font-size: 1.2rem;
    font-family: "poppins", sans-serif;
    text-decoration: none;
    letter-spacing: 2px;
    padding: 0.5rem 0;
  }
  nav a {
    color: white;
    font-size: 1.2rem;
    font-family: "poppins", sans-serif;
    text-decoration: none;
    letter-spacing: 2px;
    /* font-weight: bold; */
  }
  nav a:hover {
    background: -webkit-linear-gradient(144deg, #af40ff, #5b42f3 50%, #00ddeb);
    background-clip: text;
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
  }
  @media (min-width: 768px) {
    button {
      font-size: 24px;
      min-width: 224px;
    }
  }
</style>
