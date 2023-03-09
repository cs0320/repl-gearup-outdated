interface HistoryBoxProps {
  history: string[];
}

function HistoryBox(props: HistoryBoxProps) {
  return (
    <div className="repl-history">
      {/* Map over the history array and display each item in a div */}
      {props.history.map((item, index) => (
        // You may eventually make this a component, but for now it's just a div
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default HistoryBox;
