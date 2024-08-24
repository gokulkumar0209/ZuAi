import { useEffect, useState } from "react";

interface FileData {
	content: string;
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
			data.map((file) => (
			  <div key={file.id} className="m-28">
				<div>{file.id}</div>
				<div className="m-5 ">
				  <object
					data={file.content}
				
					wmode="window"
					 
				  />
				
				</div>
			  </div>
			))
		  ) : (
			<div>No history found</div>
		  )}
		</div>
	  );
	}


export default History;
