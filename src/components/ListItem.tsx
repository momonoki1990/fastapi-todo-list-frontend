type Props = {
  title: string;
  isDone: boolean;
};

const ListItem: React.FC<Props> = ({ title, isDone }) => {
  return (
    <div>
      <p>title: {title}</p>
      <p>done or not: {isDone ? "yes!" : "no"}</p>
    </div>
  );
};

export default ListItem;
