import "./TagList.css";

const TagList = ({ tags = [] }) => {
  return (
    <>
      <table className="table table-bordered table-hover">
        <thead className="thead-light">
          <tr>
            <th className="text-center">Name</th>
            <th className="text-center">Type</th>
          </tr>
        </thead>
        <tbody>
          {tags.map((tag) => {
            return (
              <tr aria-label="tag" key={tag.name}>
                <td className="text-center">{tag.name}</td>
                <td className="text-center">{tag.type}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </>
  );
};

export default TagList;
