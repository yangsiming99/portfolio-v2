export function Footer(props) {
  return (
    <footer className="footer bg-neutral text-neutral-content items-center p-4 mt-5">
      <aside className="grid-flow-col items-center">
        <p>Hello There @{new Date().getFullYear()}</p>
      </aside>
      <div></div>
      <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a href="https://www.linkedin.com/in/siming-yang/" target="_blank">
          {props.linkedin}
        </a>
        <a href="https://github.com/yangsiming99" target="_blank">
          {props.github}
        </a>
      </nav>
    </footer>
  );
}
