import { useEffect, useState } from "react";

interface FileData {
	id: string;
}

function History() {
	const [data, setData] = useState<FileData[]>([]);

	useEffect(() => {
		const dummy = localStorage.getItem("history");
		if (dummy) {
			setData(JSON.parse(dummy));
		}
	}, []);

	return (
		<div>
			{data.length > 0 ? (
				data.map((file) => <div key={file.id}>{file.id}</div>)
			) : (
				<div>No history found</div>
			)}
		</div>
	);
}

export default History;
