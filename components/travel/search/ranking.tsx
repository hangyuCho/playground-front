const getData = async () => {
  const res: any = await fetch(`https://app.rakuten.co.jp/services/api/Travel/HotelRanking/20170426?applicationId=1041165688926091329&format=json&carrier=0&genre=all,onsen`);

  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }
  return res.json();
}

export async function Ranking({}: any) {
  const data = await getData();
  return (
    <>
      <ul className="divide-y divide-gray-200">
        {!data? <></> : data.Rankings?.map((Ranking: any) => (
          <li key={Ranking.lastBuildDate} className="py-4 flex">
            <div className="ml-3">
              <p className="text-sm font-medium text-gray-900">{Ranking.genre}</p>
              <p className="text-sm text-gray-500">{Ranking.title}</p>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
