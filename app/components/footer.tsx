export default function Footer() {
  return (
    <footer className="mb-20">
      <Divider />
      <LastUpdated />
      <Memories />
    </footer>
  );
}

function Divider() {
  return (
    <div
      id="divider"
      className="my-8 w-12 border-b border-neutral-300 dark:border-neutral-800"
    />
  );
}

function LastUpdated() {
  // return (
  //   <p id="last-updated" className="text-sm text-gray-400">
  //     Last updated on {new Date().toLocaleDateString()}
  //   </p>
  // );
  return null;
}

function Memories() {
  return (
    <p id="memories" className="text-sm text-gray-400">
      Recording memories while time passes by...
    </p>
  );
}
