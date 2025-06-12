const Page = () => {
  return (
    <div>
      <h1>Server Component Task</h1>
      <p>Deliverables</p>
      <ul>
        <li>Create a server component</li>
        <li>
          The server component should fetch data from an
          https://fakestoreapi.com/products
        </li>
        <li>The server component should display the data in a table</li>
        <li>Should use fallback ui using suspense</li>
      </ul>
    </div>
  );
};

export default Page;
