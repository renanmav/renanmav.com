/**
 * Head component for the CV page.
 *
 * Includes my name, job title, photo and contact information
 */
export default function Head() {
  return (
    <section>
      <h1>Renan Mav</h1>
      <p>Software Engineer</p>

      <div id="contact" className="mt-4 flex flex-col">
        <a href="mailto:me@renanmav.com">me@renanmav.com</a>
        <a href="https://linkedin.com/in/renanmav">linkedin.com/in/renanmav</a>
        <a href="https://github.com/renanmav">github.com/renanmav</a>
        <a href="https://renanmav.com">renanmav.com</a>
      </div>
    </section>
  );
}
