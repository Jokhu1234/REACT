const API_URL = "http://localhost:3500/jobs";

useEffect(() => { const fetchJobs = async () => { try { const response = await fetch(API_URL);

if (!response.ok) throw Error("Did not recieve data");
const listJobs = await response.json();
setJobs(listJobs);
setFetcherror(null);
} catch (err) {
setFetcherror(err.message);
} finally {
}
}; (async () => await fetchJobs())(); }, []);
