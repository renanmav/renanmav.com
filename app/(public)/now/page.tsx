import { myInfo } from "app/constants";

export default function NowPage() {
  return (
    <section>
      <h1 className="mb-4 text-xl font-semibold">
        now. <em className="text-sm font-light">or never.</em>
      </h1>
      {/* <span>Last update: 05/11/2024</span> */}

      <p className="mb-8 text-base">I'm currently living in {myInfo.address}</p>

      <div className="mb-8">
        <h2 className="mb-2 text-base font-semibold">What am I coding?</h2>
        <p className="text-base">
          I'm not working at the moment. I'm actively looking for a job.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="mb-2 text-base font-semibold">What am I learning?</h2>
        <p className="text-base">
          I'm learning about <em>Golang</em>.
        </p>
      </div>

      <div className="mb-8">
        <h2 className="mb-2 text-base font-semibold">What am I reading?</h2>
        <p className="text-base">
          <em>The Pragmatic Programmer</em> by Andrew Hunt and David Thomas.
        </p>
      </div>
    </section>
  );
}
