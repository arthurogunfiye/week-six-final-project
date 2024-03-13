import React from "react";

const MovieDetailsTable = ({ header, body }) => {
  return (
    <table id="movieDetailsTable">
      <tbody>
        <tr>
          <th>{header}</th>
        </tr>
        <tr>
          <td>{body}</td>
        </tr>
      </tbody>
    </table>
  );
};

export default MovieDetailsTable;
