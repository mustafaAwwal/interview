const Page = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Task Form Creation</h1>
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Deliverables</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>Create a sign up form</li>
          <li>
            Form fields:
            <ul className="list-disc pl-6">
              <li>Name</li>
              <li>Email</li>
              <li>Profile picture</li>
              <li>Password</li>
            </ul>
          </li>
          <li>Form submission</li>
          <li>Form validation</li>
          <li>
            A Next.js API which receives the information and logs username,
            email, password, and the profile image
          </li>
        </ul>

        <h2 className="text-xl font-semibold mt-6">Preferred libraries</h2>
        <ul className="list-disc pl-6 space-y-2">
          <li>React hook form</li>
          <li>Yup for validation</li>
          <li>Tanstack query for calling the API</li>
        </ul>
      </div>
    </div>
  );
};

export default Page;
