import "./read.css";

export default async function Read(props) {
  const resp = await fetch(`http://localhost:9999/topics/${props.params.id}`, {
    cache: "no-store",
  });
  const topic = await resp.json();
  return (
    <div className="contents">
      <h2>{topic.title}</h2>
      {topic.body}
      <br />
      <br />
      paramters : {props.params.id}
    </div>
  );
}
