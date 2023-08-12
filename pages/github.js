import { useState, useEffect } from 'react';

export default function Github() {
  const [data, setData] = useState(null)
  const [isLoading, setLoading] = useState(true)
  // console.log(data)

  useEffect(() => {
    setLoading(true)
    async function getData() {
      const data = await fetch(
        `${process.env.NEXT_PUBLIC_GITHUB_URL}`, {
        headers: {
          "accept": "application/vnd.github+json",
        },
      }
      );
      const res = await data.json();
      setData(res);
    }
    setLoading(false)
    getData()
  }, [])

  if (isLoading && !data) return <p>Loading...</p>
  if (!isLoading && !data) return <p>No profile data</p>

  return (
    <div>
      <h1>My latest Github works:</h1>
      <div>
        {data.map(dataItem => (
          <div key={dataItem.id}>
            <h3>{dataItem.name}</h3>
            <p>{dataItem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
