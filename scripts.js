const fetchCdi = async () => {
  const url = "https://api.bcb.gov.br/dados/serie/bcdata.sgs.4189/dados/ultimos"
  try {
    const response = await fetch(url)
    const json = await response.json()
    console.log(json)
  } catch (error) {
  }
}
(async () => { await fetchCdi() })()